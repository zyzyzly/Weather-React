import React from "react";
import ReactDOM from "react-dom/client";
import "./Style.css";

import Search from "./Search";
import Submit from "./Submit";
import City from "./City";
import Image from "./Image";
import Condition from "./Condition";
import Aboutme from "./Aboutme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="weather-app-wrapper">
      <div className="weather-app">
        <form className="mb-3">
          <div className="row">
            <div className="col-9">
              <Search />
            </div>
            <div className="col-3">
              <Submit />
            </div>
            <City />
          </div>
        </form>
        <div className="row">
          <div className="col-6">
            <Image />
          </div>

          <div className="col-6">
            <Condition />
          </div>
        </div>
      </div>
    </div>

    <Aboutme />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
