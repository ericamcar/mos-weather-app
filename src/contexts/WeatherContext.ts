import React, {useContext} from "react"

export type WeatherContextType = {
  coord: {
    /**
     * City geo location, longitude
     */
    lon: number

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

  /** Internal parameter */
  base: string

  main: {
    /**
     * Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
     */
    temp: number

    /**
     * Temperature. This temperature parameter accounts for the human perception of weather. Unit Default: Kelvin,
     * Metric: Celsius, Imperial: Fahrenheit.
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
     * Minimum temperature at the moment. This is minimal currently observed temperature (within large megalopolises and
     * urban areas). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
     */
    temp_min: number

    /**
     * Maximum temperature at the moment. This is maximal currently observed temperature (within large megalopolises and
     * urban areas). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
     */
    temp_max: number

    /** Atmospheric pressure on the sea level, hPa */
    sea_level: number

    /** Atmospheric pressure on the ground level, hPa */
    grnd_level: number
  }

  wind: {
    /** Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour. */
    speed: number

    /** Wind direction, degrees (meteorological) */
    deg: number

    /** Wind gust. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour */
    gust: number
  }

  clouds: {
    /** Cloudiness, % */
    all: number
  }

  rain: {
    /** Rain volume for the last 1 hour, mm */
    "1h": number

    /** Rain volume for the last 3 hours, mm */
    "3h": number
  }

  snow: {
    /** Snow volume for the last 1 hour, mm */
    "1h": number

    /** Snow volume for the last 3 hours, mm */
    "3h": number
  }

  /** Time of data calculation, unix, UTC */
  dt: number

  sys: {
    /** Internal parameter */
    type: string

    /** Internal parameter */
    id: string

    /** Internal parameter */
    message: string

    /** Country code (GB, JP etc.) */
    country: string

    /** Sunrise time, unix, UTC */
    sunrise: number

    /** Sunset time, unix, UTC */
    sunset: number
  }

  /** Shift in seconds from UTC */
  timezone: number

  /** City ID */
  id: string

  /** City name */
  name: string

  /** Internal parameter */
  cod: string
}

export const WeatherContext = React.createContext<WeatherContextType | undefined>(undefined)

export function useWeather() {
  const weather = useContext(WeatherContext)
  return weather
}
