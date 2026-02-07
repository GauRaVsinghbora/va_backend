import express from 'express';

const router = express.Router();

// Health check endpoint
router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Blind Dating API is running',
    timestamp: new Date().toISOString(),
  });
});

// home / route to check if server is running
router.get('/', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Welcome to the Blind Dating API!',
    timestamp: new Date().toISOString(),
  });
});

export default router;