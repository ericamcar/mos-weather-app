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
      <span>{weather && dateFormat(weather.current!.dt * 1000, `longDate`)}</span>
      <span style={{fontWeight: 900, fontSize: `4rem`}}>{weather && toCelsius(weather.current!.temp)}°C</span>

      <div className={styles[`daily-weather`]}>
        <span>Morning</span>
        <span>{weather && toCelsius(weather.daily![0].temp.morn)}°C</span>

        <span>Day</span>
        <span>{weather && toCelsius(weather.daily![0].temp.day)}°C</span>

        <span>Evening</span>
        <span>{weather && toCelsius(weather.daily![0].temp.eve)}°C</span>

        <span>Night</span>
        <span>{weather && toCelsius(weather.daily![0].temp.night)}°C</span>
      </div>
    </div>
  )
}

export default Screen1
