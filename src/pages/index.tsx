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

  useEffect(() => {
    ;(async () => {
      const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/weather`, {
        params: {
          q: `Toronto`,
          appId: process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY,
        },
      })
      console.log(data)
      setWeather(data)
    })()
  }, [])

  return (
    <WeatherContext.Provider value={weather}>
      <div className={styles.app}>
        <Screen1 />
        <Screen2 />
        <Screen3 />
      </div>
    </WeatherContext.Provider>
  )
}

export default Index
