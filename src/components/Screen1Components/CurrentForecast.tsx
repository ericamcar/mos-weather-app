import {FC} from "react";

import styles from "../../pages/index.module.scss"

const CurrentForecast: FC = () => {
  return (
    <div>
      <h2 className={styles[`heading-secondary`]}>Today</h2>
      <h3 className={styles[`heading-tertiary`]}>Aug 8, 2021</h3>
      <h1 className={styles[`heading-secondary`]}>17</h1>
    </div>
  ) 
}

export default CurrentForecast;