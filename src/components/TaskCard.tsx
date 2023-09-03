import { Task } from "../interfaces/Task";

interface Props {
  tasks: Task;
  deleteATask: (id: number) => void;
}

const TaskCard = ({task , deleteATask}: Props) => {
  return (
    <div className="card card-body bg-secondary rounded-0 text-black" >
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>{task.completed}</p>
      <button className="btn btn-danger btn-sm" onClick={() => task.id && deleteATask(task.id as number)}>
        Delete Task
      </button>
    </div>
  )
}

export default TaskCard