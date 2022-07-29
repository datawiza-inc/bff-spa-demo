import { makeStyles } from '@material-ui/core/styles';
import React from "react";

const useStyles = makeStyles({
  container: {
    padding: '50px 100px',
    width: 'auto',
  }
});

const Loading = () => {
  const classes = useStyles();

  return (
    <div className="ui segment">
    <div className={classes.container}>
      <div className="ui active inverted dimmer">
        <div className="ui text loader">Loading</div>
      </div>
      <p></p>
    </div>
    </div>
  )
}

export default Loading