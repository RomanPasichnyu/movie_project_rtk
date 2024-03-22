import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IApiResponse, ICardDetails, IMovie} from "../../interfaces";
import {movieService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    page: number,
    results: IMovie[],
    total_pages?: number,
    total_results?: number
    ICardDetails: ICardDetails | null
    genre?:string | null
}
const initialState: IState = {
    page: 1,
    results:[],
    ICardDetails:null,
    genre:null
};

//                              повертає, приймає
const getAll = createAsyncThunk<IApiResponse, { page: number; genre?: string }>(
    'movieSlice/getAll',
    async ({page, genre}, {rejectWithValue}) => {
        try {
            let {data} = await movieService.getAll(page, genre);
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
            const {data} = await movieService.getById(id);
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)



const movieSlice = createSlice({
    name: 'movieSlice',
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
})

const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAll,
    getById
}

export {
    movieReducer,
    movieActions
}