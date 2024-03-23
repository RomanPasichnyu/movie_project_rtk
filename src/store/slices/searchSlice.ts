import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ICardDetails, IMovie, ISearch} from "../../interfaces";
import {AxiosError} from "axios";
import {searchService} from "../../services/searchService";

interface IState {
    page: number,
    results: IMovie[],
    total_pages: number,
    total_results: number
    ICardDetails: ICardDetails | null
}

const initialState: IState = {
    page: 1,
    results: [],
    total_pages: null,
    total_results: null,
    ICardDetails:null,
};

const getAll = createAsyncThunk<ISearch, string>(
    'searchSlice/getAll',
    async (keyword, {rejectWithValue}) => {
        try {
            const {data} = await searchService.getAll(keyword);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const getById = createAsyncThunk<ICardDetails, number>(
    'movieSlice/getById',
    async (id, {rejectWithValue})=>{
        try {
            const {data} = await searchService.byId(id)
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)



const searchSlice = createSlice({
        name: 'searchSlice',
        initialState,
        reducers: {},
        extraReducers: builder =>
            builder
                .addCase(getAll.fulfilled, (state, action) => {
                    state.results = action.payload.results
                })
                .addCase(getById.fulfilled, (state, action) => {
                    state.ICardDetails = action.payload
                })
    }
)

const {reducer: searchReducer, actions} = searchSlice;

const searchActions = {
    ...actions,
    getAll,
    getById
}

export {
    searchReducer,
    searchActions
}