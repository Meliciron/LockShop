import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemsInCart: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.itemsInCart.push({
                item: action.payload.item,
                quantity: action.payload.quantity,
            })
        },
        removeFromCart(state, action) {
            state.itemsInCart.splice(state.itemsInCart.indexOf(state.itemsInCart.find(poition => poition.item.art === action.payload.item.art)), 1);
        },
        setQuantityInCart(state, action) {
            let buff = state.itemsInCart.find(position => position.item.art === action.payload.item.art);
            buff.quantity = action.payload.quantity
        },
        resetCart(){ return initialState}
    }
});

export const { addToCart, removeFromCart, setQuantityInCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;