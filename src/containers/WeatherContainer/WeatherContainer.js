import React from 'react'
import Weather from 'components/Weather'
import { getForecast } from 'services/darksky'

class WeatherContainer extends React.Component {
  state = {
    location: {
      lat: 47.5,
      lng: 19.0833,
      city: 'Budapest'
    },
    isFetching: true,
    dayByDayData: {},
    forecastData: []
  }

  async componentDidMount() {
    const response = await getForecast(this.state.location)
    const dayByDayData = response.data.daily.data.reduce((data, currentItem) => {
      data[currentItem.time] = currentItem

      return data
    }, {})

    const forecastData = [
      ...response.data.currently,
      ...response.data.hourly.data
    ]

    this.setState({
      dayByDayData,
      forecastData,
      isFetching: false
    })
  }

  render() {
    const { isFetching, ...state } = this.state

    return isFetching ? null : <Weather {...state} />
  }
}

export default WeatherContainer
