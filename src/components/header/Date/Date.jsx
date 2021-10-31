import React from 'react';
import moment from 'moment/min/moment-with-locales';
import classes from "./Date.module.css";

const Date = () =>  {
  let date = moment().locale("ru");
  
  return (
    <div className={classes.date}>{ date.format("DD MMMM YYYY") }</div>
  );
}

export default Date;