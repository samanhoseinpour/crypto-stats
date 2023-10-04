import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const coinsApiHeaders = {
  'X-RapidAPI-Key': 'a40719b0b0msh7ef86260ada57e0p101477jsn28eeaadd4d2f',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: coinsApiHeaders });

export const coinsApi = createApi({
  reducerPath: 'coinsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCoins: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
  }),
});

export const { useGetCoinsQuery } = coinsApi;
