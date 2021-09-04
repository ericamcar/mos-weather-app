import {FC} from "react"

import ScreenLayout from "src/components/screens/ScreenLayout"

import PrecipitationMonthlyChart from "../Charts/PrecipitationMonthlyChart"
import PrecipitationWeeklyChart from "../Charts/PrecipitationWeeklyChart"

const Screen3: FC<{city: string; lastUpdated: string}> = ({city, lastUpdated}) => {
  return (
    <ScreenLayout>
      <h4>{lastUpdated}</h4>
      <h1>{city}</h1>
      <h2>Precitipation</h2>
      <h3>This Week</h3>
      <PrecipitationWeeklyChart />
      <h4>This Month</h4>
      <PrecipitationMonthlyChart />
    </ScreenLayout>
  )
}

export default Screen3
