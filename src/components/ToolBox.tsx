import Column from './Column'
import { useTasks } from '../context/TaskContext'
import { type Task} from '../utility/interfaces.ts'

function ToolBox() {

  const { tasks} : any = useTasks();

  // console.log("columns", columns);
  // useEffect(() => {
  //   setColumns(prev => {
  //     return {
  //     ...prev,
  //     'to-do' : a.filter(k => k.status == "to-do"),
  //     'in-progress' : a.filter(k => k.status == "in-progress"),
  //     'in-review' : a.filter(k => k.status == "in-review"),
  //     'done' : a.filter(k => k.status == "done")
  //     }

  //   })
  // }, [a])

    const todo = tasks.filter((task : Task) => task.status == "to-do");
    const in_progress = tasks.filter((task : Task) => task.status == "in-progress");
    const in_review = tasks.filter((task : Task) => task.status == "in-review");
    const done = tasks.filter((task : Task) => task.status == "done");

    // console.log(todo,in_progress,in_review,done);
    

  return (
    <div className=' md:flex md:justify-center md:gap-3 box-border w-screen m-5 h-screen'>
      
        <Column status="to-do" column={todo}/>

        <Column status="in-progress" column={in_progress}/>
  
        <Column status="in-review" column={in_review}/>
  
        <Column status="done" column={done}/>

    </div>
  )
}

export default ToolBox