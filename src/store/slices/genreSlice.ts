import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IGenre} from "../../interfaces";
import {AxiosError} from "axios";
import {genresService} from "../../services";
import {movieActions} from "./movieSlice";

interface IState {
    genres: IGenre[]
}

const initialState: IState = {
    genres: []
}

const getAll = createAsyncThunk<IGenre[], void>(
    'genreSlice/getAll',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await genresService.getAll();
            return data.genres;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload;
            })
});

const { reducer: genreReducer, actions } = genreSlice;

const genreActions = {
    ...actions,
    getAll
}

export {
    genreReducer,
    genreActions
}
