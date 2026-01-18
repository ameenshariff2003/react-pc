import React, { useState } from 'react'

const Crud = () => {
    const [data,setdata] = useState({
        name:"",
        ph:"",
        img:"",
        mark:"",
    }) 
   
    const [arr,setArr] = useState([])
    const real = localStorage.getItem("arr")
    console.log(real)
    let fData = JSON.parse(real)
    const onSubmitt = (e)=>{
        e.preventDefault()
        setArr([...arr,data])
               localStorage.setItem("arr",JSON.stringify(arr))

        console.log(arr)

    }
    const handelDlt = (key)=>{
        let copy = arr

       setArr(copy.filter((_,id)=> id !== key))
       localStorage.setItem("arr",JSON.stringify(arr))
       }
    

    
  return (
    <div>
    <form onSubmit={onSubmitt} >
    <label className='text-[40px]' htmlFor="name">name </label>
    <input className='border-[1px]  rounded-2xl ' onChange={(e)=>{setdata({...data,
    name:e.target.value})}} value={data.name} type="text" id='name' />


    <label className='text-[40px]' htmlFor="ph">ph </label>
    <input className='border-[1px] rounded-2xl '  onChange={(e)=>{setdata({...data,
    ph:e.target.value})}} value={data.ph} type="text" id='ph' />
    <label className='text-[40px]' htmlFor="img">img </label>
    <input className='border-[1px] rounded-2xl '  onChange={(e)=>{setdata({...data,
    img:e.target.value})}} value={data.img} type="text" id='img' />
    <label className='text-[40px]' htmlFor="mark">mark </label>
    <input className='border-[1px] rounded-2xl '  onChange={(e)=>{setdata({...data,
    mark:e.target.value})}} value={data.mark} type="text" id='mark' />
    <button>submit</button>
    </form>

    <br /><br /><br />

    {fData.map((ar,key)=>
        (
            
        <div key={key}>
                <div><h1>{key}</h1></div>

        <div><h1>{ar.name}</h1></div>
                <div><h1>{ar.ph}</h1></div>
        <div><h1>{ar.img}</h1></div>

        <div><h1>{ar.mark}</h1></div>

        <button className='btn' onClick={()=>handelDlt(key)}>delt</button>


        </div>
    ))}
      
    </div>
  )
}

export default Crud
