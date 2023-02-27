import { createSlice } from "@reduxjs/toolkit";
import cardItems from '../../cardItems'

const initialState = {
    cartItems: cardItems,
    amount: 0,
    total: 0,
    isLoading: true,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      clearCart: (state) => {
        state.cartItems = [];
      },
    },
});
  
export const { clearCart } = cartSlice.actions;

// console.log(cartSlice)
export default cartSlice.reducer;
