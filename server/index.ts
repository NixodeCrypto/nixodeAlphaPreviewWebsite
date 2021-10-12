import express from 'express';
import { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 7000;

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Well Done');
});

app.listen(PORT, () => {
  console.log(`App started on port: ${PORT}`);
});
