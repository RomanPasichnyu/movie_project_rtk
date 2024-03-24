import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {Movie} from "./Movie";
import {movieActions} from "../../store";
import css from './Movies.module.css'
import {Pagination} from "../Pagination";

const Movies = () => {
    const [query] = useSearchParams();
    const genre = query.get('genre');

    const {results} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const pageParam = query.get('page');
        const page = pageParam !== null ? parseInt(pageParam) : 1;
        dispatch(movieActions.getAll({page, genre}))
    }, [query, dispatch, genre]);

    return (
            <div className={css.Movies}>
                {results.map(movie => <Movie key={movie.id} movie={movie}/>)}
                <Pagination/>
            </div>

    );
};

export {Movies};