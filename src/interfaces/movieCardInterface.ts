export interface ICardDetails{
    genres:{ id: number; name: string }[]
    backdrop_path: string;
    id:number;
    overview:string;
    poster_path:string;
    original_title: string;
    release_date: string;
    runtime:number;
    status:string;
    vote_average:number
}