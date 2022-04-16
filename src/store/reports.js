import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as reportsService from "../services/reportsServices";

const reportsInitialState = {
  loading: false,
  data: [],
  error: "",
  passChange: {},
};

export const getRecruitersPerArea = createAsyncThunk(
    "GET_RECRUITERS_PER_AREA",
  reportsService.getRecruitersPerArea
);

export const topRecruiters = createAsyncThunk(
  "TOP_RECRUITERS",
reportsService.topRecruiters
);

const reportsSlice = createSlice({
    name: "reports",
    initialState: reportsInitialState,
    extraReducers: {
      [getRecruitersPerArea.pending]: (state, action) => {
        state.loading = true;
      },
      [getRecruitersPerArea.fulfilled]: (state, action) => {
        state.data = action.payload;
        state.loading = false;
      },
      [getRecruitersPerArea.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      },
      [topRecruiters.pending]: (state, action) => {
      state.loading = true;
      },
      [topRecruiters.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      },
      [topRecruiters.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export default reportsSlice.reducer