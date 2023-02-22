import {  WEATHER_URL } from "./types";
const WEATHER_API = '95c3d7def94bf0b7f47cfbccdf09442b'

export default function getURL(lat, lon) {
  return `https://${WEATHER_URL}?lat=${lat}&lon=${lon}&units=metrics&appid=${WEATHER_API}`
}

export function getURLPast(lat, lon, time) {
  return `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&units=metrics&appid=${WEATHER_API}`
}

export function getURLForecast(lat, lon) {
  return `https:/api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API}`
}

//moment().subtract(1, 'days').utc().valueOf()
//https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=31&lon=49&type=day&start=1644088954800&appid=95c3d7def94bf0b7f47cfbccdf09442b
//zip code url https://api.openweathermap.org/geo/1.0/zip?zip=19050,UA&appid=95c3d7def94bf0b7f47cfbccdf09442b