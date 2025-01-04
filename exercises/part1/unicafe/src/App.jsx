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
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positivePercent} %</p>
    </div>
  )
}

export default App
