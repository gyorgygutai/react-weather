// import axios from 'axios'
import jsonp from 'jsonp'

const { REACT_APP_DARK_SKY_API_KEY: API_KEY } = process.env

export function getForecast({ lat, lng }) {
  return new Promise((resolve, reject) => {
    const requestUrl = `https://api.darksky.net/forecast/${API_KEY}/${lat},${lng}?units=si`

    jsonp(requestUrl, {}, function (err, data) {
      if (err) {
        return reject(err)
      }

      return resolve(data)
    })
  })
}
