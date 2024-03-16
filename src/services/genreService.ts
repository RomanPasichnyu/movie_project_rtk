import {IRes} from "../types/responceType";
import {apiService} from "./apiService";
import {urls} from "../constants";
import {IGenres} from "../interfaces";

const genresService
    = {
    getAll:():IRes<IGenres>=>apiService.get(urls.genres.base),
}
export {
    genresService

}