import { createContext, useContext, useReducer, useState, type DragEvent } from 'react'
import { type Task , type TaskContextType } from '../utility/interfaces.js'
import { generateTasks } from '../utility/generateTasks.js'



const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const useTasks = () => {
    const context = useContext(TaskContext);

    if(!context) {
        throw new Error("useTasks must be ussed within TaskProvider ")
    }

    return context;
}

export const TaskProvider = ({children} : any) => {

   

    interface columns {
        [key : string] : Task[]
    }

//     const cloumn_0 : columns = {
//     'to-do' : a.filter(k => k.status == "to-do"),
//     'in-progress' : a.filter(k => k.status == "in-progress"),
//     'in-review' : a.filter(k => k.status == "in-review"),
//     'done' : a.filter(k => k.status == "done")
//   }

//   function reducer (state: columns, action) {
//     switch(action.type){
//         case "Dragging" :    {
            
//         }
//     }
//   }


//   const [columns , setColumns] = useReducer(reducer, cloumn_0);
  const [tasks , setTasks ]  = useState(() => generateTasks(5));

  const onDragStart = (event : DragEvent, taskId : number , fromColumn : string) => {

    event.dataTransfer.setData("taskId", taskId.toString());
    event.dataTransfer.setData("fromColumn", fromColumn);
  }

  const onDragOver = (event : DragEvent) => event.preventDefault();

  const onDrop = (event : DragEvent, toColumn : string) => {
    const task = event.dataTransfer.getData("taskId");
    const fromColumn = event.dataTransfer.getData("fromColumn");
    
    console.log("k1", task);

    if(fromColumn === toColumn) return;

    setTasks(prev => {
       const currentTask = prev.map(k => {
        if(k.id.toString() === task){
            return { ...k, status :  toColumn} 
        }
        return k;
       })

       console.log("prev" , prev);
       console.log("currentTask" , currentTask);
       

       return currentTask;
    })
    
  }


    return (
        <TaskContext.Provider value={{ tasks , onDragStart, onDragOver, onDrop}} >
            {children}
        </TaskContext.Provider>
    )
}