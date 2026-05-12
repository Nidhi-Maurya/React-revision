
import { createSlice } from "@reduxjs/toolkit";



 const cartSlice=createSlice({
  name:"cart",
  initialState:{
    items:[],

  },

  reducers:{
    addItem:(state,action)=>{
    // Mutating the state directly is allowed in redux toolkit because it uses immer library under the hood which takes care of immutability
  state.items.push(action.payload);
},
    removeItem:(state,action)=>{
      state.items.pop();
    },

    clearCart:(state)=>{
      state.items.length=0;
    }
   
    



}

 })



 export default  cartSlice.reducer;
 export const {addItem,removeItem,clearCart}=cartSlice.actions;