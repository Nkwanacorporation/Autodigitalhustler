const express = require('express');
const bodyParser = require('body-parser');
const OpenAI = require('openai');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// OpenAI configuration
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// API routes
app.post('/api/tutoring', async (req, res) => {
    const { question } = req.body;
    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: question }],
        });
        const answer = response.choices[0].message.content;
        res.json({ answer });
    } catch (error) {
        console.error('Error fetching from OpenAI:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});