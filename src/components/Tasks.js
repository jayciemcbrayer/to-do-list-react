import React from 'react'
import Task from './Task'

const Tasks = ({tasks, onDelete, onToggle}) => {
  return (
    <>
      {tasks.map((task) => 
        <Task 
          currentTask={task} 
          onDelete={onDelete} 
          onToggle={onToggle}
        />
      )}
    </>
  )
}

export default Tasks
