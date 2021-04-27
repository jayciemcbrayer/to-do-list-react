import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
import AddTask from './components/AddTask'
// Use state is a hook

function App() {
  let [showAddTask, setShowAddTask] = useState(false);
  let [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: "Take over the world",
        day: 'Tuesday @ 2:00',
        reminder: false
      },
      {
        id: 2,
        text: "Master React",
        day: 'Thursday @ 4:00',
        reminder: false
      },
      {
        id: 3,
        text: "Create Oppurtunites",
        day: 'Thursday @ 4:00',
        reminder: false
      }
    ]
  )

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id 
      ? { ...task, reminder: !task.reminder}
      : task ))
  }

  return (
    <div className="container">
      
      <Header 
        title="To Do List" 
        onAdd={()=> setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      { showAddTask && <AddTask onAdd={addTask}/>}
      {
        tasks.length > 0 ? 
        <Tasks 
          tasks={tasks} 
          onDelete={deleteTask}
          onToggle={toggleReminder}
        /> : 
        'no task to show' 
      }
    </div>
  );
}

export default App;