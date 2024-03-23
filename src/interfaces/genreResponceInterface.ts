import {IMovie} from "./movieInterface";

export interface IGenre {
    id: number,
    name: string
}
export interface IGenres {
    genres: IGenre[];
}
export interface ISearch {
    page: number,
    results: IMovie[],
    total_pages: number,
    total_results: number
}
