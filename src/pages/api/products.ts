import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND}/products/alldata`);
      console.log("response : ",response);
      
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching products' });
    }
  } else {
    res.status(405).end();
  }
};
