import { useState } from 'react'

const AddTask = ({onAdd}) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();

    if(!text) {
      alert('Please add a task');
      return
    }
    
    onAdd({text, day, reminder});

    setText('');
    setDay('');
    setReminder(false);
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input 
          value={text} 
          onChange={(event)=> setText(event.target.value)} 
          type="text" placeholder="Add Task" />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input 
          value={day} 
          onChange={(event) => setDay(event.target.value) }
          type="text" 
          placeholder="Add Day" />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input 
          value={reminder} 
          checked={reminder}
          onChange={(event) => setReminder(event.currentTarget.value) } 
          type="checkbox" />
      </div>

      <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  )
}

export default AddTask