import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  let average = 0
  if (all > 0){
    average = good+(neutral*0)+(bad*(-1))/all
  } else {
     average = 0
  }
  let positive = 0
  if (all > 0){
      positive = good/all
  } else {
      positive = 0
  }
  return (
    <div>
    <h1>Give Feedback</h1>
    <button onClick={()=>setGood(good+1)}>Good</button><button onClick={()=>setNeutral(neutral+1)}>Neutral</button><button onClick={()=>setBad(bad+1)}>Bad</button>
    <h1>Statistics</h1>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
    <p>all {all}</p>
    <p>average {average}</p>
    <p>positive {positive}</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)