import { useEffect, useState } from "react"
import Quote from "./components/Quote"

function App() {
  const colors = ['#85BDBF', '#5FBB97', '#B3C2F2', '#BB9BB0', '#CCBCBC', '#A288A6']

  const [selectedColor, setSelectedColor] = useState(colors[0])

  const changeColor = () => {
    const newColor = colors[Math.floor(Math.random() * colors.length)]
    setSelectedColor(newColor)
    console.log(newColor)
  }
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center " style={{backgroundColor: selectedColor}}>
      <Quote color={selectedColor} changeColor={changeColor} />
    </div>
  )
}

export default App
