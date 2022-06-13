import { configureStore } from '@reduxjs/toolkit';
import Order from '../features/OrderNow/OrderNowSlice.js';

export const store = configureStore({
  reducer: {
    order: Order,
  },
});
