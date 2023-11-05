import React, { useState } from 'react'
import { BsFillBagFill } from "react-icons/bs";
// import {data} from '../data'
import Categories from './Categories';

function Cards({itemsData,filterCategory}) {
 

    

  
  const mappedData = itemsData.map((card,i)=>(
    <div key={i} className='border cursor-pointer rounded-md w-fit mt-6 px-3 pb-5 duration-500 hover:scale-110'>
      <div>
        <img src={card.img} alt="product" width={'250px'} />
      </div>
      <h2 className='text-2xl pt-3 font-bold'>{card.title}</h2>
      <div className='flex pt-3 items-center'>
        <p className='flex'>{card.star}{card.star}{card.star}{card.star}</p>
        <p className='pl-2'>{card.reviews}</p>
      </div>
      <div className='flex pt-3 justify-between items-center'>
        <p ><span className='line-through'>{card.prevPrice}</span> {card.newPrice}</p>
        <BsFillBagFill size={20}/>
      </div>

    </div>
  ))
  return (
    <div className='px-14 mt-5'>
      
      <Categories filterCategory={filterCategory}/>
    
      <div className='  flex flex-wrap justify-between'>
        {mappedData}
      </div>
      </div>
  )
}

export default Cards