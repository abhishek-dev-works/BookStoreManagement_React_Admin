import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRecord } from "../types/RecordTypes";
import { dashboardInitialState } from "../types/DashboardTypes";
import { createAction } from "@reduxjs/toolkit";
import {  } from "../types/RecordTypes";
import { IUser } from "../types/UserTypes";
import { IBook } from "../types/BookTypes";

export const getAllFilters = createAction("records/getAllFilters");

export const addMultipleRecordsForUser = createAction<MultipleRecordsCommand>(
  "addMultipleRecordsForUser"
);

export const updateRecordById = createAction<{ id: string; data: RecordCommand }>(
  "updateRecordById"
);

export const addBook = createAction<IBook>("books/addBook");

export const addUser = createAction<IUser>("users/addUser");


const initialState: dashboardInitialState = {
    records: [],
    filters: {
        userFilter: [],
        bookFilter: [],
        statusFilter: null,
        dateFilter: ""
    },
    loading: false,
    error: null
};

const recordSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        setRecords(state, action: PayloadAction<IRecord[]>) {
            state.records = action.payload;
        },
        setFilters(state, action: PayloadAction<dashboardInitialState["filters"]>) {
            state.filters = action.payload;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload;
        },
        clearFilters(state) {
            state.filters = {
                userFilter: [],
                bookFilter: [],
                statusFilter: null,
                dateFilter: ""
            };
        }
    }
});

export const { setRecords, setFilters, setLoading, setError, clearFilters } = recordSlice.actions;
export default recordSlice.reducer;
