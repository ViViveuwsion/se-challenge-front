import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND}/products/${id}`);
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching product' });
    }
  } else {
    res.status(405).end();
  }
};
