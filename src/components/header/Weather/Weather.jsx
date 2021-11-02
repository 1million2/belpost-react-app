import { React, useState, useEffect } from 'react';
import { ReactComponent as Weathericon } from "./icon-weather.svg";
import classes from "./Weather.module.css";

// class Weather extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       isLoaded: false,
//       temp: null
//     };
//   }

//   componentDidMount() {
//     const url = "http://api.openweathermap.org/data/2.5/weather?id=";
//     const apiKey = "9a3403299ab615f42eb0ac912147e942";
//     const id = 625144;
//     let fullUrl = url + id + "&lang=ru&units=metric&appid=" + apiKey;

//     fetch(fullUrl)
//       .then(res => res.json())
//       .then(
//         (result) => {
//           this.setState({
//             isLoaded: true,
//             temp: Math.ceil(result.main.temp)
//           });
//         },
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error
//           });
//         }
//       )
//   }

//   render() {
//     let active = "active";
//     const { error, isLoaded, temp } = this.state;
//     if (error) {
//       return <div>Ошибка: {error.message}</div>;
//     } else if (!isLoaded) {
//       return <p>Загрузка...</p>;

//     } else {
//       active += "show";
//       return (
//         <div className={classes.active + " " + classes.show}>
//           <p>{temp + "˚C"}</p>
//           <Weathericon />
//         </div>
//       );
//     }
//   }
// }

const Weather = () => {

  const [temp, getApi] = useState();

  useEffect(() => {

    const url = "http://api.openweathermap.org/data/2.5/weather?id=";
    const apiKey = "9a3403299ab615f42eb0ac912147e942";
    const id = 625144;
    let fullUrl = url + id + "&lang=ru&units=metric&appid=" + apiKey;

    fetch(fullUrl)
      .then(res => res.json())
      .then((res) => {
        res = `${Math.ceil(res.main.temp)}˚C`
        getApi(res)
      },
        (error) => {
          error = error.message
          getApi(error);
        })
  })
  return (
    <div className={classes.tempVal}>
      <p>{temp}</p>
      <Weathericon />
    </div>
  )

}

export default Weather;