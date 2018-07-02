import React from 'react'
import Time from 'components/Time'
import Temperature from 'components/Temperature'

const WeatherSummary = ({ timestamp, location, data }) => (
  <div style={styles.root}>
    <Time timestamp={timestamp} />
    <div style={styles.temperatureContainer}>
      <h4 style={styles.temperature}>
        <Temperature value={data.temperature} />
      </h4>
      <span>{data.summary}</span>
    </div>
    <div style={styles.instruction}>
      Swipe down
    </div>
  </div>
)

const styles = {
  root: {
    flex: 1,
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '35% 5% 15%'
  },
  location: {
    margin: 0
  },
  temperature: {
    margin: 0,
    fontSize: '3rem',
  },
  temperatureContainer: {
    marginBottom: '50%'
  },
  instruction: {
    color: 'rgba(255, 255, 255 .8)'
  }
}

export default WeatherSummary
