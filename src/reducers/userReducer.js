import { createSlice } from '@reduxjs/toolkit';
import { initData } from '../actions/users';

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(initData.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(initData.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        })
        .addCase(initData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
});

export default userSlice.reducer;