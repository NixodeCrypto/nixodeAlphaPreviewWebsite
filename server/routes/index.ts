import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', (_, res) => {
  res.status(200).json({
    status: 0,
    message: 'Nixode API is currently functioning',
  });
});

export default router;
