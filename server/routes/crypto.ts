import express, { Application } from 'express';
import CryptoController from '@/controllers/crypto';

const router = express.Router();

router.get('/getAllCoins', CryptoController.getAllCoins as Application);

export default router;
