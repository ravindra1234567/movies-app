import './App.css';
import { FormControlLabel, Grid, CssBaseline, Button, Container, Avatar, TextField, makeStyles } from '@material-ui/core';
import { LockOutlinedIcon } from '@material-ui/lab'
import Autocomplete from "@material-ui/lab";
import axios, * as others from 'axios';
import Movie from "./components/Movie";

import React, { useState } from 'react';

function App() {


  

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    root: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const APP_KEY = "263d22d8";


  const url = `http://www.omdbapi.com/?s=${query}&apikey=${APP_KEY}`;
  const getData = async () => {
    const result = await axios.get(url);
    if (!result)
      console.log("Data not found");
    console.log(result.data)
    setMovies(result.data.Search)
    // setRecipes(result.data.hits);
    setQuery("");
    // setAlert("");

  }
  const onSubmit = eve => {
    eve.preventDefault();
    getData();
  }

  const onChange = e => setQuery(e.target.value);

  return (
    <div>


        <CssBaseline />
        <div className={classes.paper}>
        <Container component="main" maxWidth="xs">
          <h1>Movies</h1>
          <form className={classes.form} noValidate onSubmit={onSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="movie"
              label="Enter Movie Name"
              name="movie"
              autoComplete="movie"
              autoFocus
              value={query}
              onChange={onChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Search
          </Button>
          </form>
          </Container>
         
          {console.log(query)}

          <div>
            {
              

              <div >
                {
                  
                  <div className={classes.root}>
                    <Grid container spacing={2}>
                     { movies ? (movies.map((movie,i) => <Movie key={i} movie={movie} />)):"movie not available"}
                    </Grid>
                  </div>
                }
              </div>

            }
          </div>

        </div>
        

     
    </div>
  );
}

export default App;
