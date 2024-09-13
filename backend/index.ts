import express, { Request, Response } from 'express'; // import types
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); // load environment variables

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env['PORT'] || 3001;

app.post('/api/challenge', async (req: Request, res: Response) => {
  try {
    const apiKey = process.env['OPENAI_API_KEY']; // load api key from .env file
    const agentName = req.body.agent; // get agent name from the request body

    // example api call to OpenAI (replace this with the actual api you're using)
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        prompt: `Generate a challenge for the agent ${agentName}`,
        max_tokens: 100,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    res.json({ challenge: response.data.choices[0].text });
  } catch (error) {
    console.error('Error generating challenge:', error);
    res.status(500).json({ error: 'Error generating challenge' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server is running on ${PORT}`);
});
