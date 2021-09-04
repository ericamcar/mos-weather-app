import {FC} from "react";

import styles from "../../pages/index.module.scss"

const WeeklyForecast: FC = () => {
  return (
    <div>
      <span className={styles[`heading-tertiary`]}>WeeklyForecast</span>
    </div>
  ) 
}

export default WeeklyForecast;