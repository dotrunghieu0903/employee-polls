import { createSlice } from '@reduxjs/toolkit';
import { getUsers } from '../actions/users';

const authorizationSlice = createSlice({
    name: 'authorization',
    initialState: {
        isAuthenticated: false,
        user: null,
        loading: false,
        error: null,
        users: []
    },
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
            state.error = null;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getUsers.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        })
        .addCase(getUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
})
export const { login, logout } = authorizationSlice.actions
export default authorizationSlice.reducer;