# Metal Lyric Generator Backend

A Node.js backend service that provides API endpoints for generating metal lyrics built from the lyrics of an existing band. This service uses GraphQL and REST endpoints to serve its functionality.

## Features

- REST and GraphQL API for lyric generation
- Security headers and CORS configuration
- Environment-based configuration


## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd metal-lyric-generator-backend-node
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

### Production Mode
```bash
npm start
```

The server will start on http://localhost:3000 (or the port specified in your .env file)


## Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## API Endpoints

### GraphQL Endpoint
- URL: `/lyricgeneratorql`
- Method: POST
- Description: Main GraphQL endpoint for lyric generation

### Sleep Token Endpoint
- URL: `/lyricgenerator/sleeptoken`
- Method: POST
- Description: Endpoint for managing lyric generation


## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 