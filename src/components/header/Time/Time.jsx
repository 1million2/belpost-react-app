import React from 'react';
import moment from 'moment';
import classes from "./Time.module.css";

const Time = () => {
  let time = moment().format("HH:mm")
  return (
    <div className={classes.time}>{ time }</div>
  );
}

export default Time;