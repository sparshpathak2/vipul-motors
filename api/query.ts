// app/lib/api/query.ts

import { Query } from '@/lib/types';
import axios from 'axios';

export const createQuery = async (query: Omit<Query, 'id' | 'createdAt'>) => {
  const response = await axios.post('http://localhost:5000/api/queries', query);
  return response.data;
};
