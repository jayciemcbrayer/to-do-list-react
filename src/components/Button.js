import React from 'react'

const Button = ({color, text, onAdd}) => {
  return <button onClick={onAdd} style={{backgroundColor: color, color: 'white'}} className="btn">{text}</button>  
}

export default Button