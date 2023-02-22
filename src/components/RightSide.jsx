import React from "react";
import { useSelector } from 'react-redux';
import temperatureConvertor from "../utils/converter";
import  moment  from 'moment';
import Moment from "react-moment";

export const RightSide = () => {
  const {weather, main, wind} = useSelector(state => state.weather.data)
  const degrees = useSelector((state) => state.switch.degreesMode);
  
  return (
    <div className="right_side_container">
      <h3>Right now:</h3>
      <div className="right_side_header">
        <div className="right_side_header_col">
          <h2 className="right_side_header_current">{temperatureConvertor(main.temp, degrees)}&deg;</h2>
          <h5 className="right_side_header_desc"> {weather[0].main} </h5>
        </div>
        <div className="right_side_header_col">
        <div className="right_side_header_feels">feels like {temperatureConvertor(main.feels_like, degrees)}&deg;</div>         
        </div>
      </div>

    <hr/>

      <div className="right_side_middle">
          <div className="right_side_middle_col">
            <div className="right_side_middle_time"> Time: {<Moment format="HH:mm" interval={1000} />} </div>
            <div className="right_side_middle_wind"> Windspeed: {wind.speed} m/s </div>
            <div className="right_side_middle_humidity">Humidity: {main.humidity}%</div>
          </div>
          <div className="right_side_middle_col">
          <div className="right_side_middle_pressure"> Pressure: {main.pressure}mb </div>
          </div>
      </div>

    </div>
  );
};
