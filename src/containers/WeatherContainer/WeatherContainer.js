import React from 'react'
import Weather from 'components/Weather'
import WeatherError from 'components/WeatherError'
import WeatherLoader from 'components/WeatherLoader'
import { getForecast } from 'services/darksky'

class WeatherContainer extends React.Component {
  state = {
    error: null,
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
    try {
      const response = await getForecast(this.state.location)
      const dayByDayData = response.daily.data.reduce((data, currentItem) => {
        data[currentItem.time] = currentItem

        return data
      }, {})

      const forecastData = [
        ...response.currently,
        ...response.hourly.data
      ]

      this.setState({
        dayByDayData,
        forecastData,
        isFetching: false
      })
    } catch (error) {
      this.setState({
        error,
        isFetching: false
      })
    }
  }

  render() {
    const { isFetching, error, ...state } = this.state

    if (error) {
      return <WeatherError />
    }

    return isFetching ? <WeatherLoader /> : <Weather {...state} />
  }
}

export default WeatherContainer
