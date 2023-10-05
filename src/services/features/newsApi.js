import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const newsApiHeader = {
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Key': 'a40719b0b0msh7ef86260ada57e0p101477jsn28eeaadd4d2f',
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: newsApiHeader });

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&Freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
