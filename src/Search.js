import React from "react";

export default function search() {
  return (
    <input
      type="search"
      placeholder="Type a city.."
      class="form-control"
      id="city-input"
      autocomplete="off"
    />
  );
}
