import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import { SecurityHeadersMiddleware } from './middleware/SecurityHeadersMiddleware.js';
import { rateLimiter } from './middleware/rateLimiter.js';
import lyricGeneratorRouter from './routes/lyricGenerator.js';

// Load environment variables from .env file
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const frontendUrls = (process.env.FRONTEND_URLS || '').split(',').map(url => url.trim());

// Server setup
app.use(cors({ origin: frontendUrls, credentials: true }));
app.use(helmet());
app.use(SecurityHeadersMiddleware);
app.use(express.json());

// Specify the router
app.use('/lyricgenerator/sleeptoken', rateLimiter, lyricGeneratorRouter);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
}); 