import { OpenAI } from 'openai';
import { chorusExamples } from '../utils/chorusExamples.js';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateLyrics(bandName, topic) {
  const prompt = `Generate a lyrically poetic and emotionally evocative chorus inspired by the style of Sleep Token...
Here are some examples of choruses from the band's top 8 songs:

${chorusExamples}

Topic: ${topic}
Chorus (4–8 lines):`;

  const completion = await openai.completions.create({
    model: "gpt-3.5-turbo-instruct",
    prompt,
    max_tokens: 200,
    temperature: 0.8,
    top_p: 1,
    n: 1
  });

  return completion.choices[0]?.text?.trim();
} 