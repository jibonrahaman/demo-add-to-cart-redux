import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'counter',
  initialState :{
    cartItem : [],
  },
  reducers: {
    addtoCart: (state,action) => {
     if(state.cartItem.length > 0){
         let arr = [];
     state.cartItem.map((item)=>{
        if(item.name ==action.payload.name){
            item.quantity = item.quantity +1
            arr.push(item.name)
        }      
     })
     if(arr.indexOf (action.payload.name) == -1){
        state.cartItem.push(action.payload)
       }
     }else{
         state.cartItem.push(action.payload)
     }
    },
    
  
  },
})

export const { addtoCart} = cartSlice.actions

export default cartSlice.reducer