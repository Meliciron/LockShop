import { createSlice } from "@reduxjs/toolkit";

const scrollSlice = createSlice({
    name: 'selectedSection',
    initialState: {
        selectedSection: ""
    },
    reducers: {
        setSelectedSection(state, action) {
            state.selectedSection = action.payload;
        },
    }
});

export const { setSelectedSection } = scrollSlice.actions;
export default scrollSlice.reducer;