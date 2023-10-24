import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./features/todoSlice";
import { todoAPi } from "./api/todoApi";

export const store = configureStore({
  reducer: {
    todoSlice,
    [todoAPi.reducerPath]: todoAPi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([todoAPi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
