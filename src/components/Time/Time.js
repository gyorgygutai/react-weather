import React from 'react'
import { number } from 'prop-types'
import { FormattedTime, FormattedDate } from 'react-intl'

const Time = ({ timestamp, ...props }) => {
  const asDate = new Date(timestamp)
  const isToday = asDate.toDateString() === (new Date().toDateString())

  return (
    <div {...props}>
      <FormattedTime
        value={asDate}
        children={(formattedValue) => <h1 style={styles.time}>{formattedValue}</h1>}
      />
      <div style={styles.dateContainer}>
        {
          !isToday && (
            <FormattedDate
              value={asDate}
              children={(formattedValue) => <h2 style={styles.date}>{formattedValue}</h2>}
            />
          )
        }
      </div>
    </div>
  )
}

const styles = {
  time: {
    margin: 0,
    fontSize: '2rem',
    fontWeight: 'normal'
  },
  dateContainer: {
    marginTop: '.5rem',
    minHeight: '1.5rem',
  },
  date: {
    margin: 0,
    fontSize: '1rem',
    lineHeight: '1rem',
    fontWeight: 'normal',
    color: 'rgba(255, 255, 255, .8)'
  }
}

Time.propTypes = {
  timestamp: number
}

Time.defaultProps = {
  timestamp: 0
}

export default Time
