import React, { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [task, settask] = useState("");
  const [desc, setdesc] = useState("")
  const [total, settotal] = useState([])



  const submithandler = (e) => {
    e.preventDefault();

    if(task.trim().length === 0) return toast.error('enter the task');
    if(desc.trim().length === 0) return toast.error('enter the description');

    settotal([...total,{task,desc}]);
    console.log(total)
    setdesc("")
    settask("")
  }

  const deletehandler = (index) => {
    const copytotal = [...total];
    copytotal.splice(index,1);
    settotal(copytotal);
 }

  let render = <h1>No tasks alloted</h1>;
  let titles

  if(total.length > 0 ){
     titles = <div className='flex  h-6 justify-between align-center bg-green-200'>
      <h1>Tasks</h1>
      <h1 className='mr-96'>Description</h1>
      <h1 className='mr-32'>Remove</h1>
    </div>
    render = total.map((p,i) => {
      return <div key={i} className='flex  w-full align-center gap-12'>
              <h2 className='h-8 w-1/4 mb-5' >{p.task}</h2>
              <h3 className='w-1/2 h-8 mb-5'>{p.desc}</h3>
              <button className='ml-20 rounded-xl mb-5 mt-1 border-teal-300 border-solid border-2 px-4 py-2 bg-blue-100 text-blue-600 font-bold' onClick={() => {deletehandler(i)}}>Remove</button>
             </div>
      
    })
  }
  

  return (
    <div className='w-screen h-screen bg-blue-100 '>
      <h1 className='h-9 w-screen bg-red-200 text-center text-xl'>The TODO List</h1>

      <form onSubmit={submithandler}>
      <input value={task} onChange={(e) => {settask(e.target.value)}} placeholder='enter your Task name'  type="text" className='w-96 h-9 m-5' />
      <input value={desc} onChange={(e) => {setdesc(e.target.value)}} placeholder='enter Task description ' type="text" className='w-96 h-9 m-5' />
      <input type='submit' className='bg-orange-300 w-20 h-8 m-5'/>
      </form>
      <div className='w-full h-fit bg-green-100 p-2'>
        {titles}
        {render}
      </div>
      </div>
  )
}

export default App