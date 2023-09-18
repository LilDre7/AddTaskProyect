import { useState, ChangeEvent, FormEvent } from 'react'
import { TbPencilPlus } from 'react-icons/tb'
import { Task } from '../interfaces/Task'

interface Props {
  addANewTask: (task: Task) => void
}

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

const initialState = {
  title: '',
  description: '',
}

const TaskForm = ({ addANewTask }: Props) => {
  const [task, setTask] = useState(initialState)

  const handleInputChange = ({
    target: { name, value },
  }: HandleInputChange) => {
    setTask({ ...task, [name]: value })
  }

  const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addANewTask(task)
    setTask(initialState)
  }

  return (
    <div className="card card-body bg-secondary text-dark">
      <h2>Add Task Here 📖 </h2>
      <form action="" onSubmit={handleNewTask}>
        <input
          type="text"
          placeholder="Write a title"
          name="title"
          className="form-control mb-3 rounded-0 shadow-none"
          onChange={handleInputChange}
          value={task.title}
        />

        <textarea
          name="description"
          rows={2}
          placeholder="Write a Description"
          className="form-control mb-3 shadow-none border-6"
          onChange={handleInputChange}
          value={task.description}
        ></textarea>

        <button className="btn btn-primary mb-3 rounded-0 shadow-none border-6">
          Add Task
          <TbPencilPlus />
        </button>
        <p>{}</p>
      </form>
    </div>
  )
}

export default TaskForm
