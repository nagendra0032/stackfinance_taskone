// Button component
import React from 'react';
import {makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        width : 120,
        height : 40,
        background : 'white',
        border : '1px solid grey',
        borderRadius : 2
    }
  }));


const Btn = (props) => {
    const classes = useStyles();
    return(
        <div>
<button className ={classes.root} >{props.label}</button>
        </div>
    )
}

export default Btn;