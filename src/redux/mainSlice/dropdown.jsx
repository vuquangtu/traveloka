// dropdownSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const dropdownSlice1 = createSlice({
  name: 'dropdown1',
  initialState: {
    isOpen1: false,  
  },
  reducers: {
    toggleDropdown1: (state) => {
      state.isOpen1 = !state.isOpen1;
    },
  },
});

export const { toggleDropdown1} = dropdownSlice1.actions;
export const selectDropdownState1 = (state) => state.dropdown1.isOpen1;
export default dropdownSlice1.reducer;
