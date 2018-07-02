import React, { Component } from 'react'
import { object, array } from 'prop-types'
import FullScreen from 'components/FullScreen'
import TimeTravelView from 'components/TimeTravelView'
import WeatherSummary from 'components/WeatherSummary'
import WeatherBackground from 'components/WeatherBackground'
import findClosest from 'find-closest'

class Weather extends Component {
  render() {
    const { location, dayByDayData, forecastData } = this.props

    return (
      <FullScreen>
        <TimeTravelView>
          {(travelledMilliseconds) => {
            const selectedTimestamp = (+ new Date()) + (travelledMilliseconds)
            const startOfDayDate = new Date(selectedTimestamp)

            startOfDayDate.setHours(0, 0, 0, 0)

            const selectedTimestampInSecs = Math.round(selectedTimestamp / 1000)

            const closestDataItem = findClosest(forecastData, selectedTimestamp / 1000, 'time') || {}
            const closestDailyItem = dayByDayData[startOfDayDate.getTime() / 1000]

            return (
              <WeatherBackground
                currentTimestamp={selectedTimestampInSecs}
                sunriseTimestamp={closestDailyItem.sunriseTime}
                sunsetTimestamp={closestDailyItem.sunsetTime}
              >
                <WeatherSummary
                  location={location}
                  timestamp={selectedTimestamp}
                  data={closestDataItem}
                />
              </WeatherBackground>
            )
          }}
        </TimeTravelView>
      </FullScreen>
    )
  }
}

Weather.propTypes = {
  location: object,
  forecastData: array,
  dayByDayData: object
}

Weather.defaultProps = {
  location: {},
  forecastData: [],
  dayByDayData: {}
}

export default Weather
