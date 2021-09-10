export type OneCallApiRequest = {
  /** Geographical coordinates (latitude) */
  lat: number

  /** Geographical coordinates (longitude) */
  lon: number

  /**
   * By using this parameter you can exclude some parts of the weather data from the API response. It should be a comma-delimited list (without spaces).
   * Available values:

   * - current
   * - minutely
   * - hourly
   * - daily
   * - alerts
   */
  exclude?: string

  /** Units of measurement. standard, metric and imperial units are available. If you do not use the units parameter, standard units will be applied by default. {@link https://openweathermap.org/api/one-call-api#data Learn more} */
  units?: string

  /** You can use the lang parameter to get the output in your language. {@link https://openweathermap.org/api/one-call-api#multi Learn more} */
  lang?: string

  /** Your unique API key (you can always find it on your account page under the {@link https://home.openweathermap.org/api_keys "API key" tab}) */
  appid: string
}

export type OneCallApiResponse = {
  /** Geographical coordinates of the location (latitude) */
  lon: number

  /** Geographical coordinates of the location (longitude) */
  lat: number

  /** Timezone name for the requested location */
  timezone: string

  /** Shift in seconds from UTC */
  timezone_offset: number

  /** Current weather data API response */
  current?: {
    /** Current time, Unix, UTC */
    dt: number

    /** Sunrise time, Unix, UTC */
    sunrise: number

    /** Sunset time, Unix, UTC */
    sunset: number

    /** Temperature. Units - default: kelvin, metric: Celsius, imperial: Fahrenheit. {@link https://openweathermap.org/api/one-call-api#data How to change units used} */
    temp: number

    /** Temperature. This temperature parameter accounts for the human perception of weather. Units – default: kelvin, metric: Celsius, imperial: Fahrenheit. */
    feels_like: number

    /** Atmospheric pressure on the sea level, hPa */
    pressure: number

    /** Humidity, % */
    humidity: number

    /** Atmospheric temperature (varying according to pressure and humidity) below which water droplets begin to condense and dew can form. Units – default: kelvin, metric: Celsius, imperial: Fahrenheit. */
    dew_point: number

    /** Cloudiness, % */
    clouds: number

    /** Current UV index */
    uvi: number

    /** Average visibility, metres */
    visiblity: number

    /** Wind speed. Wind speed. Units – default: metre/sec, metric: metre/sec, imperial: miles/hour. {@link https://openweathermap.org/api/one-call-api#data How to change units used} */
    wind_speed: number

    /** Wind gust. Units – default: metre/sec, metric: metre/sec, imperial: miles/hour. {@link https://openweathermap.org/api/one-call-api#data How to change units used} */
    wind_gust?: number

    /** Wind direction, degrees (meteorological) */
    wind_deg: number

    rain: {
      /** Rain volume for last hour, mm */
      "1h"?: number
    }

    snow: {
      /** Snow volume for last hour, mm */
      "1h"?: number
    }

    weather: {
      /** {@link https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2 Weather condition id} */
      id: number

      /** Group of weather parameters (Rain, Snow, Extreme etc.) */
      main: string

      /** Weather condition within the group ({@link https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2 full list of weather conditions}). Get the output in {@link https://openweathermap.org/api/one-call-api#multi your language} */
      description: string

      /** Weather icon id. {@link https://openweathermap.org/weather-conditions#How-to-get-icon-URL How to get icons} */
      icon: string
    }
  }

  /** Minute forecast weather data API response */
  minutely?: Array<{
    /** Time of the forecasted data, unix, UTC */
    dt: number

    /** Precipitation volume, mm */
    precipitation: number
  }>

  /** Hourly forecast weather data API response */
  hourly?: Array<{
    /** Time of the forecasted data, Unix, UTC */
    dt: number

    /** Temperature. Units – default: kelvin, metric: Celsius, imperial: Fahrenheit. {@link https://openweathermap.org/api/one-call-api#data How to change units used} */
    temp: number

    /** Temperature. This accounts for the human perception of weather. Units – default: kelvin, metric: Celsius, imperial: Fahrenheit. */
    feels_like: number

    /** Atmospheric pressure on the sea level, hPa */
    pressure: number

    /** Humidity, % */
    humidity: number

    /** Atmospheric temperature (varying according to pressure and humidity) below which water droplets begin to condense and dew can form. Units – default: kelvin, metric: Celsius, imperial: Fahrenheit. */
    dew_point: number

    /** UV index */
    uvi: number

    /** Cloudiness, % */
    clouds: number

    /** Average visibility, metres */
    visibility: number

    /** Wind speed. Units – default: metre/sec, metric: metre/sec, imperial: miles/hour. {@link https://openweathermap.org/api/one-call-api#data How to change units used} */
    wind_speed: number

    /** Wind gust. Units – default: metre/sec, metric: metre/sec, imperial: miles/hour. {@link https://openweathermap.org/api/one-call-api#data How to change units used} */
    wind_gust?: number

    /** Wind direction, degrees (meteorological) */
    wind_deg: number

    /** Probability of precipitation */
    pop: number

    rain: {
      /** Rain volume for last hour, mm */
      "1h"?: number
    }

    snow: {
      /** Snow volume for last hour, mm */
      "1h"?: number
    }

    weather: {
      /** {@link https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2 Weather condition id} */
      id: number

      /** Group of weather parameters (Rain, Snow, Extreme etc.) */
      main: string

      /** Weather condition within the group ({@link https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2 full list of weather conditions}). Get the output in {@link https://openweathermap.org/api/one-call-api#multi your language} */
      description: string

      /** Weather icon id. {@link https://openweathermap.org/weather-conditions#How-to-get-icon-URL How to get icons} */
      icon: string
    }
  }>

  /** Daily forecast weather data API response */
  daily?: Array<{
    /** Time of the forecasted data, Unix, UTC */
    dt: number

    /** Sunrise time, Unix, UTC */
    sunrise: number

    /** Sunset time, Unix, UTC */
    sunset: number

    /** The time of when the moon rises for this day, Unix, UTC */
    moonrise: number

    /** The time of when the moon sets for this day, Unix, UTC */
    moonset: number

    /** Moon phase. `0` and `1` are 'new moon', `0.25` is 'first quarter moon', `0.5` is 'full moon' and `0.75` is 'last quarter moon'. The periods in between are called 'waxing crescent', 'waxing gibous', 'waning gibous', and 'waning crescent', respectively. */
    moon_phase: number

    /** Units – default: kelvin, metric: Celsius, imperial: Fahrenheit. {@link https://openweathermap.org/api/one-call-api#data How to change units used} */
    temp: {
      /** Morning temperature. */
      morn: number

      /** Day temperature. */
      day: number

      /** Evening temperature. */
      eve: number

      /** Night temperature. */
      night: number

      /** Min daily temperature. */
      min: number

      /** Max daily temperature. */
      max: number
    }

    /** This accounts for the human perception of weather. Units – default: kelvin, metric: Celsius, imperial: Fahrenheit. {@link https://openweathermap.org/api/one-call-api#data How to change units used} */
    feels_like: {
      /** Morning temperature. */
      morn: number

      /** Day temperature. */
      day: number

      /** Evening temperature. */
      eve: number

      /** Night temperature. */
      night: number
    }

    /** Atmospheric pressure on the sea level, hPa */
    pressure: number

    /** Humidity, % */
    humidity: number

    /** Atmospheric temperature (varying according to pressure and humidity) below which water droplets begin to condense and dew can form. Units – default: kelvin, metric: Celsius, imperial: Fahrenheit. */
    dew_point: number

    /** Wind speed. Units – default: metre/sec, metric: metre/sec, imperial: miles/hour. {@link https://openweathermap.org/api/one-call-api#data How to change units used} */
    wind_speed: number

    /** Wind gust. Units – default: metre/sec, metric: metre/sec, imperial: miles/hour. {@link https://openweathermap.org/api/one-call-api#data How to change units used} */
    wind_gust?: number

    /** Wind direction, degrees (meteorological) */
    wind_deg: number

    /** Cloudiness, % */
    clouds: number

    /** UV index */
    uvi: number

    /** Probability of precipitation */
    pop: number

    /** Precipitation volume, mm */
    rain?: number

    /** Snow volume, mm */
    snow?: number

    weather: {
      /** {@link https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2 Weather condition id} */
      id: number

      /** Group of weather parameters (Rain, Snow, Extreme etc.) */
      main: string

      /** Weather condition within the group ({@link https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2 full list of weather conditions}). Get the output in {@link https://openweathermap.org/api/one-call-api#multi your language} */
      description: string

      /** Weather icon id. {@link https://openweathermap.org/weather-conditions#How-to-get-icon-URL How to get icons} */
      icon: string
    }
  }>

  /** National weather alerts data from major national weather warning systems */
  alerts?: {
    /** Name of the alert source. Please read here the {@link https://openweathermap.org/api/one-call-api#listsource full list of alert sources} */
    sender_name: string

    /** Alert event name */
    event: string

    /** Date and time of the start of the alert, Unix, UTC */
    start: number

    /** Date and time of the end of the alert, Unix, UTC */
    end: number

    /** Description of the alert */
    description: number

    /** Type of severe weather */
    tags: string
  }
}
