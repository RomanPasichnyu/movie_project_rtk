import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {Movie} from "./Movie";
import {movieActions} from "../../store";
import {useSearchParams} from "react-router-dom";
import css from './Movies.module.css'
import Button from '@mui/material/Button';


const Movies = () => {
    const [query, setQuery] = useSearchParams();
    const genre = query.get('genre');

    const {results} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const pageParam = query.get('page');
        const page = pageParam !== null ? parseInt(pageParam) : 1;
        dispatch(movieActions.getAll({page, genre}))
    }, [query]);

    const updatePage = (newPage: number) => {
        setQuery({page: newPage.toString()});
    };
    const prevPage = () => {
        const page = parseInt(query.get('page') || '1');
        if (page > 1) {
            updatePage(page - 1);
        }
    };
    const nextPage = () => {
        const page = parseInt(query.get('page') || '1');
        updatePage(page + 1);

    };
    return (
            <div className={css.Movies}>
                {results.map(movie => <Movie key={movie.id} movie={movie}/>)}

                <div className={css.Buttons}>
                    <Button className={css.button} onClick={prevPage} variant="contained" color='inherit'>Prev
                        page</Button>
                    <Button className={css.button} variant="outlined" color='warning'>{query.get('page') || 1}</Button>
                    <Button className={css.button} onClick={nextPage} variant="contained" color='inherit'>Next
                        page</Button>
                </div>
            </div>

    );
};

export {Movies};