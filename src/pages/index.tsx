import {NextPage} from "next"

import Screen1 from "src/components/screens/Screen1"
import Screen2 from "src/components/screens/Screen2"
import Screen3 from "src/components/screens/Screen3"

import styles from "./index.module.scss"

const Index: NextPage = () => {
  return (
    <div className={styles.app}>
      <Screen1 />
      <Screen2 />
      <Screen3 />
    </div>
  )
}

export default Index
