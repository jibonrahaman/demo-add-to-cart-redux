import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'counter',
  initialState :{
    cartItem : [],
  },
  reducers: {
    addtoCart: (state,action) => {
     state.cartItem = action.payload
    },
    
  
  },
})

export const { addtoCart} = cartSlice.actions

export default cartSlice.reducer