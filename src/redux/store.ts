import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import logger from "redux-logger";
import homeSlise from "./feauthers/home/homeSlise";

export const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
  reducer: {
      homeReducer:homeSlise
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;