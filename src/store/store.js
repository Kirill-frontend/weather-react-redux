import { configureStore } from '@reduxjs/toolkit';
import weatherSlicer from './slicers/weatherSlicer';
import switchSlicer  from './slicers/switchSlicer';
import loadingSlicer from './slicers/loadingSlicer';


export const store = configureStore({
  reducer: {
    switch: switchSlicer,
    weather: weatherSlicer,
    loading: loadingSlicer
  },
});
