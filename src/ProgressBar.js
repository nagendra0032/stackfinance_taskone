import React from 'react';
import {makeStyles } from '@material-ui/core';


// styling for progress bar
const useStyles = makeStyles(theme => ({
    myProgress : {
        marginTop:5,
        width: 250,
        height:10,
        borderTop: '0.2px solid grey',
        borderRight: '0.2px solid grey',
        borderLeft: '0.2px solid grey'
        // border: '2px solid black',
        
    },
    myBar: {
        width:200,
        background:'#ff0000',
        height:10
    }
    
  }));

const ProgressBar = () => {
    const classes = useStyles();
    return (
        <div>

           <div className={classes.myProgress}>
                <div className={classes.myBar}></div>
            </div>


        </div>
    )
}

export default ProgressBar;