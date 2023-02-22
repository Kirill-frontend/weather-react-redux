export const FARENHEIT = 'FARENHEIT'
export const CELSIUM = 'CELSIUM'
export const KELVIN = 'KELVIN'

export default function temperatureConvertor(temp, to) {
  switch (to) {
    case FARENHEIT:
      return Math.ceil((temp - 273.15) * (9 / 5) + 32)
    case CELSIUM:
      return Math.ceil((temp - 273.15))
    default:
      return temp
  }
}