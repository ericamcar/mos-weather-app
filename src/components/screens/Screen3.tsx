import React, {FC} from "react"

import ScreenLayout from "src/components/screens/ScreenLayout"

import styles from "../../pages/index.module.scss"
import PrecipitationMonthlyChart from "../Charts/PrecipitationMonthlyChart"
import PrecipitationWeeklyChart from "../Charts/PrecipitationWeeklyChart"

const Screen3: FC<{city: string; lastUpdated: string}> = ({city, lastUpdated}) => {
  return (
    <ScreenLayout>
      <h4 className={styles[`heading-quaternary`]}>{lastUpdated}</h4>
      <h1 className={styles[`heading-primary`]}>{city}</h1>
      <h2 className={styles[`heading-secondary`]}>Precitipation</h2>
      <h3 className={styles[`heading-tertiary`]}>This Week</h3>
      <PrecipitationWeeklyChart />
      <h3 className={styles[`heading-tertiary`]}>This Month</h3>
      <PrecipitationMonthlyChart />
    </ScreenLayout>
  )
}

export default Screen3
