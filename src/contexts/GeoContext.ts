import React, {useContext} from "react"
import {GeocodingApiResponse} from "src/types/geocodingApi"

export const GeoContext = React.createContext<GeocodingApiResponse | undefined>(undefined)

export function usegeo() {
  const geo = useContext(GeoContext)
  return geo
}
