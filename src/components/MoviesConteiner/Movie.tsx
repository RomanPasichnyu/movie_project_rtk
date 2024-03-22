import React, {FC, PropsWithChildren} from "react";
import {IMovie} from "../../interfaces";
import {urlImage} from "../../constants";
import Card from "@mui/material/Card";
import {CardActionArea} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import css from './Movies.module.css'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../hooks";

interface IProps extends PropsWithChildren {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {

    const darkMode = useAppSelector(state => state.themes.darkTheme);
    const {id, original_title, vote_average,poster_path} = movie;

    return (
        <NavLink to={`/details/${id}`}>
            <div className={css.Movie} >
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
                                <Rating name="customized-10" size='small' readOnly={true} defaultValue={vote_average} max={10}  />
                            </Stack>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </NavLink>
    );
};

export {Movie};