import axios from "axios"
import {NextPage} from "next"
import {useEffect, useState} from "react"

import Screen1 from "src/components/screens/Screen1"
import Screen2 from "src/components/screens/Screen2"
import Screen3 from "src/components/screens/Screen3"
import {WeatherContext, WeatherContextType} from "src/contexts/WeatherContext"

import styles from "./index.module.scss"

const Index: NextPage = () => {
  const [weather, setWeather] = useState<WeatherContextType | undefined>(undefined)
  // TODO: Get user's location
  const [city, setCity] = useState<string>(`Toronto`)
  const [lastUpdated, setLastUpdated] = useState<string>(``)

  useEffect(() => {
    // ;(async () => {
    //   const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/weather`, {
    //     params: {
    //       q: `${city}`,
    //       appId: process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY,
    //     },
    //   })
    //   console.log(data)
    //   setWeather(data)
    // })()

    const date: Date = new Date()
    const dateString = date.toLocaleTimeString(undefined, {
      hour: `2-digit`,
      minute: `2-digit`,
    })
    setLastUpdated(`Last updated: ${dateString}`)
  }, [city])

  return (
    <WeatherContext.Provider value={weather}>
      <div className={styles.app}>
        <Screen1 />
        <Screen2 />
        <Screen3 city={city} lastUpdated={lastUpdated} />
      </div>
    </WeatherContext.Provider>
  )
}

export default Index
