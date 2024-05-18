import HeadlessTippy from '@tippyjs/react/headless';
import "tippy.js/dist/tippy.css";
import { useState, useEffect } from "react";
import { LuRockingChair } from "react-icons/lu";
import {
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";

import { FaChevronUp } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const arr=['Phổ thông','Phổ thông đặt biệt','Thương gia','Hạng nhất']

function DropDownChooseFlight() {
  const [searchResult,setSearchResult] = useState([]);
  //const [searchValue,setSearcValue] = useState("");
  const [showResult,setShowResult] =useState(false);
  const [select,setSelect]=useState(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  

  useEffect(()=>{
    setSearchResult(arr)   
  },[])

  

  const handleSelect=(value)=>{
    setSelect(value); 

  }
  
  const handleMouseDown = () => {
    const content3 = document.getElementById("content3");
    content3.style.display = "none";
    setIsMouseDown(true);
  };
  const handleMouseUp = () => {
    const content3 = document.getElementById("content3");
    content3.style.display = "block";
    setIsMouseDown(false);
  };
  
  
  
  const handleHideResult=()=>{
    setShowResult(false) 
  }

  return (
    <div className="  relative space-y-2 ">
      
       
        <HeadlessTippy 
        zIndex={2}
          placement="bottom"
          interactive
          visible={showResult && searchResult.length > 0}
          render={(attrs) => (
            <div className="relative " tabIndex="-1" {...attrs}>
              <div id='content3' className=" text-black rounded-tr-lg bg-white w-[250px]  top-[-8px]  left-[-125px] rounded-md   ">
            
              {arr.map((item)=>(
                
                <ul key={item}  >
                  <li onClick={()=>handleSelect(item)}  className=' w-full text-start pl-10 hover:bg-slate-300 p-2 rounded-md   '>
                    <p className='text-[15px] '  >{item}</p> 
                  </li>

                </ul>

              )

              )}
              </div>
            </div> 
          )}
          onClickOutside={handleHideResult}
        >
          <div className="flex  bg-slate-500/60 text-slate-100  h-[40px] border w-[250px]  rounded-md">
            <label
              htmlFor="button3"
              className="flex items-center w-[65px] justify-center"
            >
              <LuRockingChair className="text-[20px]  " />
            </label>
            <button            
              id="button3"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}                          
              onClick={()=>setShowResult(true)}
              className="w-full h-full outline-0 flex items-center justify-between "
              type="text"
              placeholder="Chọn Thành Phố"
            >
             <div> {select!==null ?select:"Phổ thông"}</div>
             <div className='mr-2'> {!isMouseDown ? <FontAwesomeIcon icon={faChevronDown} /> : <FaChevronUp />}</div>
            </button>
          </div>
        </HeadlessTippy>
      
    </div>
  );
}

export default DropDownChooseFlight;
