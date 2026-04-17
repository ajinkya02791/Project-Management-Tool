import Column from './Column'
import { useTasks } from '../context/TaskContext'
import { type Task } from '../utility/interfaces.ts'
import List from './List.tsx';

function ToolBox() {

  const { tasks, viewMode, setScrollTop , scrollTop , taskCount } : any = useTasks();

  const listTaskHeight = 40;
  const Buffer = 3;
  const containerHeight = 508;
  
  // Task arrays in Kaban View Mode 
  const todo = tasks.filter((task : Task) => task.status == "to-do");
  const in_progress = tasks.filter((task : Task) => task.status == "in-progress");
  const in_review = tasks.filter((task : Task) => task.status == "in-review");
  const done = tasks.filter((task : Task) => task.status == "done");
  
  
  const a = Math.floor(scrollTop/listTaskHeight) - Buffer;
  console.log("a", a)
  // start index and end index in virtualized list 
  console.log("scrollTop", scrollTop);
  const startIndex = Math.max(0, a);
  const endIndex = Math.min(Math.floor(scrollTop + containerHeight)/listTaskHeight + Buffer, taskCount  );
  
  const offsetY = startIndex * listTaskHeight;

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
    <div className='m-1 p-1 flex flex-col h-127 items-center'>
      <div className='justify-around flex flex-row gap-5 m-1 p-1 w-7/8'>
        <h5><strong>Id</strong> </h5> 
        <h5><strong>Status </strong></h5> 
        <h5><strong>Title </strong></h5> 
        <h5><strong>Tag </strong></h5> 
        <h5><strong>Assigns </strong></h5> 
      </div>
      <div className='overflow-y-auto items-center flex flex-col  p-1 w-full'
            onScroll={(e)=> setScrollTop(e.currentTarget.scrollTop)}
          
      >
      <div className='flex flex-col w-full items-center' style={{ height : `${ taskCount * listTaskHeight}px`}}>
        <div className='flex flex-col w-full items-center' style={{ transform: `translateY(${offsetY}px)`}} >

        {tasks.slice(startIndex, endIndex + 1).map((task : Task, i : number) => {
          // console.log(tasks.length);
          
            return <List key={task.id} task={task} />
          }

       )}
        </div>
      </div>
  </div>
    </div>
  )
}

export default ToolBox