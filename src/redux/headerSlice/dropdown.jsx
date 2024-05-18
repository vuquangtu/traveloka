// dropdownSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState: {
    isOpen: false,
    
  },
  reducers: {
    toggleDropdown: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleDropdown } = dropdownSlice.actions;
export const selectDropdownState = (state) => state.dropdown.isOpen;
export default dropdownSlice.reducer;
