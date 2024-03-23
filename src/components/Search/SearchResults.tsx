import React, {FC, PropsWithChildren} from "react";
import {IMovie} from "../../interfaces";
import css from "../MoviesConteiner/Movies.module.css";
import Card from "@mui/material/Card";
import {CardActionArea} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import {urlImage} from "../../constants";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import {useAppSelector} from "../../hooks";
import {NavLink} from "react-router-dom";

interface IProps extends PropsWithChildren {
    movie: IMovie
}

const SearchResults: FC<IProps> = ({movie}) => {

    const darkMode = useAppSelector(state => state.themes.darkTheme);
    const {id,original_title, vote_average, poster_path} = movie;

    return (
        <div className={css.Movie}>
            <NavLink to={`/details/${id}`}>
            <Card sx={{maxWidth: 280}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="300"
                        image={urlImage + poster_path}
                        alt={original_title}
                    />
                    <CardContent className={darkMode ? css.dark : css.light}>
                        <Typography gutterBottom variant="h5" component="div">
                            {original_title}
                        </Typography>
                        <Stack spacing={1}>
                            <Rating name="customized-10" size='small' readOnly={true} defaultValue={vote_average}
                                    max={10}/>
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </Card>
            </NavLink>
        </div>
    );
};

export {SearchResults};