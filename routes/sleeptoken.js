import express from 'express';
import { generateLyrics } from '../utils/openaiClient.js';
import { topics } from '../utils/topics.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const topicId = parseInt(req.query.topicId, 10);
    const topic = topics[topicId];
    if (!topic) {
      return res.status(400).json({ error: "Invalid topic ID." });
    }
    const lyrics = await generateLyrics("Sleep Token", topic);
    return res.json({ band_name: "Sleep Token", topic, lyrics });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate lyrics", message: err.message });
  }
});

export default router; 