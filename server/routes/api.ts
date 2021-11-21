import express from 'express';
import cryptoRouter from '@/routes/crypto';

const app = express();

app.use('/crypto/', cryptoRouter);

export default app;
