import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    return(
        <button onClick={()=>props.setType(props.type+1)}>{props.text}</button> 
    )
}

const Statistic = (props) => {
    return (
        <tr><td>{props.text}</td><td>{props.type}</td></tr>
    )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + bad + neutral
  let average = 0
  if (all > 0){
    average = (good+(neutral*0)+(bad*(-1)))/all
  } else {
     average = 0
  }
  let positive = 0
  if (all > 0){
      positive = ((good/all)*100).toFixed(2) + '%'
  } else {
      positive = 0
  }
  if (all > 0){
  return (
    <div>
    <h1>Give Feedback</h1>
    <Button setType={setGood} type={good} text="Good"/><Button setType={setNeutral} type={neutral} text='Neutral'/><Button setType={setBad} type={bad} text="Bad"/>
    <table>
        <thead>
            <tr><th><h1>Statistics</h1></th></tr>
        </thead>
        <tbody>
        <Statistic type={good} text="Good" />
        <Statistic type={neutral} text="Neutral" />
        <Statistic type={bad} text="Bad" />
        <Statistic type={all} text="All" />
        <Statistic type={average} text="Average" />
        <Statistic type={positive} text="Positive" />
        </tbody>
    </table>
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