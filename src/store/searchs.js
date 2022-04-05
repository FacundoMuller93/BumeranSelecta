import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import * as searchService from "../services/searchServices"

const searchsInitialState = {
    loading: false,
    data: [],
    singleSearch: {},
    error: ""
}

export const getAllSearch = createAsyncThunk("GET_ALL_SEARCH", searchService.allSearchServices)

export const addSearch = createAsyncThunk("ADD_SEARCH", searchService.addSearchServices)

export const deleteSearch = createAsyncThunk("DELETE_SEARCH", searchService.deleteSearchServices)

export const getSingleSearch  = createAsyncThunk("GET_ID_SEARCH",searchService.singleSearchServices);

export const editRecruiter = createAsyncThunk("EDIT_SEARCH", searchService.editSearchServices);

const searchSlice = createSlice({
    name: "search",
    initialState: searchsInitialState,
    extraReducers: {
        [getAllSearch.pending]: (state, action) => {
            state.loading = true
        },
        [getAllSearch.fulfilled]: (state, action) => {
            state.data = action.payload
            state.loading = false
        },
        [getAllSearch.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
        },
        [deleteSearch.pending]: (state, action) => {
            state.loading = true
        },
        [deleteSearch.fulfilled]: (state, action) => {
            state.data = state.data.filter((Search) => Search.id !== action.payload)
            state.singleSearch = {}
            state.loading = false
        },
        [deleteSearch.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
        },
        [addSearch.pending]: (state, action) => {
            state.loading = true
        },
        [addSearch.fulfilled]: (state, action) => {
            state.data = [...state.data, action.payload]
            state.singleSearch = action.payload
            state.loading = false
        },
        [addSearch.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
        },
        [getSingleSearch.pending]: (state, action) => {
            state.loading = true;
        },
        [getSingleSearch.fulfilled]: (state, action) => {
            state.singleSearch = action.payload;
            state.loading = false;
        },
        [getSingleSearch.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
    }
})

export default searchSlice.reducer