import React from 'react';
import Card from '@material-ui/core/Card';
import {makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
// import { createMuiTheme } from '@material-ui/core/styles';
// import green from '@material-ui/core/colors/green';
// import OutlinedCard from './Outlined_card';

// const theme = createMuiTheme({
//     palette: {
//       primary: green,
//     },
//   });

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 0,
    width: 250,
    height: 200,
    textAlign: 'left',
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    border: '1px solid grey'
  },
  header: {
    textAlign: 'center',
    spacing: 10,
  },
  list: {
    padding: '20px',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  
  action: {
    marginTop: -5,
    display: 'flex',
    justifyContent: 'space-evenly',
    

  },
  orangepara: {
      color: 'orange'
  },
  
  greypara : {
      color : 'black',
      opacity: 0.5,
      textAlign: 'left'
  },
  inputfield : {
      width : 100,
      borderRadius: 0
  },
  inboxline : {
      marginLeft : 20,
      color : '#87CEEB',
      marginTop : -0.5,
      fontStyle : 'italic',
      fontSize : 12
  },
  button: {
    // margin: theme.spacing(1),
    width : 100,
    height : 40,
    background : 'green',
    border : 'none',
    color : 'white',
    fontWeight : 505
  },
//   note: {
//     position: 'relative',
//     marginTop: -10,
//     marginLeft:10,
//     borderRadius: 2.5,
//     width: 250,
//     textAlign: 'center',
//     boxShadow: 'none',
//     background:'white',
//     height:40,
//     color: 'blue',
//     // display: 'flex',
//     // alignItems: 'center',
//     fontSize: 12,
//     fontWeight: 'bold'
//   },

}));

const OutlinedCard= () => {
  const classes = useStyles();
  return (
    <Card className={classes.root} width="400px">
      {/* <outlinedCard /> */}
      <div className={classes.list}>
          <p><span className={classes.orangepara}>3 days are left</span> to fund this project</p>
          <p className={classes.greypara}>Join the 42 others donors who have already supported this project. Every dollar helps.</p>
        </div>
     <div className={classes.action}>
       <TextField id="outlined-basic" size = "small" className={classes.inputfield} variant="outlined" />
       <button className ={classes.button} >GIVE NOW</button>
        {/* <Button variant="contained" color = "primary" className={classes.button}>
          GIVE NOW
        </Button> */}
      </div>
      <p className = {classes.inboxline} >why give $50?</p>
      {/* <div className = {classes.note}> */}
        
    {/* </div> */}
    </Card>
  );
};


export default OutlinedCard;