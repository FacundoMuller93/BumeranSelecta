import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import * as searchService from "../services/searchServices"

const searchsInitialState = {
    loading: false,
    data: [],
    singleRecruiter: {},
    error: ""
}

export const getAllSearch = createAsyncThunk("GET_ALL_SEARCH", searchService.allSearchServices)

export const addSearch = createAsyncThunk("ADD_SEARCH", searchService.addSearchServices)

export const deleteSearch = createAsyncThunk("DELETE_SEARCH", searchService.deleteSearchServices)

export const getNewSearchs = createAsyncThunk("GET_NEW", searchService.newSearchsServices)

export const getStartedSearchs = createAsyncThunk("GET_STARTED", searchService.startedSearchsServices)

export const getPresentedSearchs = createAsyncThunk("GET_PRESENTED", searchService.presentedSearchsServices)

export const getRevisionSearchs = createAsyncThunk("GET_REVISION", searchService.revisionSearchsServices)

export const getClosedSearchs = createAsyncThunk("GET_CLOSED", searchService.closedSearchsServices)

export const getFilteredByDate = createAsyncThunk("GET_DATEFILTERED", searchService.filteredByDateSearchsServices)

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
        [getNewSearchs.pending]: (state, action) => {
            state.loading = true
        },
        [getNewSearchs.fulfilled]: (state, action) => {
            state.data = action.payload
            state.loading = false
        },
        [getNewSearchs.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
        },
        [getStartedSearchs.pending]: (state, action) => {
            state.loading = true
        },
        [getStartedSearchs.fulfilled]: (state, action) => {
            state.data = action.payload
            state.loading = false
        },
        [getStartedSearchs.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
        },
        [getPresentedSearchs.pending]: (state, action) => {
            state.loading = true
        },
        [getPresentedSearchs.fulfilled]: (state, action) => {
            state.data = action.payload
            state.loading = false
        },
        [getPresentedSearchs.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
        },
        [getRevisionSearchs.pending]: (state, action) => {
            state.loading = true
        },
        [getRevisionSearchs.fulfilled]: (state, action) => {
            state.data = action.payload
            state.loading = false
        },
        [getRevisionSearchs.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
        },
        [getClosedSearchs.pending]: (state, action) => {
            state.loading = true
        },
        [getClosedSearchs.fulfilled]: (state, action) => {
            state.data = action.payload
            state.loading = false
        },
        [getClosedSearchs.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
        },
        [getFilteredByDate.pending]: (state, action) => {
            state.loading = true
        },
        [getFilteredByDate.fulfilled]: (state, action) => {
            state.data = action.payload
            state.loading = false
        },
        [getFilteredByDate.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
        },
    }
})

export default searchSlice.reducer