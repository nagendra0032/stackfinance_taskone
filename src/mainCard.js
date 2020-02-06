import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core';
// import CardHeader from '@material-ui/core/CardHeader';
import Cards from './cards';
import ProgressBar from './ProgressBar';
import OutlinedCard from './Outlined_card';
import Btn from './Btn';

// styling for main card
const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 200,
    margin: 'auto',
    borderRadius: 0,
    width: 300,
    Height: 400,
    textAlign: 'center',
    boxShadow: 'none',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  header: {
    textAlign: 'center',
    spacing: 10,
  },
  list: {
    padding: '20px',
  },
  button: {
    margin: theme.spacing(1),
    borderRadius: 0,
   
  },
  action: {
    display: 'flex',
    justifyContent: 'start',

  },
}));


const MainCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root} >
      <Cards />
      <ProgressBar />
      <OutlinedCard />
     
      <CardActions className={classes.action}>
         <Btn label = "Save for later" />
         <Btn label = "Tell your friends" />
      </CardActions>
     
    </Card>
    
  );
};


export default MainCard;