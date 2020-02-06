import React from 'react';
import {makeStyles } from '@material-ui/core';

// styling for inner card 
const useStyles = makeStyles(theme => ({
  root: {
    marginTop:10,
    borderRadius: 2.5,
    width: 250,
    textAlign: 'center',
    boxShadow: 'none',
    background:'grey',
    height:40,
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    justifyItems: 'center',
    fontSize: 12,
    fontWeight: 'bold'
  },
  list: {
    padding: '20px',
  },
  
}));

const Cards = () => {
  const classes = useStyles();
  return (
    <div className = {classes.root}>
        <p>$167 is still needed for this project</p>
    </div>
  );
};


export default Cards;