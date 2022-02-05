import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function celsius() {
    return ((props.fahrenheit - 32) * 5) / 9;
  }

  if (unit === "fahrenheit") {
    return (
      <div className="WeatherTemperature">
        <strong>{Math.round(props.fahrenheit)}</strong>
        <span className="units">
          <a href className="active text-decoration-none">
            °F{" "}
          </a>
          |{" "}
          <a href="/" className="text-decoration-none" onClick={showCelsius}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <strong>{Math.round(celsius())}</strong>
        <span className="units">
          <a href="/" className="text-decoration-none" onClick={showFahrenheit}>
            °F{" "}
          </a>
          | °C
        </span>
      </div>
    );
  }
}
