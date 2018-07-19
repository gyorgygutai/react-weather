import React from 'react'
import FullScreen from 'components/FullScreen'
import SecondaryText from 'components/SecondaryText'
import Flex from 'flexbox-react'

const WeatherError = (props) => (
  <FullScreen>
    <Flex
      flex={1}
      style={styles.root}
      alignItems="center"
      justifyContent="center"
    >
      <SecondaryText>
        Could not fetch weather for your location.
      </SecondaryText>
    </Flex>
  </FullScreen>
)

const styles = {
  root: {
    padding: '10%',
    textAlign: 'center',
    backgroundImage: `linear-gradient(to bottom, red, #5CB5F8)`,
  }
}

export default WeatherError
