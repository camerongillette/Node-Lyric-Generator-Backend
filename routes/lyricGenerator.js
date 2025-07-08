import express from 'express';
import { generateLyrics } from '../middleware/openaiClient.js';
import { generateLyricsOllama } from '../middleware/ollamaClient.js';
import { topics } from '../utils/topics.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const model = req.query.model;
    const topicId = parseInt(req.query.topicId, 10);
    const topic = topics[topicId];
    if (!topic) {
      return res.status(400).json({ error: "Invalid topic ID." });
    }
    let lyrics = "";
    if(model=="ollama"){
      console.error("Using Ollama for lyrics generation");
      lyrics = await generateLyricsOllama(topic);
    }
    else {
      console.error ("Using OpenAi for lyrics generation");
      lyrics = await generateLyrics(topic);
    }
    return res.json({ topic, lyrics });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate lyrics", message: err.message });
  }
});

export default router; 