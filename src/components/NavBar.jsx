import {useState} from 'react'
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

function NavBar({filterSearch}) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className='flex-grow  '>
      <nav  className=' flex  border-b-2  border-[#f3f3f3] justify-between items-center p-5 px-14' >
      <div className="">
        <input
        value={searchValue}
        onChange={(e)=>{setSearchValue(e.target.value)}}
        onKeyDown={()=>{filterSearch(searchValue)}}
          className="px-5 bg-[#f0f0f0] py-3 border-none mr-5 rounded-md relative w-56 focus:outline-none"
          type="text"
           
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="flex">
        <a href="#">
          <FiHeart size={25} className=" ml-8  " />
        </a>
        <a href="">
          <AiOutlineShoppingCart size={25} className="ml-8  " />
        </a>
        <a href="">
          <AiOutlineUserAdd size={25} className="ml-8  " />
        </a>
      </div>
    </nav>
    </div>
  )
}

export default NavBar