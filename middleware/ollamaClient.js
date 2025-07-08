import fetch from 'node-fetch';
import { chorusExamples } from '../utils/chorusExamplesAndTopics.js';

export async function generateLyricsOllama(topic, bandName) {
  const prompt = `Generate a lyrically poetic and emotionally evocative chorus inspired by the style of Sleep Token. Do not include any text other than the lyrics. Do not include a synopsis or intro or explanation.
Here are some examples of choruses from the band's top 8 songs:

${chorusExamples}

Topic: ${topic}
Chorus (4–8 lines):`;

  const response = await fetch('http://localhost:11434/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'llama3',
      prompt: prompt,
      stream: false
    })
  });

  if (!response.ok) {
    throw new Error(`Ollama API error: ${response.statusText}`);
  }

  const data = await response.json();

  return data.response?.trim();
}
