import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";

import "./Weather.css";

export default function Weather(props) {
  const [loaded, setLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      imgUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });

    setLoaded(true);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "b1a8336ff1e05b64da5625e4158fbea3";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="App">
        <div className="container">
          <div className="weather-app-wrapper">
            <div className="Weather">
              <form onSubmit={handleSubmit} class="mb-3">
                <div className="row">
                  <div className="col-9">
                    <input
                      type="search"
                      placeholder="Enter city here..."
                      className="form-control"
                      autoFocus="on"
                      autoComplete="off"
                      onChange={handleCityChange}
                    />
                  </div>
                  <div className="col-3">
                    <input
                      type="submit"
                      value="Search"
                      className="btn btn-primary w-100"
                    />
                  </div>
                </div>
              </form>
              <WeatherInfo data={weatherData} />
            </div>
            <div className="weather-forecast">
              <div className="row">
                <div className="col-2">
                  <div className="weather-forcast-date">
                    <div className="weather-forcast-temperature"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <small className="githubLink">
          {" "}
          <a
            href="https://github.com/edistomars/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Marla Laystrom
        </small>
      </div>
    );
  } else {
    search();

    return "Loading...";
  }
}
