import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../components/Header";

import css from './Layout.module.css'
import {useAppSelector} from "../hooks";

const MainLayout = () => {


    const darkMode = useAppSelector(state => state.themes.darkTheme);

    return (
        <div className={darkMode ? css.dark : css.light}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};