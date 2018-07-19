import React, { Component } from 'react'
import { object, array } from 'prop-types'
import FullScreen from 'components/FullScreen'
import Instructions from 'components/Instructions'
import TimeTravelView from 'components/TimeTravelView'
import WeatherSummary from 'components/WeatherSummary'
import WeatherBackground from 'components/WeatherBackground'
import Flex from 'flexbox-react'
import findClosest from 'services/findClosest'

class Weather extends Component {
  render() {
    const { dayByDayData, forecastData } = this.props

    return (
      <FullScreen style={styles.root}>
        <TimeTravelView>
          {(travelledMilliseconds) => {
            const selectedTimestamp = (+ new Date()) + (travelledMilliseconds)
            const startOfDayDate = new Date(selectedTimestamp)

            startOfDayDate.setHours(0, 0, 0, 0)

            const selectedTimestampInSecs = Math.round(selectedTimestamp / 1000)

            const closestDataItem = findClosest(forecastData, selectedTimestamp / 1000, 'time') || {}
            const closestDailyItem = dayByDayData[startOfDayDate.getTime() / 1000]

            const shouldShowInstructions = travelledMilliseconds < 1

            return (
              <WeatherBackground
                flex={1}
                alignItems="center"
                flexDirection="column"
                currentTimestamp={selectedTimestampInSecs}
                sunriseTimestamp={closestDailyItem.sunriseTime}
                sunsetTimestamp={closestDailyItem.sunsetTime}
              >
                <Flex flex={6} style={styles.section}>
                  <WeatherSummary
                    timestamp={selectedTimestamp}
                    data={closestDataItem}
                  />
                </Flex>
                <Flex flex={4} alignItems="flex-end" style={styles.section}>
                  {shouldShowInstructions && <Instructions />}
                </Flex>
              </WeatherBackground>
            )
          }}
        </TimeTravelView>
      </FullScreen>
    )
  }
}

const styles = {
  root: {
    userSelect: 'none'
  },
  section: {
    padding: '1rem'
  }
}

Weather.propTypes = {
  forecastData: array,
  dayByDayData: object
}

Weather.defaultProps = {
  forecastData: [],
  dayByDayData: {}
}

export default Weather
