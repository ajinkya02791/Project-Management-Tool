import type { Task } from "../utility/interfaces"


const List = (props : {task :Task}) => {
  console.log(props)
  return (
    <div className="flex justify-around p-1 gap-5 md:w-7/9  w-7/8 box-border border-b-black border-2 text-center">
        <h5>{props.task.id}</h5> 
        <h5>{props.task.status}</h5> 
        <h5>{props.task.title}</h5> 
        <h5>{props.task.tag}</h5> 
        <h5><span className="bg-orange-500 p-1 rounded-full">{props.task.assigns}</span></h5> 
    </div>
  )
}

export default List