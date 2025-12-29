import React, { use, useState } from 'react'


const App = () => {

const [details, setDetails] = useState("");
const [desc, setDesc] = useState("");
let localtask=JSON.parse(localStorage.getItem("all-tasks")) || []


const [task, setTask] = useState(localtask);

const handleSubmit=(e)=>{
e.preventDefault();

 localtask=[...task]
localtask.push({task:details,desc:desc})

setTask(localtask)
localStorage.setItem("all-tasks",JSON.stringify(localtask))
setDetails("")
setDesc("")


}
const deletecard=(idx)=>{
  let newtasks=[...task]
// setTask(task.filter((_, i) => i !== idx))
newtasks.splice(idx,1)
setTask(newtasks)
localStorage.setItem("all-tasks",JSON.stringify(newtasks))


}
  
  return (
    <div>
      <div className='py-5 flex justify-start bg-[#111] text-[#dadada]'>
        <div className='flex h-screen w-1/2 px-12 '>
          <form className='flex flex-col items-start h-screen w-full p-10' onSubmit={(e)=>{
handleSubmit(e)
          }}>
            <h1 className='text-3xl font-medium '>Add Notes</h1>
            <div className='flex flex-col items-start px-4 py-5 w-full'>
              <input onChange={(e)=>{
                setDetails(e.target.value)
                
              }} type="text" placeholder='Add task....' className='text-md px-2 py-1 outline-none w-full'  value={details}/> 
              <textarea onChange={(e)=>{
                setDesc(e.target.value)
              }} name="" id="" placeholder='Description..' className='ml-2 mt-5 h-35 w-full border-gray-500 rounded-xl p-2 text-sm outline-none border-2'value={desc}></textarea>
            </div>
             <button className='bg-green-600 px-7 py-1 mt-10 rounded-2xl font-medium text-md active:bg-green-500'>Add</button>
          </form> 
        </div>
        <div>
          <div id='allnotes' className=' h-screen w-240 rounded-xl py-2 px-2 overflow-auto relative'>
            <h1 className='text-2xl w-full text-center text-4xl font-medium absolute fixed top-5 left-50 bg-black'>All Notes</h1>

            <div  className='py-1 px-1 mt-2 flex flex-wrap'>
            {task.map(function(elem,idx){
              return  <div key={idx} className='w-90  h-85 rounded-2xl flex justify-between flex-col bg-[url(/images/notes.png)] bg-cover  p-15'>
                <div>

                <h3 className='text-xl font-medium text-black'> {elem.task}</h3>
                <h3 className='text-xs font-medium text-[#333232] w-full'>{elem.desc}</h3>
                </div>
                <div>
                  <button onClick={()=>{
                    deletecard(idx)

                  }} className='bg-red-500 text-xs py-1 px-2 font-medium text-white rounded mb-2 active:scale-95'>Delete</button>
                </div>
              </div>
            })}
             
            </div>

            <div></div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default App
