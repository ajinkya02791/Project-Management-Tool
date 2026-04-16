import Column from './Column'
import { useTasks } from '../context/TaskContext'
import { type Task } from '../utility/interfaces.ts'
import List from './List.tsx';

function ToolBox() {

  const { tasks, viewMode, setScrollTop , scrollTop} : any = useTasks();

  const listTaskHeight = 56;
  const Buffer = 5;
  const containerHeight = 493;

    // Task arrays in Kaban View Mode 
    const todo = tasks.filter((task : Task) => task.status == "to-do");
    const in_progress = tasks.filter((task : Task) => task.status == "in-progress");
    const in_review = tasks.filter((task : Task) => task.status == "in-review");
    const done = tasks.filter((task : Task) => task.status == "done");



    // start index and end index in virtualized list 
    const startIndex = Math.max(0, Math.floor(scrollTop/listTaskHeight - Buffer));
    const endIndex = Math.min(Math.floor((scrollTop + containerHeight)/listTaskHeight + Buffer), 19  );
 

    // console.log(startIndex, endIndex);
 

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
    <div className='m-1 p-1 flex flex-col h-screen items-center'>
      <div className='justify-around flex flex-row gap-5 m-1 p-1 w-7/8'>
        <h5><strong>Id</strong> </h5> 
        <h5><strong>Status </strong></h5> 
        <h5><strong>Title </strong></h5> 
        <h5><strong>Tag </strong></h5> 
        <h5><strong>Assigns </strong></h5> 
      </div>
      <div className='overflow-y-scroll items-center flex flex-col gap-5  m-1 p-1 w-full'
            onScroll={(e)=> setScrollTop(e.currentTarget.scrollTop)}
          
      >
        <div className='flex flex-col gap-5 w-full items-center' style={{height : (21 * listTaskHeight)}}>

        {tasks.map((task : Task, i : number) => {

          if(startIndex <= i && i <= endIndex ) {

            return <List key={task.id} task={task} />
          }

      } )}
        </div>
      </div>
    </div>
  )
}

export default ToolBox