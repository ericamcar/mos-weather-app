import {FC} from "react";

import styles from "../../pages/index.module.scss"

const TodayForecast: FC = () => {
  return (
    <div>
      <div className={styles[`heading-tertiary`]}>TodayForecast</div> 
    </div>
  ) 
}

export default TodayForecast;