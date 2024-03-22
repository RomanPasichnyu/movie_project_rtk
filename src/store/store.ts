import {configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slices";
import {genreReducer} from "./slices/genreSlice";
import {themeReducer} from "./slices/themeSlice";
import {searchReducer} from "./slices/searchSlice";

let store = configureStore({
    reducer:{
        movies:movieReducer,
        details:movieReducer,
        genres:genreReducer,
        themes:themeReducer,
        search:searchReducer
    }

})

export {
    store
}