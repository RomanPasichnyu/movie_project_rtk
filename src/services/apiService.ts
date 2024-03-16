import axios from "axios";
import {baseURL} from "../constants";


const apiService = axios.create({baseURL})

apiService.interceptors.request.use(request => {
    request.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjRlNmQyMjY1ZDc2MTQ4MmYyZjYzYWFmMjA5YzhhZiIsInN1YiI6IjY1ZDhlZjFkZjkxODNhMDE2MzU1ZGQ1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6hfeOBIAz-C17wen3quZ5GxIemqKtB1rIKWnZuLpTOk'
    return request
});


export {
    apiService
}