import express from 'express';
import { use } from '@/utils/error';
import CryptoController from '@/controllers/crypto';

const router = express.Router();

router.get('/getAllCoins', use(CryptoController.getAllCoins));
router.get('/getPreviewCoins', use(CryptoController.getPreviewCoins));

export default router;
