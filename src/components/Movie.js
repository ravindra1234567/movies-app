import React, { useState } from "react";
import { red } from "@material-ui/core/colors";
import Grid from '@material-ui/core/Grid';
import Card from './Card'

const Recipe = ({ movie }) => {
  const [show, setShow] = useState(false);
  const {Poster,Title,Type,Year} = movie;

  return (
    <>
       <Grid item xs={3}>
        <Card title={Title} image={Poster} year={Year} type={Type} /> 
        </Grid>
    </>
  );
};

export default Recipe;