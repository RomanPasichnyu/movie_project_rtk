import {createSlice} from "@reduxjs/toolkit";

const initialState={
    darkTheme:false
};

const themeSlice = createSlice({
    name:'themeSlice',
    initialState,
    reducers:{
        themeSwitch: state=>{
            state.darkTheme =!state.darkTheme
        }
    }
})

const {reducer:themeReducer, actions} = themeSlice;

const themeActions = {
    ...actions
}

export {
    themeReducer,
    themeActions
}