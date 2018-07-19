import jsonp from 'jsonp-promise'

const { REACT_APP_DARK_SKY_API_KEY: API_KEY } = process.env

export function getForecast({ lat, lng }) {
  return jsonp(`https://api.darksky.net/forecast/${API_KEY}/${lat},${lng}?units=si`).promise
}
