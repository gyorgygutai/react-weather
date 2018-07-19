import React from 'react'
import Flex from 'flexbox-react'
import { object, node, number } from 'prop-types'

const WeatherBackground = ({
  currentTimestamp, sunriseTimestamp, sunsetTimestamp, children, style, ...props
}) => {
  const hasDaylight = currentTimestamp >= sunriseTimestamp && currentTimestamp <= sunsetTimestamp

  return (
    <Flex
      alignItems="stretch"
      flexDirection="column"
      {...props}
      style={{
        ...styles.root,
        ...styles[hasDaylight ? 'day' : 'night'],
        ...style
      }}
    >
      {children}
    </Flex>
  )
}

const styles = {
  root: {
    transition: 'all 3s ease-in-out',
  },
  day: {
    backgroundImage: `linear-gradient(to bottom, #0C4FBC, #5CB5F8)`,
  },
  night: {
    backgroundImage: `linear-gradient(to bottom, #040D31, #373C93)`,
  }
}

WeatherBackground.propTypes = {
  style: object,
  children: node,
  currentTimestamp: number,
  sunriseTimestamp: number,
  sunsetTimestamp: number,
}

export default WeatherBackground
