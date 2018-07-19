import React from 'react'
import { number, object } from 'prop-types'
import Temperature from 'components/Temperature'
import SecondaryText from 'components/SecondaryText'
import Flex from 'flexbox-react'
import { FormattedTime, FormattedDate } from 'react-intl'

const WeatherSummary = ({ timestamp, data }) => {
  const asDate = new Date(timestamp)
  const isToday = asDate.toDateString() === (new Date().toDateString())

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      style={styles.root}
    >
      <div>
        <FormattedTime
          value={asDate}
          children={(formattedValue) => <h1 style={styles.time}>{formattedValue}</h1>}
        />
        <div style={styles.dateContainer}>
          {
            !isToday && (
              <FormattedDate
                value={asDate}
                children={(formattedValue) => <SecondaryText style={styles.date}>{formattedValue}</SecondaryText>}
              />
            )
          }
        </div>
      </div>
      <div style={styles.temperatureContainer}>
        <h4 style={styles.temperature}>
          <Temperature value={data.temperature} />
        </h4>
        <SecondaryText>{data.summary}</SecondaryText>
      </div>
    </Flex>
  )
}

const styles = {
  root: {
    textAlign: 'center',
  },
  time: {
    margin: 0,
    fontSize: '1.75rem',
    fontWeight: 'normal'
  },
  dateContainer: {
    minHeight: '1.5rem',
  },
  date: {
    margin: 0,
    fontSize: '1rem',
    lineHeight: '1rem',
    fontWeight: 'normal',
    color: 'rgba(255, 255, 255, .8)'
  },
  temperatureContainer: {
    position: 'relative',
    top: 35,
  },
  temperature: {
    margin: 0,
    marginLeft: 14,
    marginTop: 60,
    fontWeight: 'normal',
    fontSize: '4rem',
    lineHeight: '4rem'
  },
}

WeatherSummary.propTypes = {
  timestamp: number,
  data: object.isRequired
}

export default WeatherSummary
