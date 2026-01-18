import React from 'react'
import i from "../assets/images/image.png"

const Caard = () => {

    let data = [
  {
    "id": 1,
    "title": "Vanilla Ice Cream",
    "image": "https://i.pinimg.com/1200x/fc/7c/13/fc7c139fd1f579aabda530fa7bb42578.jpg",
    "properties": ["Vegan", "Organic", "Gluten Free"],
    "description": "Classic vanilla ice cream made with organic ingredients and a smooth creamy texture.",
    "varieties": ["Choco Chips", "Caramel Topping", "Nut Crunch"],
    "price": 10.0
  },
  {
    "id": 2,
    "title": "Chocolate Ice Cream",
    "image": "https://i.pinimg.com/736x/fe/52/54/fe52549ef06297bb2490494f2256c845.jpg",
    "properties": ["Vegetarian", "Gluten Free"],
    "description": "Rich chocolate ice cream with deep cocoa flavor and premium quality milk.",
    "varieties": ["Dark Chocolate", "Chocolate Syrup", "Choco Chips"],
    "price": 12.0
  },
  {
    "id": 3,
    "title": "Strawberry Ice Cream",
    "image": "https://i.pinimg.com/736x/b0/9f/f1/b09ff17f39020b21dbf052faba58bc17.jpg",
    "properties": ["Vegan", "Organic"],
    "description": "Fresh strawberry ice cream made from real fruit and natural sweeteners.",
    "varieties": ["Strawberry Chunks", "White Chocolate", "Fruit Syrup"],
    "price": 11.5
  },
  {
    "id": 4,
    "title": "Mango Ice Cream",
    "image": "https://i.pinimg.com/1200x/fc/7c/13/fc7c139fd1f579aabda530fa7bb42578.jpg",
    "properties": ["Vegan", "Gluten Free"],
    "description": "Tropical mango ice cream with rich Alphonso mango flavor.",
    "varieties": ["Mango Pulp", "Chili Sprinkle", "Cream Swirl"],
    "price": 11.0
  },
  {
    "id": 5,
    "title": "Butterscotch Ice Cream",
    "image": "https://i.pinimg.com/736x/fe/52/54/fe52549ef06297bb2490494f2256c845.jpg",
    "properties": ["Vegetarian"],
    "description": "Creamy butterscotch ice cream with crunchy caramel bits.",
    "varieties": ["Caramel Crunch", "Butterscotch Chips", "Honey Drizzle"],
    "price": 10.5
  },
  {
    "id": 6,
    "title": "Pistachio Ice Cream",
    "image": "https://i.pinimg.com/736x/b0/9f/f1/b09ff17f39020b21dbf052faba58bc17.jpg",
    "properties": ["Organic", "Gluten Free"],
    "description": "Premium pistachio ice cream made with roasted nuts.",
    "varieties": ["Crushed Pistachio", "White Choco", "Creamy Swirl"],
    "price": 13.0
  },
  {
    "id": 7,
    "title": "Cookies & Cream",
    "image": "https://i.pinimg.com/1200x/fc/7c/13/fc7c139fd1f579aabda530fa7bb42578.jpg",
    "properties": ["Vegetarian"],
    "description": "Classic cookies and cream ice cream with crunchy cookie bits.",
    "varieties": ["Oreo Crumbs", "Chocolate Sauce", "Cream Layers"],
    "price": 12.5
  },
  {
    "id": 8,
    "title": "Coffee Ice Cream",
    "image": "https://i.pinimg.com/736x/fe/52/54/fe52549ef06297bb2490494f2256c845.jpg",
    "properties": ["Gluten Free"],
    "description": "Bold coffee-flavored ice cream for true coffee lovers.",
    "varieties": ["Espresso Shot", "Choco Chips", "Mocha Swirl"],
    "price": 13.5
  },
  {
    "id": 9,
    "title": "Blueberry Ice Cream",
    "image": "https://i.pinimg.com/736x/b0/9f/f1/b09ff17f39020b21dbf052faba58bc17.jpg",
    "properties": ["Vegan", "Organic"],
    "description": "Refreshing blueberry ice cream with real fruit essence.",
    "varieties": ["Blueberry Chunks", "Vanilla Cream", "Fruit Syrup"],
    "price": 11.75
  },
  {
    "id": 10,
    "title": "Mint Chocolate Chip",
    "image": "https://i.pinimg.com/736x/fe/52/54/fe52549ef06297bb2490494f2256c845.jpg",
    "properties": ["Vegetarian", "Gluten Free"],
    "description": "Cool mint ice cream combined with rich chocolate chips.",
    "varieties": ["Mint Leaves", "Dark Choco Chips", "Creamy Base"],
    "price": 12.25
  }
]

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
