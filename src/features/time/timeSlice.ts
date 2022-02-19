import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface TimeState {
  timestamp: string
}

const initialState: TimeState = {
  timestamp: new Date().toString()
}

export const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    updateTime: (state, action: PayloadAction<string>) => {
      state.timestamp = action.payload
    }
  }
})

export default timeSlice.reducer;

export const { updateTime } = timeSlice.actions;
