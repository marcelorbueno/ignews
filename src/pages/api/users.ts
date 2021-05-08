import { NextApiRequest, NextApiResponse } from 'next';

export default (request:NextApiRequest, response:NextApiResponse) => {
  const users = [
    { id: 1, name: 'Marcelo' },
    { id: 2, name: 'Rafael' },
    { id: 3, name: 'Jonathan' },
  ];

  return response.json(users)
};