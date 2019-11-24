import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    return(
        <button onClick={()=>props.setType(props.type+1)}>{props.text}</button> 
    )
}

const Statistic = (props) => {
    return (
    <p>{props.text} {props.type}</p>
    )
}
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
  if (all > 0){
  return (
  <div>
    <h1>Statistics</h1>
    <p>good {props.good}</p>
    <p>neutral {props.neutral}</p>
    <p>bad {props.bad}</p>
    <p>all {all}</p>
    <p>average {average}</p>
    <p>positive {positive}</p>    
  </div>
)} else {
      return (
      <div>
      <h1>Statistics</h1>
      <p>No statistics have been collected</p>
      </div>
      )
  }
}
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + bad + neutral
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
  if (all > 0){
  return (
    <div>
    <h1>Give Feedback</h1>
    <Button setType={setGood} type={good} text="Good"/><Button setType={setNeutral} type={neutral} text='Neutral'/><Button setType={setBad} type={bad} text="Bad"/>
    <h1>Statistics</h1>
    <Statistic type={all} text="All" />
    <Statistic type={average} text="Average" />
    <Statistic type={positive} text="Positive" />
    </div>
    )
    } else {
    return (
    <div>
    <h1>Give Feedback</h1>
    <Button setType={setGood} type={good} text="Good"/><Button setType={setNeutral} type={neutral} text='Neutral'/><Button setType={setBad} type={bad} text="Bad"/>
    <h1>Statistics</h1>
    <p>No statistics have been collected</p>
    </div>
      )
  }
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)