const baseURL = 'https://api.themoviedb.org/3'

const movies = '/discover/movie'

const genres = '/genre/movie/list'

const details = '/movie'

const search = ''
const urlImage = 'https://image.tmdb.org/t/p/w500'

const urls = {
    movies: {
        base: movies,
        byId: (id: number): string => `/movie/${id}`
    },
    genres: {
        base: genres,
        byId: (id: number): string => `/genre/${id}`
    },
    details: {
        base: details,
        byId: (id: number): string => `/movie/${id}`
    },
    search: {
        base: search,
        byKeyWord: (query: string): string => `/search/movie?query=${query}`
    }

}

export {
    baseURL, urls, urlImage
}