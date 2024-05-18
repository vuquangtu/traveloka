// dropdownSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const babySlice = createSlice({
  name: 'baby',
  initialState: {
    toggleBaby: 0,
    
  },
  reducers: {
    babyIncrease: (state) => {
      return { ...state, toggleBaby: state.toggleBaby + 1 };
    },
    babyDecreased: (state) => {
      if (state.toggleBaby === 0) {
        return state ; // Trả về state hiện tại nếu toggleAdult đã là 0
      }
      return { ...state, toggleBaby: state.toggleBaby - 1 };
    },
  },
});

export const { babyIncrease, babyDecreased } = babySlice.actions;
export const selectBaby= (state) => state.baby.toggleBaby;
export default babySlice.reducer;
