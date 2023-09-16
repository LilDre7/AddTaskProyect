import { Task } from '../interfaces/Task'

interface Props {
  tasks: Task
  deleteATask: (id: number) => void
}

const TaskCard = ({ tasks, deleteATask }: Props) => {
  return (
    <div
      className="card card-body bg-secondary rounded-0 text-black"
      style={{ display: 'flex' }}
    >
      <h1>{tasks.title}</h1>
      <p>{tasks.description}</p>
      <p>{tasks.completed}</p>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => tasks.id && deleteATask(tasks.id as number)}
      >
        Delete Task
      </button>
    </div>
  )
}

export default TaskCard
