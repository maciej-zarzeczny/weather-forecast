import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  data: {},
  citySuggestions: [],
  error: null,
};

export const getForecast = createAsyncThunk("forecast/getForecast", async (city) => {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=a249f2d0f2f84a3bb26104056201011&q=${city}&days=3`
  );
  const result = await response.json();

  return { status: response.status, data: result };
});

export const getCitySuggestions = createAsyncThunk("forecast/getCitySuggestions", async (query) => {
  const response = await fetch(
    `http://api.weatherapi.com/v1/search.json?key=a249f2d0f2f84a3bb26104056201011&q=${query}`
  );
  const result = await response.json();

  return { status: response.status, data: result };
});

const forecastSlice = createSlice({
  name: "forecast",
  initialState,
  reducers: {
    clearSuggestions: (state, action) => {
      state.citySuggestions = [];
    },
  },
  extraReducers: {
    [getForecast.pending]: (state, action) => {
      state.status = "loading";
    },
    [getForecast.fulfilled]: (state, action) => {
      const { status, data } = action.payload;
      if (status === 200) {
        state.status = "succeeded";
        state.data = data;
      } else {
        state.status = "failed";
        state.error = "Something went wrong, please try again";
      }
    },
    [getForecast.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },

    [getCitySuggestions.fulfilled]: (state, action) => {
      state.citySuggestions = action.payload.data;
    },
  },
});

export const { clearSuggestions } = forecastSlice.actions;

export default forecastSlice.reducer;

export const selectForecast = (state) => state.forecast.data;

export const selectAllSuggestions = (state) => state.forecast.citySuggestions;
