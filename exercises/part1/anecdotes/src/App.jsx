import { useState } from 'react'

const App = () => {
  const [ votes, setVotes ] = useState(new Array(8).fill(0))
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const handleClick = () => {
    const randomInt = Math.floor(Math.random() * 8)
    setSelected(randomInt)
  }
  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]} has {votes[selected]} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleClick}>next anecdote</button>
      <div>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[maxVotesIndex(votes)[0]]} has {maxVotesIndex(votes)[1]} votes</p>
      </div>
    </div>
  )
}

export default App

const maxVotesIndex = (arr) => {
  let index = 0
  let maxVotes = arr[0]
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > maxVotes) {
      maxVotes = arr[i]
      index = i
    }
  }
  return [index, maxVotes]
}
