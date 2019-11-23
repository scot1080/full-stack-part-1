import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return(
    <div>
        <h1>{props.course}</h1>
    </div>
    )
}

const Part = (props) => {
    return(
    <p>{props.part} {props.exercise}</p>
    )
}
const Content = (props) => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
 
    return(
    <div>
        <Part part={part1} exercise={exercises1}/>
        <Part part={part2} exercise={exercises2}/>
        <Part part={part3} exercise={exercises3}/>
    </div>
    )
}

const Total = (props) => {
    return(
        <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))