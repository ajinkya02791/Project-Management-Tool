import Column from './Column'
import { useTasks } from '../context/TaskContext'
import { type Task } from '../utility/interfaces.ts'
import List from './List.tsx';

function ToolBox() {

  const { tasks, viewMode} : any = useTasks();

    const todo = tasks.filter((task : Task) => task.status == "to-do");
    const in_progress = tasks.filter((task : Task) => task.status == "in-progress");
    const in_review = tasks.filter((task : Task) => task.status == "in-review");
    const done = tasks.filter((task : Task) => task.status == "done");

    // console.log(todo,in_progress,in_review,done);
    // console.log(viewMode);
  if(viewMode == "kaban")
  return (

    

    <div className=' md:flex md:justify-center md:gap-3 box-border w-screen m-5 h-screen'>
      
        <Column status="to-do" column={todo}/>
        <Column status="in-progress" column={in_progress}/>
        <Column status="in-review" column={in_review}/>
        <Column status="done" column={done}/>

    </div>
  )

  if(viewMode == "list") 
  return (
    <div className='m-1 p-1 flex flex-col items-center'>
      <div className='justify-around flex flex-row gap-5 m-1 p-1 w-7/8'>
        <h5><strong>Id</strong> </h5> 
        <h5><strong>Status </strong></h5> 
        <h5><strong>Title </strong></h5> 
        <h5><strong>Tag </strong></h5> 
        <h5><strong>Assigns </strong></h5> 
      </div>
      {tasks.map((k : Task) => (
        <List key={k.id} task={k} />
      ))}
    </div>
  )
}

export default ToolBox