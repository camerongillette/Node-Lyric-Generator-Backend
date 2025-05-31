import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  type LyricsResponse {
    band_name: String
    topic: String
    lyrics: String
  }

  type Query {
    lyrics(topicId: Int!): LyricsResponse
  }
`); 