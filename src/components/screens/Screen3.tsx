import {FC} from "react"

import ScreenLayout from "src/components/screens/ScreenLayout"

const Screen3: FC<{city: string; lastUpdated: string}> = ({city, lastUpdated}) => {
  return (
    <ScreenLayout>
      <h4>{lastUpdated}</h4>
      <h1>{city}</h1>
    </ScreenLayout>
  )
}

export default Screen3
