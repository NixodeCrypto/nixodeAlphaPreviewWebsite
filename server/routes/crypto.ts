import express, { Application } from 'express';
import CryptoController from '@/controllers/crypto';

const router = express.Router();

router.post('/getAllCoins', CryptoController.getAllCoins as Application);

export default router;
