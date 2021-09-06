import axios from "axios"
import dateFormat from "dateformat"
import {NextPage} from "next"
import React, {useEffect, useState} from "react"

import Screen1 from "src/components/screens/Screen1"
import Screen2 from "src/components/screens/Screen2"
import Screen3 from "src/components/screens/Screen3"
import {WeatherContext, WeatherContextType} from "src/contexts/WeatherContext"

import styles from "./index.module.scss"

const Index: NextPage = () => {
  const [weather, setWeather] = useState<WeatherContextType | undefined>(undefined)

  useEffect(() => {
    ;(async () => {
      let location = [45.4998961, -73.5437195] // Habitat 67 in Montreal :)

      navigator.geolocation.getCurrentPosition(async (position) => {
        location = [position.coords.latitude, position.coords.longitude]

        const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/weather`, {
          params: {
            lat: location[0],
            lon: location[1],
            appId: process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY,
          },
        })
        setWeather(data)
      })
    })()
  }, [])

  return (
    <WeatherContext.Provider value={weather}>
      <div className={styles.app}>
        <div className={styles.header}>
          <span style={{fontSize: `0.8rem`, opacity: 0.7}}>
            Last updated at {weather && dateFormat(weather.dt * 1000, `shortTime`)}
          </span>
          <h1>{weather?.name}</h1>
        </div>
        <div className={styles[`screen-container`]}>
          <Screen1 />
          <Screen2 />
          <Screen3 />
        </div>
      </div>
    </WeatherContext.Provider>
  )
}

export default Index
