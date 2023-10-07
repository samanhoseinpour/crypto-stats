import { configureStore } from '@reduxjs/toolkit';

import { coinsApi } from '../features/coinsApi';
import { newsApi } from '../features/newsApi';

export const store = configureStore({
  reducer: {
    [coinsApi.reducerPath]: coinsApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coinsApi.middleware, newsApi.middleware),
});
