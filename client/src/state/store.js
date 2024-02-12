import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { getData } from "./getDataApi";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    [getData.reducerPath]: getData.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(getData.middleware),
});

setupListeners(store.dispatch);

export default store;
