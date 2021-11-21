import { Request, Response } from 'express';
import Ticker from '@/models/Ticker';

export interface IGetAllCoins extends Request {
  page: number;
}

const getAllCoins = async (req: IGetAllCoins, res: Response) => {
  try {
    const idxPage = req.body.page > 0 ? req.body.page : 1;
    const cryptoData = await Ticker.find()
      .skip((idxPage as number) * 50)
      .limit(50);
    const documentCount = await Ticker.estimatedDocumentCount();
    const totalPageCount = Math.ceil(documentCount / 50);
    res.status(200).json({
      status: 0,
      data: {
        coins: cryptoData,
        totalPageCount: totalPageCount,
      },
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

export default { getAllCoins };
