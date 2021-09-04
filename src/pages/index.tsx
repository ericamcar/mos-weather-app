import axios from "axios"
import {NextPage} from "next"
import React, {useEffect, useState} from "react"

import Screen1 from "src/components/screens/Screen1"
import Screen2 from "src/components/screens/Screen2"
import Screen3 from "src/components/screens/Screen3"
import {WeatherContext, WeatherContextType} from "src/contexts/WeatherContext"

import styles from "./index.module.scss"

const Index: NextPage = () => {
  const [weather, setWeather] = useState<WeatherContextType | undefined>(undefined)
  const [lastUpdated, setLastUpdated] = useState<string>(``)

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

        const date: Date = new Date()
        const dateString = date.toLocaleTimeString(undefined, {
          hour: `2-digit`,
          minute: `2-digit`,
        })
        setLastUpdated(`Last updated: ${dateString}`)
      })
    })()
  }, [])

  return (
    <WeatherContext.Provider value={weather}>
      <div className={styles.app}>
        <div>
          <h4 className="heading-quaternary">{lastUpdated}</h4>
          <h1 className="heading-primary">{weather?.name}</h1>
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
