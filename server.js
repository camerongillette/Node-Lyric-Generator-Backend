import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import { SecurityHeadersMiddleware } from './middleware/SecurityHeadersMiddleware.js';
import { rateLimiter } from './middleware/rateLimiter.js';
import sleeptokenRouter from './routes/sleeptoken.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

const frontendUrls = (process.env.FRONTEND_URLS || '').split(',').map(url => url.trim());

app.use(cors({ origin: frontendUrls, credentials: true }));
app.use(helmet());
app.use(SecurityHeadersMiddleware);
app.use(express.json());

app.use('/lyricgenerator/sleeptoken', rateLimiter, sleeptokenRouter);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
}); 