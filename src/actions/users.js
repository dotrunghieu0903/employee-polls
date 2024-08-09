import { getUsersApi } from "../servers/employee-polls-api";
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUsers = createAsyncThunk('user/getUsers', async () => {
    return await getUsersApi();
});