import React from 'react'
import { useState,useRef } from 'react'
const Demo2 = () => {

    const[y,setY]= useState(0)

    let x=0
    
    const ref = useRef(0)
    console.log(ref.current)// w

    /**
     * ref is not like this ==> ref =0
     * ref bheaves like object 
     *  ref ={ current: 0 }
     * 
     * 
     * 
     */

  return (
    <div className='m-4 p-2 bg-slate-50 w-96 h-96 border border-black'>
      <div>
        <button className=' bg-green-200 p-2 m-4'
         onClick={()=>{x=x+1
            console.log("x="+x)
         }}>Increase</button>
        <h1 className='font-bold text-xl'>let = {x}</h1>
        
      </div>
      <div>
        <button className=' bg-green-200 p-2 m-4'
         onClick={()=>{
            setY(y+1)
            console.log("state="+y )
         }}>Increase Y</button>
        <h1 className='font-bold text-xl'>state = {y}</h1>
        
      </div>

       <div>
        <button className=' bg-green-200 p-2 m-4'
         onClick={()=>{
            // here we can directly mutate 
            ref.current=ref.current+1
            console.log("ref"+ref.current)
         }}>Increase ref</button>
        <h1 className='font-bold text-xl'>ref = {ref.current}</h1>
        
      </div>
    </div>
  )
}

export default Demo2
