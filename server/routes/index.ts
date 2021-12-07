import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', (_, res) => {
  res.status(200).json({
    err: false,
    message: 'Nixode API is currently functioning',
  });
});

export default router;
