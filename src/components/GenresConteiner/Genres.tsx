import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../store/slices/genreSlice";
import {Genre} from "./Genre";
import css from './Genres.module.css'

const Genres = () => {

    const {genres} = useAppSelector(state => state.genres);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genreActions.getAll())
    }, [dispatch]);

    return (
        <div className={css.Wrap}>
            <div className={css.GenreBlock}>
                {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
            </div>
        </div>
    );
};

export {Genres};