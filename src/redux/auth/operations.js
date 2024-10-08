import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearToken, api, setToken } from  "../../api/api";

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
    try {
        const { data } = await api.post('/users/signup', credentials);
        setToken(data.token);
        return data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});

export const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        const { data } = await api.post('/users/login', credentials);
        setToken(data.token);
        return data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await api.post('/users/logout');
        clearToken();
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token;
    if (savedToken === null) {
        return thunkAPI.rejectWithValue('Token is not exist!');
    }
    try {
        setToken(savedToken);
        const { data } = await api.get('/users/current');
        return data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
})
