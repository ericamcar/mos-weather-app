import React, {useContext} from "react"

export type WeatherContextType = {
  coord: {
    /**
     * City geo location, longitude
     */
    long: number

    /**
     * City geo location, latitude
     */
    lat: number
  }
  weather: Array<{
    /**
     * Weather condition id
     */
    id: string

    /**
     * Group of weather parameters (Rain, Snow, Extreme etc.)
     */
    main: string

    /**
     * Weather condition within the group. You can get the output in your language.
     */
    description: string

    /**
     * Weather icon id
     */
    icon: string
  }>
  main: {
    /**
     * Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
     */
    temp: number

    /**
     * Temperature. This temperature parameter accounts for the human perception of weather. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
     */
    feels_like: number

    /**
     * Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
     */
    pressure: number

    /**
     * Humidity, %
     */
    humidity: number

    /**
     * Minimum temperature at the moment. This is minimal currently observed temperature (within large megalopolises and urban areas). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
     */
    temp_min: number

    /**
     * Maximum temperature at the moment. This is maximal currently observed temperature (within large megalopolises and urban areas). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
     */
    temp_max: number
  }
  clouds: {
    all: number
  }
  name: string
}

export const WeatherContext = React.createContext<WeatherContextType | undefined>(undefined)

export function useWeather() {
  const weather = useContext(WeatherContext)
  return weather
}
