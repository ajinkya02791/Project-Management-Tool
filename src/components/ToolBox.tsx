import Column from './Column'

function ToolBox() {
  return (
    <div className='md:flex md:justify-center md:gap-3 box-border w-screen m-5 '>
        <Column status={"to-do"}/>
        <Column status={"in-progress"}/>
        <Column status={"in-review"}/>
        <Column status={"done"}/>
    </div>
  )
}

export default ToolBox