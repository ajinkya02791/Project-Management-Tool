import type { Task } from '../utility/interfaces.ts';
import Card from './Card'
import { useTasks } from '../context/TaskContext'

const column = (props : any) => {

  const status = props.status;
  // console.log("stattus", status)
  const column = props.column;

  const { onDragStart , onDragOver, onDrop } = useTasks();


  // console.log("columnTasks",Array.isArray(status));

  return (
    <div className='h-auto'>
        <h3 className='font-bold md:text-center'>{status} 
          <span className='bg-teal-300 rounded-full m-1 p-1'>{column.length}</span>
        </h3>
        <div className='overflow-y-scroll h-screen'>
        <div className='mt-3 md:flex-col items-center flex md:h-auto md:min-h-screen md:w-43 h-41 bg-gray-600 rounded-2xl' onDrop={(e) => onDrop(e, status)} onDragOver={onDragOver} >
        {column && column.map((k: Task)=> (
            <Card key={k.id} task={k} onDragStart={onDragStart}  />
          ))}

        </div>
        </div>
    </div>
  )
}

export default column