import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getURL, { getURLForecast, getURLPast } from "./../../utils/getURL";
import { loading } from "./loadingSlicer";
import moment from "moment";

const initialState = {
  data: {},
  past: [],
  forecast: [],
  isComp: false,
};

export const getWeather = createAsyncThunk(
  "weather/fetchall",
  async ({ lat, lon }, thunkApi) => {
    try {
      const data = {
        data: {},
        past: [],
        forecast: [],
      };

      const past2day = fetch(
        getURLPast(lat, lon, moment().subtract(2, "days").format("X"))
      );
      const past1day = fetch(
        getURLPast(lat, lon, moment().subtract(1, "days").format("X"))
      );
      const res = await Promise.all([
        fetch(getURL(lat, lon)),
        fetch(getURLForecast(lat, lon)),
        past2day,
        past1day,
      ]);

      const curr = await res[0].json();
      const forecast = await res[1].json();
      const jsonPast2Day = await res[2].json();
      const jsonPast1Day = await res[3].json();

      data.data = curr;
      data.forecast = forecast;
      data.past.push(jsonPast2Day, jsonPast1Day);

      return data;
    } catch (error) {
      thunkApi.dispatch(loading(false));
      console.log(error);
    }
  }
);

const weatherSlicer = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: {
    [getWeather.fulfilled.type]: (state, action) => {
      state.data = action.payload.data;
      state.forecast.push(
        action.payload.forecast.list[5],
        action.payload.forecast.list[10]
      );
      state.past = action.payload.past;
      state.isComp = true;
    },
  },
});

export const {} = weatherSlicer.actions;

export default weatherSlicer.reducer;
