import './App.css';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import { useState } from 'react';


function App() {
  const [toDoList, setToDoList] = useState(
    [
    {
      id: 1,
      toDoItem: "Study React for 1 hour",
      dueDate: "daily",
      complete: false

    },
    {
      id: 2,
      toDoItem: "Meal Prep",
      dueDate: "4/25/21",
      complete: false

    },
    {
      id: 3,
      toDoItem: "Work on Portfolio Site",
      dueDate: "daily",
      complete: false

    }
    ]
  )
  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList}/>
    </div>
  );
}

export default App;
