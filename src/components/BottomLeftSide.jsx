import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import Moment from 'react-moment'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export const BottomLeftSide = () => {
  const [angle, setAngle] = useState(2);
  const { sys, coord } = useSelector((state) => state.weather.data);
  const sunset = sys?.sunset;
  const sunrise = sys?.sunrise;

  useEffect(() => {
    const value = Math.floor(
      ((moment().unix() - sunrise) * 180) / (sunset - sunrise)
    )
    if (value > 180) setAngle(179)
    console.log(value);
  }, [])
  

  return (
    <div className="container">
      <div className="today_p">
        Time to sunset {<Moment fromNow>{moment.unix(sunset).toString()}</Moment>}
      </div>
      <div className="sunset_cont">
        <div className="sunset_box"></div>
        <div
          className="sunset_box_nested"
          style={{ transform: `rotate(${angle}deg)` }}
        >
          <div className="sunset_box_nested_dot"></div>
        </div>
      </div>
      <div className="sun_info">
        <div className="sun_info_sunrise">
          Sunrise {moment.unix(sunrise).format("HH:mm")}
        </div>
        <div className="sun_info_sunser">
          Sunset {moment.unix(sunset).format("HH:mm")}
        </div>
      </div>

      {/* <MapContainer center={[coord.lon, coord.lat]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[coord.lon, coord.lat]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer> */}
    </div>
  );
};
