import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(Math.floor(Math.random() * 6))
  const [votes, setVotes] = useState([0,0,0,0,0,0])
  const copy = [ ...votes ]
  const increase =()=> {
    copy[selected]+=1
    setVotes(copy)}
  return (
    <div>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={()=>setSelected(Math.floor(Math.random() * 6))}>next anecdote</button>
      <button onClick={increase}>vote</button>
      <h1>Anecdote with the most votes:</h1>
     <p>{props.anecdotes[votes.indexOf(Math.max(...votes))]}</p>
    <p>{console.log(votes.indexOf(Math.max(...votes)))}</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)