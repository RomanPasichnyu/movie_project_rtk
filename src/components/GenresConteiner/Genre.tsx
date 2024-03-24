import {FC, PropsWithChildren} from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {NavLink} from "react-router-dom";

import {IGenre} from "../../interfaces";
import css from './Genres.module.css'

interface IProps extends PropsWithChildren {
    genre: IGenre
}

const Genre: FC<IProps> = ({genre}) => {
    const {id, name} = genre;

    return (
        <div>
            <Card sx={{maxWidth: 150}}>
                <CardContent className={css.GenreCard}>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                </CardContent>
                <CardActions className={css.GenreCard}>
                    <NavLink to={`/movies?genre=${id}`}>
                        <Button size="small">Get More</Button>
                    </NavLink>
                </CardActions>
            </Card>
        </div>
    );
};

export {Genre};