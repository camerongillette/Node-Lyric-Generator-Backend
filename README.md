# Node Lyric Generator Backend

A Node.js backend service that provides REST API endpoints for generating  lyrics from the OpenAI LLM or a local Ollama LLM. 

## Quick Start
- Copy the 'example.env' file and rename to '.env' and then add your OPEN_AI_TOKEN in that file
- run 'npm install' and then 'npm run dev'
- Open http://localhost:3000/lyricgenerator/sleeptoken?topicId=1

## Features

- REST and GraphQL API for lyric generation
- Security headers and CORS configuration
- Environment-based configuration


## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd node-lyric-generator-backend-node
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
PORT=3000
FRONTEND_URLS=http://localhost:3000,http://your-frontend-url.com
```

## Running the Application

### Development Mode
```bash
npm run dev
```

## API Endpoint
- URL: `/lyricgenerator/sleeptoken`
- Method: POST