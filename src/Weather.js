import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

export default function Weather(props) {
  function handleRespose(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}℃`
    );
  }

  let apiKey = "eb55491826770037c00de1cf8025c22b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleRespose);
  return (
    <h2>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="pink"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </h2>
  );
}
