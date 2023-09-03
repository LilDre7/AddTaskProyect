import { Task } from '../interfaces/Task'
import TaskCard from './TaskCard'
;('../interfaces/Task.ts')

interface Props {
  tasks: Task[]
  deleteATask: (id: number) => void;
}

const TaskList = ({ tasks  , deleteATask}: Props) => {
  return (
    <>
      {tasks.map(task => (
        <div key={task.id} className={task.completed ? 'completed' : ''}>
          <div
            className="col-md-4 pb-2"
          >
            <TaskCard task={task} deleteATask={deleteATask} />
          </div>
          <hr />
        </div>
      ))}
    </>
  )
}

export default TaskList