import React from 'react'
import i from "../assets/images/image.png"

const Caard = (props) => {

    let data = props.data

    return (

        data.map((ice,key)=>(
            <div key={key} className='h-[350px] w-[270px] rounded-[20px] mb-[16px] bg-green-100'>
            <div className="top  ">
                <img className='h-[170px] rounded-t-[20px] w-[100%] object-cover' src={ice.image} alt="dd" />
            </div>
            <div className="btm flex justify-start flex-col  ">
            <div className='h-div flex mb-[10px] justify-start flex-col'>
                 <h1 className='font-bold '>{ice.title}</h1>
                 
                     <div className='type flex justify-around text-[11px] '>
                     {ice.properties.map((p,key)=>(
                    <span key={key}>{p}</span>
                       ))}
                   

                </div>

              
               
            </div>

               
                <div className='m-div mb-[10px]'>
                    <p className='text-[13px]'>{ice.description}</p>

                  
                        <div className='type flex justify-around text-[11px] '>
                          {ice.varieties.map((v,key)=>(
                  
                    <button key={key} className="btn">{v}</button>
                    ))}

                </div>

                    
                    
                </div>
                <div className='p-div flex justify-around'>
                    <div>
                    <h1>${ice.price}</h1>
                    <p className='text-[11px]'>+18% gst</p>
                    </div>
                    <button className='px-4 py-1.5 text-xs font-semibold text-white rounded-full 
bg-orange-400 hover:bg-orange-500 
shadow-md hover:shadow-lg 
transition-all duration-300 active:scale-95'>Add to Cart</button>
                </div>
            </div>


        </div>

        ))
        
    )
}

export default Caard
