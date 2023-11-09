import React from 'react'

function SideBar({handleCategoryChange,handlePriceChange,handleColorChange}) {
    const radioBg = "accent-red-500 "
    // const allCategories = ["all", ...new Set(data.map((d) => d.category))];
    // const allColors = ["all", ...new Set(data.map((d) => d.color))];
    
  return (
    <div className='border-r-2  border-[#f3f3f3]'>
        <div className='border-b-2  p-6'>
            <h1 className='text-4xl text-center'>🛒</h1>
        </div>
        <div className='px-20'>
            {/* CATEGORIES */}
            <div className='mt-6'>
                <h2 className='text-2xl font-bold'>Categories</h2>
                <div  className='flex '>
                    <input type="radio" name='radio' id='all' value={'all'} onChange={handleCategoryChange} className={radioBg}  />
                    <label className='pl-3 text-md' htmlFor={'all'}>All</label>
                </div>
                <div  className='flex '>
                    <input type="radio" name='radio' id='sneakers' value={'sneakers'} onChange={handleCategoryChange} className={radioBg}  />
                    <label className='pl-3 text-md' htmlFor={'sneakers'}>Sneakers</label>
                </div>
                <div  className='flex '>
                    <input type="radio" name='radio' id='flats' value={'flats'} onChange={handleCategoryChange} className={radioBg}  />
                    <label className='pl-3 text-md' htmlFor={'flats'}>Flats</label>
                </div>
                <div  className='flex '>
                    <input type="radio" name='radio' id='sandals' value={'sandals'} onChange={handleCategoryChange} className={radioBg}  />
                    <label className='pl-3 text-md' htmlFor={'sandals'}>sandals</label>
                </div>
                <div  className='flex '>
                    <input type="radio" name='radio' id='heels' value={'heels'} onChange={handleCategoryChange} className={radioBg}  />
                    <label className='pl-3 text-md' htmlFor={'heels'}>Heels</label>
                </div>
                 
                {/* {allCategories.map((category,i) => (
                    <div key={i} className='flex '>
                    <input type="radio" name='price' value={category} onChange={handleCategoryChange} className={radioBg}  />
                    <p className='pl-3 text-md'>{category.charAt(0).toUpperCase()+category.slice(1)}</p>
                </div>
                ))} */}
            </div>


            {/* PRICE */}
            <div className='mt-6'>
                <h2 className='text-2xl font-bold'>Price</h2>
                <div className='flex'>
                    <input id='allPrices' type="radio" name='radio' value={'allPrices'} onChange={handlePriceChange} className={radioBg} />
                    <label htmlFor='allPrices' className='pl-3 text-md'>All</label>
                </div>
                <div className='flex'>
                    <input id='0$' type="radio" name='radio' value={'0-50'} onChange={handlePriceChange} className={radioBg} />
                    <label htmlFor='0$' className='pl-3 text-md'>$0 - 50$</label>
                </div>
                <div className='flex'>
                    <input id='50$' type="radio" name='radio' value={"50-100"} onChange={handlePriceChange} className={radioBg} />
                    <label htmlFor='50$' className='pl-3 text-md'>$50 - 100$</label>
                </div>
                <div className='flex'>
                    <input id='100$' type="radio" name='radio' value={"100-150"} onChange={handlePriceChange} className={radioBg} />
                    <label htmlFor='100$' className='pl-3 text-md'>$100 - 150$</label>
                </div>
                <div className='flex'>
                    <input id='150$' type="radio" name='radio' value={'150-200'} onChange={handlePriceChange} className={radioBg} />
                    <label htmlFor='150$' className='pl-3 text-md'>over 150$</label>
                </div>
            </div>
            
             {/* COLOR */}
             <div className='mt-6'>
                <h2 className='text-2xl font-bold'>Colors</h2>


                <div  className='flex '>
                    <input id='all-colors' type="radio" name='radio' value={'all'} onChange={handleColorChange} className={ `accent-red-500  `} />
                    <label htmlFor='all-colors' className='pl-3 text-md'>All</label>
                </div>
                <div  className='flex '>
                    <input id='black' type="radio" name='radio' value={'black'} onChange={handleColorChange} className={ `accent-red-500  `} />
                    <label htmlFor='black' className='pl-3 text-md'>Black</label>
                </div>
                <div  className='flex '>
                    <input id='blue' type="radio" name='radio' value={'blue'} onChange={handleColorChange} className={ `accent-red-500  `} />
                    <label htmlFor='blue' className='pl-3 text-md' >Blue</label>
                </div>
                <div  className='flex '>
                    <input id='red' type="radio" name='radio' value={'red'} onChange={handleColorChange} className={ `accent-red-500  `} />
                    <label htmlFor='red' className='pl-3 text-md'>Red</label>
                </div>
                <div  className='flex '>
                    <input id='green' type="radio" name='radio' value={'green'} onChange={handleColorChange} className={ `accent-red-500  `} />
                    <label htmlFor='green' className='pl-3 text-md'>Green</label>
                </div>
                <div  className='flex '>
                    <input id='white' type="radio" name='radio' value={'white'} onChange={handleColorChange} className={ `accent-red-500  `} />
                    <label htmlFor='white' className='pl-3 text-md' >White</label>
                </div>
                {/* {allColors.map((color,i) => (
                    
                    <div key={i} className='flex '>
                    <input type="radio" name='price' onChange={handleCategoryChange} className={color!=='white' || color!=='black' ? `accent-${color}-500` : `accent-'black`} />
                    <p className='pl-3 text-md'>{color.charAt(0).toUpperCase()+color.slice(1)}</p>
                </div>
                ))} */}
             </div>
            
            
            

        </div>
    </div>
  )
}

export default SideBar