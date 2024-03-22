import {apiService} from "./apiService";
import {urls} from "../constants";
import {IGenres} from "../interfaces";
import {IRes} from "../types";

const genresService
    = {
    getAll: (): IRes<IGenres> => apiService.get(urls.genres.base),
}
export {
    genresService

}