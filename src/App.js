import React from 'react'

const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course.name}</h1>
    
  )}

const Part = (props) => {
  return (
    <div>{props.name} {props.exercises}</div>  
  
  )}

  const Content = (props) => {
    return (
      <Part name = {props.course.parts.map((part, i) => <p key={i}> {part.name} {part.exercises}</p>)}/>
      
  )}

const Total = (props) => {
  return (
    <p> Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
)}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
 
  return (
    <>
      <Header course = {course}/>
      <Content course = {course}/>
      <Total course = {course}/>
    </>
  )
}

export default App