import './App.css'
import ToolBox from './components/ToolBox'
import { useTasks } from './context/TaskContext'


function App() {

  const {viewMode , setViewMode} : any = useTasks();
  return (
    <div>
        <div className='flex p-1 m-1 justify-center gap-1.5 bg-lime-500'>
          <button name='kaban' className='p-1 m-0.5 bg-teal-500 rounded-2xl font-bold' onClick={(e)=> setViewMode(e.target.name)}>Kaban View</button>
          <button name='list'  className='p-1 m-0.5 bg-teal-500 rounded-2xl font-bold'  onClick={(e)=> setViewMode(e.target.name)}>List View</button>
          <button name='gantt' className='p-1 m-0.5 bg-teal-500 rounded-2xl font-bold' onClick={(e)=> setViewMode(e.target.name)}>Gantt View</button>
        </div>
        <ToolBox />
        {/* <button name='okk' className='bg-black m-auto text-lime-50' onClick={(e) => generateTasks(5)}>okk</button> */}
    </div>
  )
}

export default App
