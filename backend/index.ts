import OpenAI from 'openai';
import express from 'express';
import cors from 'cors';
import { AgentService } from '../src/app/agent.service';

// init express app
const app = express();
app.use(express.json);
app.use(cors());
// app.use(
//   cors({
//     origin: 'localhost:4200',
//     methods: ['GET', 'POST'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//   })
// );

// create openai api client
const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'],
});

let selectedAgentName = '';

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.post('/api/selected-agent', (req, res) => {
  const { agent } = req.body;
  selectedAgentName = agent;
  console.log(`Selected agent: ${selectedAgentName}`);
  res.status(200).send(`Agent: ${selectedAgentName} received`);
});

// attempt to post response to backend server, else err
app.post('/api/generate-challenge', async (req, res) => {
  try {
    // const { prompt } = req.body;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        {
          role: 'user',
          content: `Give me a creative challenge to complete in Valorant for the character ${selectedAgentName}.`,
        },
      ],
      store: true,
    });

    res.json({ response: completion.choices[0].message.content });
  } catch (error) {
    const err = error as Error;
    console.error('Error fetching OpenAI response: ', err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
