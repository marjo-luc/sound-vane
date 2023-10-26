import React, { useState } from "react"
import { Header } from "./components/Header"
import { MapBox } from "./components/Map"
import { Crosshair } from "./components/Crosshair"
import { LngLatLike } from "mapbox-gl"
import { MainMenu } from "./components/Menus"
import { About } from "./components/About"

export const App = () => {
  const [lnglat, setLngLat] = useState<LngLatLike>({ lng: -70.9, lat: 42.35 })
  const [aqi, setAQI] = useState()

  const [userHasInteracted, setUserHasInteracted] = useState(false)
  const [toggleAbout, setToggleAbout] = useState(true)

  return (
    <>
      <Header />
      {toggleAbout && (
        <About
          toggleAbout
          setToggleAbout={setToggleAbout}
          setUserHasInteracted={setUserHasInteracted}
        />
      )}
      <MapBox
        lnglat={lnglat}
        setLngLat={setLngLat}
        setAQI={setAQI}
        userHasInteracted={userHasInteracted}
      />
      <MainMenu lnglat={lnglat} aqi={aqi} />
      <Crosshair />
    </>
  )
}

export default App
