import React from 'react'
import Swipeable from 'react-swipeable'
import clamp from 'lodash/clamp'
import { format } from 'fecha'
import FullScreen from 'components/FullScreen'

class Weather extends React.Component {
  state = {
    num: 0
  }

  swipingUp = (e, absX, isFlick) => {
    this.setState(state => ({ num: clamp(state.num - (absX / 10), 0, Infinity) }))
  }
  swipingDown = (e, absX) => {
    this.setState(state => ({ num: state.num + (absX / 10) }))
  }

  render() {
    const currentDate = (+ new Date()) + (this.state.num * 60000)
    const formattedDate = format(currentDate, 'HH:mm')

    return (
      <FullScreen>
        <Swipeable
          onSwipingUp={this.swipingUp}
          onSwipingDown={this.swipingDown}
          style={{ background: 'red', flex: 1 }}
        >
          {formattedDate}
        </Swipeable>
      </FullScreen>
    )
  }
}

export default Weather
