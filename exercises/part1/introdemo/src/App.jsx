import { useState } from "react"
const App = () => {
  const [ counter, setCounter ] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)
  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text={"Plus"} />
      <Button onClick={decreaseByOne} text={"Minus"} />
      <Button onClick={setToZero} text={"Zero"} />
    </div>
  )
}

const Display = ({ counter }) => {
  return (
    <div>{counter}</div>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

export default App