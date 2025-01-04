import { useState } from "react"

function App() {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)
  const [ total, setTotal ] = useState(0)
  const [ average, setAverage ] = useState(0)
  const [ positivePercent, setPositivePercent ] = useState(0)

  const handleGoodClick = () => {
    const updatedGoodReviews = good + 1
    const updatedTotal = total + 1
    setGood(updatedGoodReviews)
    setTotal(updatedTotal)
    setAverage((updatedGoodReviews * 1 + bad * (-1)) / updatedTotal)
    setPositivePercent(updatedGoodReviews * 100 / updatedTotal)
  }

  const handleNeutralClick = () => {
    const updatedNeutralReviews = neutral + 1
    const updatedTotal = total + 1
    setNeutral(updatedNeutralReviews)
    setTotal(updatedTotal)
    setAverage((good * 1 + bad * (-1)) / updatedTotal)
    setPositivePercent(good * 100 / updatedTotal)
  }

  const handleBadClick = () => {
    const updatedBadReviews = bad + 1
    const updatedTotal = total + 1
    setBad(updatedBadReviews)
    setTotal(updatedTotal)
    setAverage((good * 1 + updatedBadReviews * (-1)) / updatedTotal)
    setPositivePercent(good * 100 / updatedTotal)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text={"good"} onClick={handleGoodClick} />
      <Button text={"neutral"} onClick={handleNeutralClick} />
      <Button text={"bad"} onClick={handleBadClick} />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positivePercent} />
    </div>
  )
}

const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  if(total == 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticsLine text={"good"} value={good} />
        <StatisticsLine text={"neutral"} value={neutral} />
        <StatisticsLine text={"bad"} value={bad} />
        <StatisticsLine text={"all"} value={total} />
        <StatisticsLine text={"average"} value={average} />
        <StatisticsLine text={"postivie"} value={`${positive} %`} />
      </tbody>
    </table>
  )
}

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

export default App
