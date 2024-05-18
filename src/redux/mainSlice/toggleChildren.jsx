// dropdownSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const childrenSlice = createSlice({
  name: 'children',
  initialState: {
    toggleChildren : 0,
    
  },
  reducers: {
    childrenIncrease: (state) => {
      
      return { ...state, toggleChildren: state.toggleChildren + 1 };
    },
    childrenDecreased: (state) => {
      if (state.toggleChildren === 0) {
        return state ; // Trả về state hiện tại nếu toggleAdult đã là 0
      }
      return { ...state, toggleChildren: state.toggleChildren - 1 };
    },
  },
});

export const { childrenIncrease, childrenDecreased } = childrenSlice.actions;
export const selectChildren= (state) => state.children.toggleChildren;
export default childrenSlice.reducer;
