import './App.css'
import { useState } from 'react'
import Navbar from './components/Navbar'
import { Task } from './interfaces/Task'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

interface Props {
  title?: string
}

function App({ title }: Props) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'tarea',
      description: 'Learn React',
      completed: true,
    },
  ])

  const addANewTask = (task: Task) =>
    setTasks([
      ...tasks,
      { ...task, id: Math.random() * 1000, completed: false },
    ])

  const deleteATask = (id: number) =>
    setTasks(tasks.filter(task => task.id !== id))

  return (
    <div className="bg-dark  text-white" style={{ height: '100vh' }}>
      <Navbar />
      <h1>{title || ''}</h1>

      <main className="container p-4 ">
        <div className="row">
          <div className="col-md-4" style={{ margin: 'auto', padding: '10px' }}>
            <TaskForm addANewTask={addANewTask} />
          </div>
          <div className="col-md-8" style={{ margin: 'auto' }}>
            <div className="row">
              <TaskList tasks={tasks} deleteATask={deleteATask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
