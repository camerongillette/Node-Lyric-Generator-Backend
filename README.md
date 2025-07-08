# Node Lyric Generator Backend

A Node.js backend service that provides REST API endpoints for generating  lyrics from the OpenAI LLM or a local Ollama LLM. 

## Quick Start
- Copy the 'example.env' file and rename to '.env' and then add your OPEN_AI_TOKEN in that file
- run 'npm install' and then 'npm run dev'
- Open http://localhost:3000/lyricgenerator/sleeptoken?topicId=1

## Notes
- The code can use either OpenAI or a local Ollama server to go the actual lyric generation, both of these require a little setup
- For OpenAi, you'll need to go through https://auth.openai.com/ and sign up for an API key, which is very cheap, but not free
- For Ollama, you'll need to setup a local ollama server. Basically Ollama is just a wrapper around using meta's Lllama LLM so we can use it like any rest server. So you'll need to download the free ollama program and then download the specific llama model you want ollama to use, in this project we use the free llama3 model. 
 - Tutorial : For Mac : ```curl -fsSL https://ollama.com/install.sh | sh ``` and for windows just use the installer at https://ollama.com/download
 - Then download the model through ci with ```ollama run llama3``` then ```ollama pull llama3```

 

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