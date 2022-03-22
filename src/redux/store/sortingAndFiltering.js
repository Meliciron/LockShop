import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    price: [],
    featuries: [],
    color: [],
    installation: [],
    lastChosenCategory: "",
    renderCards: [],
};

const filterSlice = createSlice({
    name: 'filtering',
    initialState,
    reducers: {
        addFilteringTag(state, action) {
            if (action.payload.title === "Особенности") {
                if (state.featuries.includes(action.payload.item)) {
                    state.featuries.splice(state.featuries.indexOf(action.payload.item), 1);
                }
                else {
                    state.featuries.push(action.payload.item);
                }
            }

            if (action.payload.title === "Цвет") {
                if (state.color.includes(action.payload.item)) {
                    state.color.splice(state.color.indexOf(action.payload.item), 1);
                }
                else {
                    state.color.push(action.payload.item);
                }
            }

            if (action.payload.title === "Установка") {
                if (state.installation.includes(action.payload.item)) {
                    state.installation.splice(state.installation.indexOf(action.payload.item), 1);
                }
                else {
                    state.installation.push(action.payload.item);
                }
            }
            if (action.payload.title === "Цена") {
                state.price = action.payload.value;
            }
        },
        clearAllTags(state) {
           state.featuries = state.installation = state.color = [];
        },
        setLastChosenCategory(state, action) {
            state.lastChosenCategory = action.payload;
        },
        setRenderCards(state, action){
            state.renderCards = action.payload;
        }
    }
});

export const { addFilteringTag, clearAllTags, setLastChosenCategory, setRenderCards } = filterSlice.actions;
export default filterSlice.reducer;