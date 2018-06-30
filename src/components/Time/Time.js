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
        children={(formattedValue) => <h1>{formattedValue}</h1>}
      />
      {
        !isToday && (
          <FormattedDate
            value={asDate}
            children={(formattedValue) => <h2>{formattedValue}</h2>}
          />
        )
      }
    </div>
  )
}

Time.propTypes = {
  timestamp: number
}

Time.defaultProps = {
  timestamp: 0
}

export default Time
