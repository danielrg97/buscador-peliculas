import React, { useEffect } from 'react';
import { Container, CircularProgress, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {searchMovieById} from "./.././../redux/actions/search";
import {movieResult} from './../../selectors';
export default ({match}) => {
    const dispatch = useDispatch();
    const movie = useSelector((state) => movieResult(state));
    useEffect(()=>{
        const movieId = match.params.id;
        if(!movie || movie && movie.imdbID !== movieId){
            dispatch(searchMovieById({movieId}));
        }
    });
    if(!movie){
        return <CircularProgress size={100}/>
    }
    return (
      <Container>
        <Typography variant="h3">{movie.Title}</Typography>
        <img src={movie.Poster} />
        <Typography><strong>Actores: </strong>{movie.Actors}</Typography>
        <Typography><strong>Director: </strong>{movie.Director}</Typography>
        <Typography><strong>Pais: </strong>{movie.Country}</Typography>
        <Typography><strong>Clasificación: </strong>{movie.Rated}</Typography>
        <Typography><strong>Premios: </strong>{movie.Awards}</Typography>
        <Typography><strong>Sinopsis: </strong>{movie.Plot}</Typography>
      </Container>
    );
}