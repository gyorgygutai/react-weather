import React from 'react'
import FullScreen from 'components/FullScreen'
import SecondaryText from 'components/SecondaryText'
import Flex from 'flexbox-react'

const WeatherLoader = (props) => (
  <FullScreen>
    <Flex
      flex={1}
      style={styles.root}
      alignItems="center"
      justifyContent="center"
    >
      <SecondaryText>
        Loading...
      </SecondaryText>
    </Flex>
  </FullScreen>
)

const styles = {
  root: {
    padding: '10%',
    textAlign: 'center',
    background: '#5CB5F8'
  }
}

export default WeatherLoader
