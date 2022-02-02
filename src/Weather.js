import React, { useState } from "react";
import axios from "axios";

import FormattedDate from "./FormattedDate";

import "./Weather.css";

export default function Weather(props) {
  const [loaded, setLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      imgUrl: "http://openweathermap.org/img/wn/04n@2x.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });

    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="App">
        <div className="container">
          <div className="weather-app-wrapper">
            <div className="Weather">
              <div className="overview">
                <form class="mb-3">
                  <div className="row">
                    <div className="col-9">
                      <input
                        type="search"
                        placeholder="Enter city here..."
                        className="form-control"
                        autoFocus="on"
                        autoComplete="off"
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
                <h1>{weatherData.city}</h1>
                <ul>
                  <li>
                    <FormattedDate date={weatherData.date} />
                  </li>
                  <li className="text-capitalize">{weatherData.description}</li>
                </ul>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="clearfix weather-temperature">
                    <img
                      src={weatherData.imgUrl}
                      alt={weatherData.description}
                      className="float-left"
                    />
                    <div className="float-left">
                      <strong>{Math.round(weatherData.temperature)}</strong>
                      <span className="units">
                        <a href class="active">
                          °F{" "}
                        </a>
                        | °C
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <ul>
                    <li>
                      Humidity: <span>{weatherData.humidity}</span>%
                    </li>
                    <li>
                      Wind: <span>{weatherData.wind}</span> mph
                    </li>
                  </ul>
                </div>
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
      </div>
    );
  } else {
    const apiKey = "b1a8336ff1e05b64da5625e4158fbea3";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
