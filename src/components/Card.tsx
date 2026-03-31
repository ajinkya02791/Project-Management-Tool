

const Card = (props:any) => {

// console.log("props", props.onDragStart);
  return (
    <div draggable onDragStart={(e) => props.onDragStart(e, props.task.id, props.task.status)} className="h-38 w-32 bg-blue-500 border-3 rounded-2xl p-1 m-1 flex flex-col">
      <>
      <h3>{props.task.id}</h3>
      <h3 className="mt-1">{props.task.title}</h3>
      <h5>Status : {props.task.status} </h5>
      </>
    </div>
  )
}

export default Card