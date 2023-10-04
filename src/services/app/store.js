import { configureStore } from '@reduxjs/toolkit';

import { coinsApi } from '../features/coinsApi';

export const store = configureStore({
  reducer: {
    [coinsApi.reducerPath]: coinsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coinsApi.middleware),
});
