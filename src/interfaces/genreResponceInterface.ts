export interface IGenre {
    id: number,
    name: string
}
export interface IGenres {
    genres: IGenre[];
}
export interface ISearch {
    page: number,
    results: IGenre[],
    total_pages: number,
    total_results: number
}
export interface FormData {
    query: string;
}