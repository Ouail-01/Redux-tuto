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
});

// console.log(cartSlice)
export default cartSlice.reducer;
