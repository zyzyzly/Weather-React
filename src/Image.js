import React from "react";
import "./Image.css";

export default function image() {
  return (
    <div className="clearfix weather-temperature">
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
        alt="Clear"
        className="float-left"
      />
      <div className="float-left">
        <strong>19</strong>
        <span className="units">
          <a href="/some/valid/uri" className="active">
            °C
          </a>
          |<a href="/some/valid/uri">°F</a>
        </span>
      </div>
    </div>
  );
}
