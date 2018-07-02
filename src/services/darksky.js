import axios from 'axios'

const { REACT_APP_DARK_SKY_API_KEY: API_KEY } = process.env

export function getForecast({ lat, lng }) {
  return axios.get(`https://api.darksky.net/forecast/${API_KEY}/${lat},${lng}?units=si`)
}
