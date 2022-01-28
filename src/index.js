import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

import "./App.css";

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <Weather />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
