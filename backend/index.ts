import OpenAI from 'openai';
import express from 'express';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';

// load environment variables
dotenv.config();

// init express app
const app = express();
app.use(express.json());
app.use(
    cors({
        origin: 'localhost:4200',
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    })
);

// create openai api client
const openai = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'],
});

let selectedAgentName = '';
let lastestChallenge: String | null = '';

// root of web server
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

app.post('/api/selected-agent', (req, res) => {
    const { agent } = req.body;
    selectedAgentName = agent;
    console.log(`Selected agent: ${selectedAgentName}`);
    res.status(200).send(`Agent: ${selectedAgentName} received`);
});

app.get('/api/selected-agent', (req, res) => {
    if (!selectedAgentName) {
        return res.send('No agent has been selected yet!');
    }
    res.send(`Current Agent: ${selectedAgentName}.`);
});

// attempt to post response to backend server, else err
app.post('/api/generate-challenge', async (req, res) => {
    try {
        if (!selectedAgentName) {
            return res.status(400).json({
                error: 'No agent selected. Select and agent before requesting a challenge!',
            });
        }

        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                { role: 'system', content: 'You are a helpful assistant.' },
                {
                    role: 'user',
                    content: `Give me one creative challenge to complete in Valorant for the character ${selectedAgentName}.
          Reply in a succint manner with web-friendly display output, do not output markdown.`,
                },
            ],
            store: true,
        });

        // store generated challenge after each api request
        lastestChallenge = completion.choices[0].message.content;

        res.json({ response: completion.choices[0].message.content });
    } catch (error) {
        const err = error as Error;
        console.error('Error fetching OpenAI response:', err.message);
        res.status(500).json({ error: err.message });
    }
});

// show latest challenge
app.get('/api/generate-challenge', (req, res) => {
    if (!lastestChallenge) {
        return res.send('No challenge generated yet!');
    }
    res.send(`Latest challenge: ${lastestChallenge}.`);
});

app.get('/api/app-status', (req, res) => {
    res.json({
        agent: selectedAgentName,
        challenge: lastestChallenge,
    });
});

// create http server
const server = http.createServer(app);

// run http server on port
server.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
});
