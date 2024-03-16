import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import MoviesPage from "./pages/MoviesPage";
import GenresPage from "./pages/GenresPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";

let router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children:[
            {
                path:'', element: <Navigate to={'movies'}/>
            },
            {
                path: 'movies', element: <MoviesPage/>
            },
            {
                path:'genres', element:<GenresPage/>
            },
            {
                path:'details/:id', element:<MovieDetailsPage/>
            }
        ]
    }
]);

export {
    router
}