import express from 'express';
import CryptoController from '@/controllers/crypto';

const router = express.Router();

router.get('/getAll', CryptoController.allMarkets);

export default router;
