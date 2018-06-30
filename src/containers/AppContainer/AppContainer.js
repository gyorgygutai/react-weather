import React, { Component } from 'react'
import { IntlProvider } from 'react-intl'
import enMessages from 'messages/en'
import Weather from 'components/Weather'
import './global.css'

class Container extends Component {
  componentDidCatch(error, info) {
    console.log(error, info)
  }

  render() {
    return (
      <IntlProvider locale="en" messages={enMessages}>
        <Weather />
      </IntlProvider >
    )
  }
}

export default Container
