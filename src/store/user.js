import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import * as usersService from "../services/userServices"

const userInitialState = {
    loading: false,
    data: {},
    error: ""
}

export const sendRegisterRequest = createAsyncThunk("REGISTER", usersService.userRegisterService)

export const sendLoginRequest = createAsyncThunk("LOGIN", usersService.userLoginService)

export const sendLogoutRequest = createAsyncThunk("LOGOUT", usersService.userLogoutService)

const userSlice = createSlice({
    name:"user",
    initialState: userInitialState,
    extraReducers: {
        [sendRegisterRequest.pending]: (state, action) => {
            state.loading = true
        },
        [sendRegisterRequest.fulfilled]: (state, action) => {
            state.data = action.payload
            state.loading = false
        },
        [sendRegisterRequest.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
        },
        [sendLoginRequest.pending]: (state, action) => {
            state.loading = true
        },
        [sendLoginRequest.fulfilled]: (state, action) => {
            state.data = action.payload
            state.loading = false
        },
        [sendLoginRequest.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
        },
        [sendLogoutRequest.pending]: (state, action) => {
            state.loading = true
        },
        [sendLogoutRequest.fulfilled]: (state, action) => {
            state.data = {}
            state.loading = false
        },
        [sendLogoutRequest.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
        },
    }
})

export default userSlice.reducer