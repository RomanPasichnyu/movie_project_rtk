import * as React from "react";
import {FC, PropsWithChildren} from "react";
import {ICardDetails} from "../../interfaces";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import {urlImage} from "../../constants";
import Rating from "@mui/material/Rating";
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import {useAppSelector} from "../../hooks";
import css from './Movies.module.css'


interface IProps extends PropsWithChildren {
    ICardDetails: ICardDetails
}

const MovieDetail: FC<IProps> = ({ICardDetails}) => {
    const {
        original_title,
        vote_average,
        poster_path,
        genres,
        runtime,
        status,
        release_date,
        overview
    } = ICardDetails;

    const genreName = genres.map(genre => genre.name).join(', ');
    const darkMode = useAppSelector(state => state.themes.darkTheme);

    return (

        <Stack spacing={3} direction="row">
            <Badge color="error" badgeContent={genreName}>
                <Card sx={{maxWidth: 500}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="600"
                            image={urlImage + poster_path}
                            alt={original_title}
                        />
                        <CardContent className={darkMode ? css.dark : css.light}>
                            <Typography gutterBottom variant="h5" component="div">
                                {original_title}
                            </Typography>
                            <Typography variant="h5" color="text.secondary">
                                Status:{status}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                                Runtime:{runtime}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {overview}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Release date:{release_date}
                            </Typography>
                            <Rating name="customized-10" size='large' readOnly={true} defaultValue={vote_average}
                                    max={10}/>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Badge>
        </Stack>

    );
};

export {MovieDetail};