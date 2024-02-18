import { configureStore } from '@reduxjs/toolkit'
import  cartSlice  from '../Slices/CartSlices'

export const store = configureStore({
  reducer: {
    cart:cartSlice
  },
})