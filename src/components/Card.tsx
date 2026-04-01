import type { Task } from "../utility/interfaces";


const Card = (props:{task : Task, onDragStart : Function}) => {

// console.log("props", props);

  return (
    <div draggable onDragStart={(e) => props.onDragStart(e, props.task.id, props.task.status)} className="h-43 w-38 bg-blue-500 border-3 rounded-2xl p-1 m-1 flex flex-col ">
      <>
      <h3><strong>Id : {props.task.id}</strong></h3>
      <h3 className="mt-1">{props.task.title}</h3>
      <h5>Status : {props.task.status} </h5>
      <h5><strong>Tag : {props.task.tag}</strong></h5>
      <h5>Assignes : <span className="p-1 bg-orange-500 rounded-full">{props.task.assigns}</span></h5>
      </>
    </div>
  )
}

export default Card