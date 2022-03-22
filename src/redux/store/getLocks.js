import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchLocks = createAsyncThunk(
    'locks/fetchLocks',
    async function(_, {rejectWithValue}){
        try {
        const response = await fetch('http://localhost:3000/locks.json');
        if (!response.ok){
            throw new Error("Server error :(");
        }
        const data = await response.json();
        return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const locksSlice = createSlice({
    name: 'locks',
    initialState:{
        locks:[],
        status: null,
        error: null,
    },
    reducers:{
    },
    extraReducers:{
        [fetchLocks.pending]: (state) =>{
            state.status = 'loading';
            state.error = null;
        },
        [fetchLocks.fulfilled]: (state, action) =>{
            state.status = 'resolved';
            state.locks = action.payload;
        },
        [fetchLocks.rejected]: (state, action) =>{
            state.status = 'rejected';
            state.error = action.payload;
        },
    },
});

export default locksSlice.reducer;