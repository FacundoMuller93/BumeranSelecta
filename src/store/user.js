import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import * as usersService from "../services/userServices"

const userInitialState = {
    loading: false,
    data: {},
    error: ""
}

export const sendLoginRequest = createAsyncThunk("LOGIN", usersService.userLoginService)

export const sendLogoutRequest = createAsyncThunk("LOGOUT", usersService.userLogoutService)

export const persistUser = createAsyncThunk("LOGOUT", usersService.persistUserService)

const userSlice = createSlice({
    name:"user",
    initialState: userInitialState,
    extraReducers: {
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
        [persistUser.pending]: (state, action) => {
            state.loading = true
        },
        [persistUser.fulfilled]: (state, action) => {
            state.data = action.payload
            state.loading = false
        },
        [persistUser.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
        },
    }
})

export default userSlice.reducer