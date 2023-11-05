import React from 'react'
import {data} from '../data';

function SideBar() {
    const radioBg = "accent-red-500 "
    const allCategories = ["all", ...new Set(data.map((d) => d.category))];
    const allColors = ["all", ...new Set(data.map((d) => d.color))];
    
  return (
    <div className='border-r-2  border-[#f3f3f3]'>
        <div className='border-b-2  p-6'>
            <h1 className='text-4xl text-center'>🛒</h1>
        </div>
        <div className='px-20'>
            {/* CATEGORIES */}
            <div className='mt-6'>
                <h2 className='text-2xl font-bold'>Categories</h2>
                {allCategories.map((category,i) => (
                    <div key={i} className='flex '>
                    <input type="radio" name='categorie' className={radioBg}  />
                    <p className='pl-3 text-md'>{category.charAt(0).toUpperCase()+category.slice(1)}</p>
                </div>
                ))}
            </div>


            {/* PRICE */}
            <div className='mt-6'>
                <h2 className='text-2xl font-bold'>Price</h2>
                <div className='flex'>
                    <input type="radio" name='price' className={radioBg} />
                    <p className='pl-3 text-md'>$0 - 50$</p>
                </div>
                <div className='flex'>
                    <input type="radio" name='price' className={radioBg} />
                    <p className='pl-3 text-md'>$50 - 100$</p>
                </div>
                <div className='flex'>
                    <input type="radio" name='price' className={radioBg} />
                    <p className='pl-3 text-md'>$100 - 150$</p>
                </div>
                <div className='flex'>
                    <input type="radio" name='price' className={radioBg} />
                    <p className='pl-3 text-md'>over 150$</p>
                </div>
            </div>
            
             {/* COLOR */}
             <div className='mt-6'>
                <h2 className='text-2xl font-bold'>Colors</h2>
                {allColors.map((color,i) => (
                    
                    <div key={i} className='flex '>
                    <input type="radio" name='color' className={color!=='white' || color!=='black' ? `accent-${color}-500` : `accent-'black`} />
                    <p className='pl-3 text-md'>{color.charAt(0).toUpperCase()+color.slice(1)}</p>
                </div>
                ))}
             </div>
            
            
            

        </div>
    </div>
  )
}

export default SideBar