import { CELSIUM } from "../../utils/converter";
import { createSlice } from '@reduxjs/toolkit';
import { FARENHEIT } from './../../utils/converter';


const initialState = {
  degreesMode: FARENHEIT
}

export const switchSlicer = createSlice({
  name: 'switch',
  initialState,
  reducers: {
    changeDegrees: (state) => {
      state.degreesMode = state.degreesMode === CELSIUM ? FARENHEIT : CELSIUM
    }
  }
})

export const {changeDegrees} = switchSlicer.actions
export default switchSlicer.reducer