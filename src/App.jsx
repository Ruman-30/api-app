import React, { useState } from 'react'
import axios from "axios";
const App = () => {
const [data, setdata] = useState([])

const clickHnadler = async ()=>{
  const response = await axios.get("https://picsum.photos/v2/list")
  setdata(response.data)
}
  return (
    <div className='p-5'>
     <button onClick={()=>{
      clickHnadler()
     }} className='py-2 mb-4 px-5 bg-emerald-500 text-white rounded-md font-medium'>Get data</button>

     <div>
      {data.map(function(elem){
        return <div className='border-2 border-zinc-300 p-3 w-full h-30 bg-zinc-200 flex justify-between items-center'>
          <img className='h-50 w-60 rounded-md object-cover object-center' src={elem.download_url} alt="" />
          <h1 className='text-2xl font-semibold'>{elem.author}</h1>
        </div>
      })}
     </div>
    </div>
  )
}

export default App
