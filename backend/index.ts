import OpenAI from "openai";
import express from "express";
import cors from "cors";

// init express app
const app = express();
app.use(express.json);
app.use(cors());

// create openai api client
const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'],
});

// attempt to post response to backend server, else err
app.post("/api/generate", async (req, res) => {
    try {
        const { prompt } = req.body; 

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
              { role: "system", content: "You are a helpful assistant." },
              {
                role: "user",
                content:
                  "Give me a challenge to complete in Valorant for the character Gekko.",
              },
            ],
            store: true,
          });
          
          res.json({response: completion.choices[0].message.content});
    } catch (error) {
        const err = error as Error
        console.error("Error fetching OpenAI respone: ", err.message);
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => {
    console.log("Server runniing on http://localhost:3000");
})