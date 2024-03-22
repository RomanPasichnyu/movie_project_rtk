import {FC, PropsWithChildren, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../store";

interface IProps extends PropsWithChildren {
    id: number
}

const SearchResults: FC<IProps> = ({id}) => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getById(+id))
    }, [dispatch]);

    const {ICardDetails} = useAppSelector(state => state.details);


    return (
        <div>
            SearchResults
        </div>
    );
};

export {SearchResults};