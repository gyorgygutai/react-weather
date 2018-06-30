import React, { Component, Fragment } from 'react'
import Time from 'components/Time'
import FullScreen from 'components/FullScreen'
import TimeTravelView from 'components/TimeTravelView'

class Weather extends Component {
  render() {
    return (
      <FullScreen>
        <TimeTravelView>
          {(travelledMilliseconds) => {
            const timestamp = (+ new Date()) + (travelledMilliseconds)

            return (
              <Fragment>
                <Time timestamp={timestamp} />
              </Fragment>
            )
          }}
        </TimeTravelView>
      </FullScreen>
    )
  }
}

export default Weather
