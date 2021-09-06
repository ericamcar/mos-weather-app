import dateFormat from "dateformat"
import React, {FC} from "react"

import {useWeather} from "src/contexts/WeatherContext"
import {toCelsius} from "src/utils/toCelsuis"

import styles from "./Screen1.module.scss"

const Screen1: FC = () => {
  const weather = useWeather()

  return (
    <div className={styles.container}>
      <span style={{fontWeight: 600, fontSize: `1.5rem`}}>Today</span>
      <span>{weather && dateFormat(weather.dt * 1000, `longDate`)}</span>
      <span>{weather && toCelsius(weather.main.temp)}°C</span>
    </div>
  )
}

export default Screen1
