import React from 'react'
import { FaTimes} from 'react-icons/fa'

const Task = ({currentTask, onDelete, onToggle}) => {
  return (
    <div 
      className={`task ${currentTask.reminder ? 'reminder': ''}`} 
      onDoubleClick={() => onToggle(currentTask.id)}
    >
      <h3>{currentTask.text}
        <FaTimes 
          onClick={() => onDelete(currentTask.id)} 
          style={{color: 'red', cursor: 'pointer'}}
        />
      </h3>
      <p>{currentTask.day}</p>
    </div>
  )
}

export default Task