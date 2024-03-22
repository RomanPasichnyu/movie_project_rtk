import {apiService} from "./apiService";
import {urls} from "../constants";
import {ICardDetails, ISearch} from "../interfaces";
import {IRes} from "../types";

const searchService = {
    getAll:(keyword:string):IRes<ISearch>=>apiService.get(urls.search.byKeyWord(keyword)),
    byId:(id:number):IRes<ICardDetails>=>apiService.get(urls.movies.byId(id))
}

export {
    searchService
}

