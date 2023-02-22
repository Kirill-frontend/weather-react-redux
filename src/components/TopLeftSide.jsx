import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import { useSelector } from "react-redux";
import moment from "moment";
import temperatureConvertor from "../utils/converter";

export const TopLeftSide = () => {
  const { name, sys, dt, main } = useSelector((state) => state.weather.data);
  const degrees = useSelector((state) => state.switch.degreesMode);
  const past = useSelector((state) => state.weather.past);
  const forecast = useSelector((state) => state.weather.forecast);
  const country = sys?.country;
  const currentTemp = main?.temp;

  return (
    <Container>
      <Stack className="">
        <Row className="justify-content-center">
          {name}, {country}
        </Row>
        <Row className="justify-content-center">
          {moment().format("dddd MMMM Do YYYY")}
        </Row>
        <Row className="pd-4 aife">
          {past.map((day) => (
            <Col key={day.current.dt} className="tac">
              <Stack>
                <div>{moment.unix(day.current.dt).format("dddd")} </div>
                <div className="temp-value">
                  {" "}
                  {temperatureConvertor(day.current.temp, degrees)}&deg;{" "}
                </div>
              </Stack>
            </Col>
          ))}
          <Col className="tac">
            <Stack>
              {/* <div>{moment.unix(dt).format('dddd')} </div> */}
              <div className="temp-value curr-temp-value">
                {" "}
                {temperatureConvertor(currentTemp, degrees)}&deg;{" "}
              </div>
            </Stack>
          </Col>
          {forecast.map((day) => (
            <Col key={day.dt} className="tac">
              <Stack>
                <div>{moment.unix(day.dt).format("dddd")} </div>
                <div className="temp-value">
                  {" "}
                  {temperatureConvertor(day.main.temp, degrees)}&deg;{" "}
                </div>
              </Stack>
            </Col>
          ))}
        </Row>
      </Stack>
    </Container>
  );
};

// X В UTC Время
//moment.utc()
