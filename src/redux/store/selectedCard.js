import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedCard: {}
}

const cardSlice = createSlice({
    name: 'selectedCard',
    initialState,
    reducers: {
        changeSelectedCard(state, action) {
            state.selectedCard = action.payload;
        },
        resetCart(){ return initialState}
    }
});

export const { changeSelectedCard, resetSelectedCard } = cardSlice.actions;
export default cardSlice.reducer;