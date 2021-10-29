import React from 'react';
import classes from "./Slider.module.css";
import slideImg from "./img1.png";

const Slider = () =>  {
  return (
    <div className={classes.slider}>
      <img className={classes.img} src={slideImg} alt="" />
    </div>
  );
}

export default Slider;