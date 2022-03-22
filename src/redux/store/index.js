import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import cardReducer from "./selectedCard";
import fetchLocks from "./getLocks";
import sortingAndFiltering from "./sortingAndFiltering"
import discountSlice from "./discountSlice";
import scrollSlice from "./scrollSlice";

export default configureStore({
    reducer: {
        cart: cartReducer,
        selectedCard: cardReducer,
        fetchLocks: fetchLocks,
        filteringAndSorting: sortingAndFiltering,
        discount: discountSlice,
        scroll: scrollSlice,
    },
});