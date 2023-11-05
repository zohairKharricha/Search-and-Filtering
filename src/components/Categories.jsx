import {data} from '../data'
function Categories({filterCategory}) {
    // all unique categories
  const allCategories = ["all", ...new Set(data.map((d) => d.company))];

    console.log(data[0].company)
 
    const mappedCategories = allCategories.map((company,i) => (

        <button key={i} onClick={()=>{filterCategory(company)}} className='px-5 py-2 text-lg rounded-md font-semibold border ml-2 duration-500 hover:bg-[#f0f0f0]'>{company}</button>
  ))
  return (
    <div className='mb-5 '>{mappedCategories}</div>
  )
}

export default Categories