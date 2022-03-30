import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as usersService from "../services/userServices";

const userInitialState = {
  loading: false,
  data: {},
  error: "",
};

export const sendRegisterRequest = createAsyncThunk(
  "REGISTER",
  usersService.userRegisterService
);

export const sendLoginRequest = createAsyncThunk(
  "LOGIN",
  usersService.userLoginService
);

export const sendLogoutRequest = createAsyncThunk(
  "LOGOUT",
  usersService.userLogoutService
);

export const getUserRequest = createAsyncThunk("GET_USER", usersService.getUserService)

const userSlice = createSlice({
<<<<<<< HEAD
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
        [getUserRequest.pending]: (state, action) => {
            state.loading = true
        },
        [getUserRequest.fulfilled]: (state, action) => {
            state.data = action.payload
            state.loading = false
        },
        [getUserRequest.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
        },
    }
})
=======
  name: "user",
  initialState: userInitialState,
  extraReducers: {
    [sendRegisterRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [sendRegisterRequest.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [sendRegisterRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [sendLoginRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [sendLoginRequest.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [sendLoginRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [sendLogoutRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [sendLogoutRequest.fulfilled]: (state, action) => {
      state.data = {};
      state.loading = false;
    },
    [sendLogoutRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});
>>>>>>> 37f909a60cae35f6a98b557390e20a76df50637d

export default userSlice.reducer;
