import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../store";
import {MovieDetail} from "./MovieDetail";
import css from './Movies.module.css'

const MovieDetails = () => {

    const {id} = useParams<{ id: string }>();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getById(+id))
    }, [dispatch]);

    const {ICardDetails} = useAppSelector(state => state.details);

    return (
        <div className={css.DetailsMain}>
            {ICardDetails && <MovieDetail ICardDetails={ICardDetails}/>}
        </div>
    );
};

export {MovieDetails};