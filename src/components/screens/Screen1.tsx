import {FC} from "react"

import CurrentForecast from "src/components/Screen1Components/CurrentForecast"
import TodayForecast from "src/components/Screen1Components/TodayForecast"
import WeeklyForecast from "src/components/Screen1Components/WeeklyForecast"
import ScreenLayout from "src/components/screens/ScreenLayout"
import {useWeather} from "src/contexts/WeatherContext"
import {toCelsius} from "src/utils/toCelsuis"

import styles from "../../pages/index.module.scss"

const Screen1: FC<{city: string; lastUpdated: string}> = ({city, lastUpdated}) => {
  const weather = useWeather()

  return (
    <ScreenLayout>
      <h4 className={styles[`heading-quaternary`]}>{lastUpdated}</h4>
      <h1 className={styles[`heading-primary`]}>{city}</h1>
      {weather && toCelsius(weather.main.temp)}
      <CurrentForecast />
      <TodayForecast />
      <WeeklyForecast />
    </ScreenLayout>
  )
}

export default Screen1
