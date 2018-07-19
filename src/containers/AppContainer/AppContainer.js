import React, { Component } from 'react'
import { IntlProvider } from 'react-intl'
import enMessages from 'messages/en'
import WeatherContainer from 'containers/WeatherContainer'
import './global.css'

class AppContainer extends Component {
  render() {
    return (
      <IntlProvider locale="en" messages={enMessages}>
        <WeatherContainer />
      </IntlProvider >
    )
  }
}

export default AppContainer
