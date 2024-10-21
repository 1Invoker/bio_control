import { configureStore } from '@reduxjs/toolkit';
import labReducer from '../slices/Slice';

export const store = configureStore({
  reducer: {
    labs: labReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
