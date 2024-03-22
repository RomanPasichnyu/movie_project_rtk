import {apiService} from "./apiService";
import {IApiResponse, ICardDetails} from "../interfaces";
import {urls} from "../constants";
import {IRes} from "../types";

const movieService = {
    getAll: (page = 1, genre?: string) => apiService.get<IApiResponse>(urls.movies.base, {
        params: {
            page,
            with_genres: genre
        }
    }),
    getById: (id: number): IRes<ICardDetails> => apiService.get(urls.movies.byId(id))
}
export {
    movieService
}