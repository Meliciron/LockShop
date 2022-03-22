import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    couponName: "",
    discount: 0,
};

const discountSlice = createSlice({
    name: 'discount',
    initialState,
    reducers: {
        setNewDiscount(state, action){
            state.couponName = action.payload.couponName;
            state.discount = action.payload.discount;
        },
        resetDiscount(){ return initialState}
    }
});

export const { setNewDiscount, resetDiscount } = discountSlice.actions;
export default discountSlice.reducer;