import React, { useMemo, useState } from 'react'
import {findPrime} from '../Utils/helper' 
const Demo = () => {
  const[text,setText]=useState('0')
  // lets create a black and white theme
  const[isDarkTheme,setISDarkTheme]=useState(false)






  //  heavy operation like this after adding 123456 it feezes  its heavy operation
  
  const prime =useMemo(()=> findPrime(text),[text])
  // memo is a hook that cached the result os this calculation
  // now this prime has cashed vlaue of primed number
  // and its also give us dependences
  // memorzie it and only changes when text changes 

  // useRef hook exmple
  const v  = 10

  return (
    <div className={'m-4 p-2 w-96 border border-black px-2 ' +(isDarkTheme && 'bg-gray-900 text-white' ) }>
    
    <div>
      <button className='m-10 p-2 bg-green-300' onClick={()=>setISDarkTheme(!isDarkTheme)}>
        toggle</button>
    </div>

    <div>
      <input className='border border-black w-72'
       type="number" value={text} onChange={(e)=>setText(e.target.value)} />
    </div>

    <div>
      <h1 className='mt-4 font-bold text-xl'>nth Prime:{prime}</h1>
    </div>
    </div>
  )
}

export default Demo
