import React from 'react';
import "./Weather.module.css"
import {ReactComponent as Weathericon} from "./icon-weather.svg";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      temp: null
    };
  }

  componentDidMount() {
    const url = "http://api.openweathermap.org/data/2.5/weather?id=";
    const apiKey = "9a3403299ab615f42eb0ac912147e942";
    const id = 625144;
    let fullUrl = url + id + "&lang=ru&units=metric&appid=" + apiKey;

    fetch(fullUrl)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            temp: Math.ceil(result.main.temp)
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, temp } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <p>Загрузка...</p>;
      
    } else {
      return (
        <div>
          <p>{temp + "˚C"}</p>
          <Weathericon />
        </div>
      );
    }
  }
}

// const Weather = () => {
//   let temp = null;

//   const getWeather = (cityID) => {
//     const url = "http://api.openweathermap.org/data/2.5/weather?id=";
//     const apiKey = "9a3403299ab615f42eb0ac912147e942";
//     const id = cityID;
//     let fullUrl = url + id + "&lang=ru&units=metric&appid=" + apiKey;

//     const getResponse = async () => {
//       let responce = await fetch(fullUrl);
//       let data = await responce.json();
//       temp = data.main.temp;
//     }
//     getResponse();

//   }
//   getWeather(625144);
// debugger
//   return (
//     <div>
//       <p>{temp} d</p>
//     </div>
//   );
// }


export default Weather;