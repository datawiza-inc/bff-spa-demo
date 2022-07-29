import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Navbar from '../Navbar/Navbar';

const useStyles = makeStyles({
  mainContainer: {
    marginTop: '100px',
  },
});

export const Layout = (props) => {
  const classes = useStyles();
  
    return (
        <div>
            <Navbar />
            <Container className={classes.mainContainer}>
                {props.children}
            </Container>
        </div>
    );
}
