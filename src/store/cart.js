import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cart: []
} 

const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
       addToCart: (state, action) => {
        const cartItemIndex = state.cart.findIndex(
            (item) => item.id === action.payload.id);

        if(cartItemIndex >= 0) {
            state.cart[cartItemIndex].qty = action.payload.qty;
        } else {
            state.cart.push(action.payload)
        }
       },
       deleteToCart: (state, action) => {
        const cartItemIndex = state.cart.findIndex(
            (item) => item.id === action.payload.id);

        if(cartItemIndex >= 0) {
            state.cart.splice(cartItemIndex);
        }
       }
    }
});

export const { addToCart, deleteToCart } = cart.actions;
export default cart.reducer;