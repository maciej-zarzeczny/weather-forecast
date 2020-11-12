import { configureStore } from "@reduxjs/toolkit";

import forecastReducer from "./features/forecast/forecastSlice";

const store = configureStore({
  reducer: {
    forecast: forecastReducer,
  },
});

export default store;
