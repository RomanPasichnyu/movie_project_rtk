import React, {useEffect, useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {searchService} from "../../services/searchService";
import {IGenre} from "../../interfaces";
import {SearchResults} from "./SearchResults";

const Search = () => {
    const { register, handleSubmit } = useForm();

    const [searchResult, setSearchResult] = useState<IGenre[]>();



    const save:SubmitHandler<any> = async (data: {query:string}) => {
        try {
            const query = data.query
            const response = await searchService.getAll(query);
            const searchResult = response.data.results
            setSearchResult(searchResult)
        } catch (e) {
            console.log('error');
        }
    }
    console.log(searchResult)


    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder="Search..." {...register('query')} />
                <button type="submit">Search</button>
            </form>
            <div>

            </div>
        </div>
    );
};

export {Search};
