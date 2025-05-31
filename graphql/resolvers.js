import { topics } from '../utils/topics.js';
import { generateLyrics } from '../utils/openaiClient.js';

export const resolvers = {
  lyrics: async ({ topicId }) => {
    const topic = topics[topicId];
    if (!topic) throw new Error("Invalid topic ID.");
    const lyrics = await generateLyrics("Sleep Token", topic);
    return { band_name: "Sleep Token", topic, lyrics };
  }
}; 