import React from "react";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Chicago",
    temperature: -1,
    date: "Friday 07:21",
    description: "Broken Clouds",
    imgUrl: "http://openweathermap.org/img/wn/04n@2x.png",
    humidity: 77,
    wind: 10,
  };

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
                <li>Last updated:{weatherData.date}</li>
                <li>{weatherData.description}</li>
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
                    <strong>{weatherData.temperature}</strong>
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
        <small>
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
}
