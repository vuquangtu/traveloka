import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { useState, useEffect } from "react";
import { LuRockingChair } from "react-icons/lu";

const arr = ["Phổ thông", "Phổ thông đặt biệt", "Thương gia", "Hạng nhất"];

function SelectFlight() {
  const [searchResult, setSearchResult] = useState([]);
  //const [searchValue,setSearcValue] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [select, setSelect] = useState(null);

  useEffect(() => {
    setSearchResult(arr);
  }, []);

  const handleSelect = (value) => {
    setSelect(value);
  };

  const handleMouseDown = () => {
    const content3 = document.getElementById("content3");
    content3.style.display = "none";
  };
  const handleMouseUp = () => {
    const content3 = document.getElementById("content3");
    content3.style.display = "block";
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  return (
    <div className="relative pb-[1px] ">
      <p className="text-[14px]">Hạng ghế</p>
      <HeadlessTippy
        zIndex={2}
        placement="bottom"
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className="relative " tabIndex="-1" {...attrs}>
            <div
              id="content3"
              className=" text-black  bg-white w-[380px] border  top-[-8px]  left-[-125px] rounded-md     "
            >
              {arr.map((item) => (
                <ul key={item}>
                  <li
                    onClick={() => handleSelect(item)}
                    className="button w-full text-start pl-10 hover:bg-slate-300 p-2 rounded-md   "
                  >
                    <p className="text-[15px] font-medium ">{item}</p>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className="flex  text-slate-600  h-[41px] border-b-[1px] border-slate-400 hover:border-slate-800  ">
          <label className="flex items-center w-[35px] justify-start">
            <LuRockingChair className="text-[20px]  " />
          </label>
          <button
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onClick={() => setShowResult(true)}
            className="button w-full h-full outline-0 flex items-center justify-start  font-medium text-slate-900 "
            type="text"
            placeholder="Chọn Thành Phố"
          >
            {select !== null ? select : "Phổ thông"}
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default SelectFlight;
