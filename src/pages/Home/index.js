import React, { useState } from 'react';
import {
  Container,
  Typography,
  Card,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import {MovieIcon} from './../../icons';
import styles from './style';


export default ({history}) => {
    const [searchText, setSearchText] = useState('');
    const classes = styles();
    const handleChangeSearchText = event => {
       setSearchText(event.target.value);
    }
    const handleCleanTextClick = event => {
        setSearchText('');
    }
    const handleSearchTextClick = event => {
      history.push(`/results?movieName=${searchText}`)
    }
    return (
      <Container className={classes.container}>
        <Card className={classes.cardContainer}>
          <Grid container className={classes.titleGridContainer}>
            <Grid>
              <Typography className={classes.title}> Bienvenido </Typography>
            </Grid>
            <Grid>
              <label><MovieIcon className={classes.movieIcon}></MovieIcon></label>
            </Grid>
          </Grid>
          <TextField
            className={classes.textFieldSearch}
            value={searchText}
            placeholder="Buscar..."
            onChange={(e) => handleChangeSearchText(e)}
          />
          <Grid className={classes.buttonsContainer}>
            <Button variant="contained" onClick={handleCleanTextClick}>
              Limpiar
            </Button>
            <Button
              className={classes.searchButton}
              variant="contained"
              color="primary"
              size="large"
              onClick={handleSearchTextClick}
            >
              Buscar
            </Button>
          </Grid>
        </Card>
      </Container>
    );

};