import Head from "next/head"
import React, {useEffect} from "react"

import type {AppProps} from "next/app"

import "./_app.css"

function MyApp({Component, pageProps}: AppProps) {
  useEffect(() => {
    function setPageDims() {
      // `100vh`/`100vw` gives the dimensions of the full browser viewport, including browser chrome on mobile and
      // scrollbars. To counteract this, we use our own custom properties, `--screen-width` and `--screen-height`. By
      // default, these are set to `100vw` and `100vh` as a fallback as the page loads. Once this component loads, we
      // set it to the width/height we actually want.
      document.body.style.setProperty(`--screen-height`, `${document.documentElement.clientHeight}px`)
      document.body.style.setProperty(`--screen-width`, `${document.documentElement.clientWidth}px`)
    }
    setPageDims()

    window.addEventListener(`resize`, setPageDims)

    return () => {
      window.removeEventListener(`resize`, setPageDims)
    }
  })

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
