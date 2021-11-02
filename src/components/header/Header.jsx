import React from 'react';
import classes from "./Header.module.css";
import Time from "./Time/Time";
import Weather from "./Weather/Weather";
import Date from "./Date/Date";

const Header = () =>  {

  return (
    <div className={classes.header}>
      <div>
        <Time />
        <Weather />
      </div>
      <Date/>
    </div>
  );
}

export default Header;