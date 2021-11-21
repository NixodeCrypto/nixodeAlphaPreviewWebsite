import { Request, Response } from 'express';

const allMarkets = (_: Request, res: Response) => {
  return res.status(200).json({
    status: 0,
    data: 'he',
  });
};

export default { allMarkets };
