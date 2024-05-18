// dropdownSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const adultSlice = createSlice({
  name: 'Adult',
  initialState: {
    toggleAdult : 1,
    
  },
  reducers: {
    adultsIncrease: (state) => {
     
      return { ...state, toggleAdult: state.toggleAdult + 1 };
    },
    adultsDecreased: (state) => {
      if (state.toggleAdult === 0) {
        return state; // Trả về state hiện tại nếu toggleAdult đã là 0
      }
      return { ...state, toggleAdult: state.toggleAdult - 1 };
    },
  },
});

export const { adultsIncrease, adultsDecreased } = adultSlice.actions;
export const selectAdults= (state) => state.adult.toggleAdult;
export default adultSlice.reducer;
