import React, {FC} from "react"

import styles from "./ScreenLayout.module.scss"

const ScreenLayout: FC = ({children}) => {
  return <div className={styles.layout}>{children}</div>
}

export default ScreenLayout
