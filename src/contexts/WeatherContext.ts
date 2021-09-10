import React, {useContext} from "react"
import {OneCallApiResponse} from "src/types/oneCallApi"

export const WeatherContext = React.createContext<OneCallApiResponse | undefined>(undefined)

export function useWeather() {
  const weather = useContext(WeatherContext)
  return weather
}
