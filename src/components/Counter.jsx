import React, { useState } from 'react'

const Counter = () => {


    let [num,setNum] = useState(0);
  return (
    <div>
    <h1>{num}</h1>
    <button onClick={()=>{

setNum(num+1)
    }} >
    click
    </button>
      
    </div>
  )
}

export default Counter
