import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  let average = 0
  if (all > 0){
    average = props.good+(props.neutral*0)+(props.bad*(-1))/all
  } else {
     average = 0
  }
  let positive = 0
  if (all > 0){
      positive = props.good/all
  } else {
      positive = 0
  }
  return (
  <div>
    <p>all {all}</p>
    <p>average {average}</p>
    <p>positive {positive}</p>    
  </div>
)
}
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
    <h1>Give Feedback</h1>
    <button onClick={()=>setGood(good+1)}>Good</button><button onClick={()=>setNeutral(neutral+1)}>Neutral</button><button onClick={()=>setBad(bad+1)}>Bad</button>
    <h1>Statistics</h1>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
    <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)