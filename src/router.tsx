import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {GenresPage, MovieDetailsPage, MoviesPage} from "./pages";
import {SearchPage} from "./pages/SearchPage";



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
            },
            {
                path:'search/:query', element:<SearchPage/>
            }
        ]
    }
]);

export {
    router
}