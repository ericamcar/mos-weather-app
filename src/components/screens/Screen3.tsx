import React, {FC} from "react"

import PrecipitationMonthlyChart from "../Charts/PrecipitationMonthlyChart"
import PrecipitationWeeklyChart from "../Charts/PrecipitationWeeklyChart"

const Screen3: FC = () => {
  return (
    <div>
      <h2 className="heading-secondary">Precitipation</h2>
      <h3 className="heading-tertiary">This Week</h3>
      <PrecipitationWeeklyChart />
      <h3 className="heading-tertiary">This Month</h3>
      <PrecipitationMonthlyChart />
    </div>
  )
}

export default Screen3
