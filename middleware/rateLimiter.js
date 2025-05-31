import rateLimit from 'express-rate-limit';

export const rateLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: { error: "Slow down a bit, servers are expensive :)" }
}); 