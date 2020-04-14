import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, CircularProgress } from '@material-ui/core';
import queryString from 'query-string';
import { movieResults, isSearchLoading } from "../../selectors";
import { searchMovie } from '../../redux/actions/search';
import MovieResult from './../../components/MovieResult';

export default ({location}) => {
    const dispatch = useDispatch();
    const movies = useSelector((state) => movieResults(state));
    const isLoading = useSelector((state) => isSearchLoading(state));
    const [looked, isLooked] = useState(false);

    useEffect(()=>{
        const { movieName } = queryString.parse(location.search);
        if (movieName &&  !looked) {
            isLooked(true);
            dispatch(searchMovie({movieName}));
        } 
    });

    const renderMovies = () =>{
        if(movies){
            return(movies.map((value, index) => {return <MovieResult key={index} {...value} />}))
        }else if (isLoading) {
            return <CircularProgress size={100} />;
        }else{
            return <div/>
        }
    }
    return <Container>{renderMovies()}</Container>;
}