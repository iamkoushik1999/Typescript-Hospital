import rateLimit from 'express-rate-limit';

// Rate Limit
export const rateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5,
  message: 'You have exceeded the 5 requests in 1 Minute Limit',
  standardHeaders: true,
  legacyHeaders: false,
});
