import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.mercadolibre.com',
});

export const searchItems = async (search = 'query') => {
  const { data } = await api.get(`/sites/MLA/search?q=${search}`);

  return data.results;
};

export const searchItemID = async () => {};
