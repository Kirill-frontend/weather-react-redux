import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Content } from "./components/Content";
import { TopPage } from "./components/TopPage";
import {
  getPastWeather,
  getWeatherAsync,
  getForecastWeather,
  getWeather,
} from "./store/slicers/weatherSlicer";
import moment from "moment";
import { useSelector } from "react-redux";
import { Loader } from "./components/Loader";

function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loading);
  const { isComp } = useSelector((state) => state.weather);

  useEffect(() => {
    if (!isComp) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const coordinats = { lat: coords.latitude, lon: coords.longitude };
        dispatch(getWeather(coordinats));
      });
    }
  }, []);

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("username", "coder.frontend@gmail.com");
  urlencoded.append("password", "supersss");
  urlencoded.append("grant_type", "password");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  fetch("https://api.dmsolutions.com.ua:2661/Token", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  return (
    <div className="app">
      <Container>
        {!isComp ? (
          <Loader />
        ) : (
          <>
            <TopPage />
            <Content />
          </>
        )}
      </Container>
    </div>
  );
}

export default App;
