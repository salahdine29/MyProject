import React, { useState } from 'react'

export default function Test() {
    const [num,setNum] = useState(0)

    const inc =()=>{
        setNum(prev => prev+=1)
    }
  return (
    <div>
      <button onClick={inc}>+</button>
      <p>{num}</p>
      <button onClick={()=>(setNum(prev => prev-=1))}>-</button>
    </div>
  )
}
