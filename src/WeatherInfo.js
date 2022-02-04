import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={52} />
            </div>

            <div className="float-left">
              <strong>{Math.round(props.data.temperature)}</strong>
              <span className="units">
                <a href className="active">
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
              Humidity: <span>{props.data.humidity}</span>%
            </li>
            <li>
              Wind: <span>{props.data.wind}</span> mph
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
