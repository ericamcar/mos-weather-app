import React, {FC} from "react"

import Menu from "src/components/Menu"
import CurrentForecast from "src/components/Screen1Components/CurrentForecast"
import TodayForecast from "src/components/Screen1Components/TodayForecast"
import WeeklyForecast from "src/components/Screen1Components/WeeklyForecast"
import {useWeather} from "src/contexts/WeatherContext"
import {toCelsius} from "src/utils/toCelsuis"

const Screen1: FC = () => {
  const weather = useWeather()

  return (
    <div>
      <Menu />
      {weather && toCelsius(weather.main.temp)}
      <CurrentForecast />
      <TodayForecast />
      <WeeklyForecast />
    </div>
  )
}

export default Screen1
