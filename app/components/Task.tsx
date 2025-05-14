import { ITask } from '@/types/tasks'
import React from 'react'

interface TaskProps {
    task:ITask
}

const Task:  React.FC<TaskProps> = ({task}) => {
  return (
    <div>
        <tr key={task.id}>
              <td>{task.text}</td>
              <td>blue</td>
            </tr>
    </div>
  )
}

export default Task
