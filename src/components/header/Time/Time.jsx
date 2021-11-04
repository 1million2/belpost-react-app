import { React, useEffect, useState } from 'react';
import moment from 'moment';
import classes from "./Time.module.css";

const Time = () => {

  let time = moment().format("HH:mm")
  const [timeNow, setTime] = useState(time);
  
  useEffect(()=> {
    let id = setInterval(()=>{
      setTime(moment().format("HH:mm"))
    }, 30000)
    return () => clearInterval(id)
  })

  return (
    <div className={classes.time}>{timeNow}</div>
  )
}

export default Time;