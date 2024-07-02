import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { productId, amount } = req.body;
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}/transactions`, {
        productId,
        amount
      });
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ message: 'Error processing transaction' });
    }
  } else {
    res.status(405).end();
  }
};
