import React from "react";
import Button from "@mui/material/Button";
import {useSearchParams} from "react-router-dom";

import css from "../MoviesConteiner/Movies.module.css";

const Pagination = () => {
    const [query, setQuery] = useSearchParams();

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
        updatePage(page + 1);}

    return (
        <div className={css.Buttons}>
            <Button className={css.button} onClick={prevPage} variant="contained" color='inherit'>Prev page</Button>
            <Button className={css.button} variant="outlined" color='warning'>{query.get('page') || 1}</Button>
            <Button className={css.button} onClick={nextPage} variant="contained" color='inherit'>Next page</Button>
        </div>
    );
};

export {Pagination};