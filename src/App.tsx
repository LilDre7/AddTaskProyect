import './App.css'
import { useState } from 'react';
import logo from './assets/react.svg';

interface Props {
  title: number;
}

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

function App({title}: Props) {

  const [tasks, setTasks] = useState <Task[]>([
    {
      id: 1,
      title: "tarea",
      description: "Learn React",
      completed: true
    }
  ])



  return (
    <div className='bg-dark  text-white' style={{height: "100vh"}} >

      <nav className='navbar navbar-dark bg-primary' >
        <div className='container-fluid' >
          <a href="">
            <img src={logo} className="App-logo" alt="logo" width={40} height={40} /> 
          </a>
        </div>
      </nav>

      <h1>{title} </h1>  

      {
        tasks.map((task) => (
          <div key={task.id} className={task.completed ? "completed" : ""} >
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <p>{task.completed}</p>
            <hr/>
          </div>
        ) )
      }
    </div>
  )
}

export default App
