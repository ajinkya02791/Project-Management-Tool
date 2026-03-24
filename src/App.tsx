import './App.css'
import ToolBox from './components/ToolBox'
import { generateTasks , a} from './utility/generateTasks.js'

function App() {

  console.log(a);

  return (
    <div>
        <ToolBox />
        <button name='okk' className='bg-black m-auto text-lime-50' onClick={(e) => generateTasks(5)}>okk</button>
    </div>
  )
}

export default App
