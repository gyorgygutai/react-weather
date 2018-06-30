import React from 'react'
import { func, number } from 'prop-types'
import clamp from 'lodash-es/clamp'
import Swipeable from 'react-swipeable'

class TimeTravelView extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentTimestamp: props.initialTimestamp
    }
  }

  flashBack = (e, absX) => {
    const { speed } = this.props

    this.setState(state => ({
      currentTimestamp: clamp(
        (state.currentTimestamp - (absX * speed)), 0, Infinity
      )
    }))
  }
  flashForward = (e, absX) => {
    const { speed, maxTimestamp } = this.props

    this.setState(state => ({
      currentTimestamp: clamp(
        (state.currentTimestamp + (absX * speed)), 0, maxTimestamp
      )
    }))
  }

  render() {
    return (
      <Swipeable
        onSwipingUp={this.flashBack}
        onSwipingDown={this.flashForward}
        style={styles.swipeContainer}
      >
        {this.props.children(this.state.currentTimestamp)}
      </Swipeable>
    )
  }
}

const styles = {
  swipeContainer: {
    background: 'red',
    flex: 1
  }
}

TimeTravelView.propTypes = {
  children: func.isRequired,
  speed: number,
  initialTimestamp: number,
  maxTimestamp: number
}

const twoDaysInMs = 172800000

TimeTravelView.defaultProps = {
  speed: 10000,
  initialTimestamp: 0,
  maxTimestamp: twoDaysInMs
}

export default TimeTravelView
