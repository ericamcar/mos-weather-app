import axios from "axios"
import dateFormat from "dateformat"
import {NextPage} from "next"
import React, {useEffect, useState} from "react"

import Screen1 from "src/components/screens/Screen1"
import Screen2 from "src/components/screens/Screen2"
import Screen3 from "src/components/screens/Screen3"
import {GeoContext} from "src/contexts/GeoContext"
import {WeatherContext} from "src/contexts/WeatherContext"
import {GeocodingApiResponse} from "src/types/geocodingApi"
import {GeocodingReverseApiRequest} from "src/types/geocodingReverseApi"
import {OneCallApiRequest, OneCallApiResponse} from "src/types/oneCallApi"

import styles from "./index.module.scss"

const Index: NextPage = () => {
  const [weather, setWeather] = useState<OneCallApiResponse | undefined>(undefined)
  const [geo, setGeo] = useState<GeocodingApiResponse | undefined>(undefined)

  useEffect(() => {
    ;(async () => {
      let location = [45.4998961, -73.5437195] // Default location, Habitat 67 in Montreal :)

      navigator.geolocation.getCurrentPosition(async (position) => {
        location = [position.coords.latitude, position.coords.longitude]

        if (!process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY)
          throw new Error(
            `Couldn't find environment variable \`NEXT_PUBLIC_OPEN_WEATHER_API_KEY\`. Did you forget to make your own copy of .env.template?`,
          )

        {
          // Get weather info
          const params: OneCallApiRequest = {
            lat: location[0],
            lon: location[1],
            appid: process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY,
          }

          const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/onecall`, {
            params,
          })
          setWeather(data)
        }

        // Get geo info
        {
          const params: GeocodingReverseApiRequest = {
            lat: location[0],
            lon: location[1],
            appid: process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY,
          }

          const {data} = await axios.get(`http://api.openweathermap.org/geo/1.0/reverse`, {
            params,
          })
          setGeo(data)
        }
      })
    })()
  }, [])

  useEffect(() => {
    if (!weather) return

    if (Date.now() / 1000 > weather.current!.sunrise && Date.now() / 1000 < weather.current!.sunset) {
      if (weather.current!.clouds > 30) {
        document.body.style.setProperty(`--gradient-top`, `#aaa`)
        document.body.style.setProperty(`--gradient-bottom`, `#ddd`)
        document.body.style.setProperty(`--text-color`, `black`)
      } else {
        document.body.style.setProperty(`--gradient-top`, `#F8E6A8`)
        document.body.style.setProperty(`--gradient-bottom`, `white`)
        document.body.style.setProperty(`--text-color`, `black`)
      }
    } else {
      document.body.style.setProperty(`--gradient-top`, `#0B1213`)
      document.body.style.setProperty(`--gradient-bottom`, `#759594`)
      document.body.style.setProperty(`--text-color`, `white`)
    }
  }, [weather])

  return (
    <WeatherContext.Provider value={weather}>
      <GeoContext.Provider value={geo}>
        <div className={styles.app}>
          <div className={styles.header}>
            <span style={{fontSize: `0.8rem`, opacity: 0.7}}>
              Last updated at {weather && dateFormat(weather.current!.dt * 1000, `shortTime`)}
            </span>
            <h1>{geo?.[0].name}</h1>
          </div>
          <div className={styles[`screen-container`]}>
            <Screen1 />
            <Screen2 />
            <Screen3 />
          </div>
        </div>
      </GeoContext.Provider>
    </WeatherContext.Provider>
  )
}

export default Index
