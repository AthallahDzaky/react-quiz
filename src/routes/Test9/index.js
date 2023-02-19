import { useState } from "react";
import Solar from "./Solar";

const Test9 = () => {
  const colorList = ["silver", "gray", "maroon", "red", "purple", "fuchsia", "green", "lime", "olive", "navy", "blue", "teal", "aqua"]
  const [numberOfPlanet, setNumberOfPlanet] = useState(0)
  const [listOfPlanet, setListOfPlanet] = useState([])
  const handleOnChangeNumberPlanet = (event) => {
    setNumberOfPlanet(event.target.value)
    setListOfPlanet(listOfPlanet => [])
    for (let index = 1; index <= event.target.value; index++) {
      setListOfPlanet(listOfPlanet => [...listOfPlanet, colorList[((index % colorList.length))]])
    }
  }

  return (
    <>
      <ul>
        <li>Make a solar system</li>
        <li>Number of planets must revolves around the sun</li>
        <li>The color of each planet must be unique</li>
        <li>More far the planet = more time it's revolves</li>
      </ul>
      <input type="number" placeholder="number of planet" value={numberOfPlanet} onChange={handleOnChangeNumberPlanet}/>
      <Solar
        numOfPlanet={numberOfPlanet}
        listOfPlanet={listOfPlanet}
      />
    </>
  )
}

export default Test9;