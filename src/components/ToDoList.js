import React from 'react'

const ToDoList = (props) => {
  return (
    <>
      {props.toDoList.map((task) => {
        return (
        <>
            <h3>{task.toDoItem}</h3><br />
            <h3>{task.dueDate}</h3><br />
        </>
        )})
      }
    </>
  )
}

export default ToDoList
