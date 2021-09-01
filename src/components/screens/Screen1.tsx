import {FC} from "react"

import ScreenLayout from "src/components/screens/ScreenLayout"
import {useWeather} from "src/contexts/WeatherContext"
import {toCelsius} from "src/utils/toCelsuis"

const Screen1: FC = () => {
  const weather = useWeather()

  return <ScreenLayout>{weather && toCelsius(weather.main.temp)}</ScreenLayout>
}

export default Screen1
