import React, {useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {searchService} from "../../services/searchService";
import {IMovie} from "../../interfaces";
import {SearchResults} from "./SearchResults";
import css from './Search.module.css'

const Search = () => {
    const { register, handleSubmit , reset} = useForm();
    const [searchResult, setSearchResult] = useState<IMovie[]>();

    const save:SubmitHandler<any> = async (data: {query:string}) => {
        try {
            const query = data.query
            const response = await searchService.getAll(query);
            const searchResult = response.data.results
            setSearchResult(searchResult)
            reset()
        } catch (e) {
            console.log('error');
        }
    }

    return (

        <div className={css.FormBlock}>
            <form onSubmit={handleSubmit(save)} className={css.Form} >
                <input type="text" placeholder="Enter request movie keyword..." {...register('query')} className={css.Input} />
            </form>

                {searchResult&& searchResult.map(movie=><SearchResults key={movie.id} movie={movie}/>)}

        </div>

    );
};

export {Search};
