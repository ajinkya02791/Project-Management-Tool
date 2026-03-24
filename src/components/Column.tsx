import Card from './Card'
import { a } from '../utility/generateTasks.js'

const column = (props : any) => {

  const a1 = [...a];
  const status = props.status;
  const columnTask = a1.filter(task => task.status === status)
  console.log("columnTasks",columnTask);

  return (
    <div >
        <h3 className='font-bold md:text-center'>{status} <span className='bg-teal-300 rounded-full p-0.5'>{columnTask.length}</span></h3>
        <div className='mt-3 md:flex-col flex'>
        {columnTask.map((k,i)=> (
          <div key={i} className=''>
            <Card task={k}/>
            </div>))}
        </div>
    </div>
  )
}

export default column