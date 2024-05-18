import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { FaPlaneDeparture } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";

function DropDownChooseFlight2() {
  const [searchResult, setSearchResult] = useState([]);
  //const [searchValue,setSearcValue] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [select, setSelect] = useState(null);
  

  const fectProducts = async () => {
    await axios
      .get("https://660ab189ccda4cbc75db8c57.mockapi.io/api/user")
      .then((reponse) => {
        console.log(reponse.data);
        setSearchResult(reponse.data);
        
      })

      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fectProducts();
  }, []);

  const handleSelect = (value) => {
    setSelect(value);
  };
  const chang = (e) => {
    setSelect(e.target.value);
   
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  return (
    <div className="  relative  space-y-2 text-slate-900" >
      <span className="text-[14px] text-slate-300 ">Từ</span>
      <HeadlessTippy
        zIndex={1}
        placement="bottom"
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className="relative " tabIndex="-1" {...attrs}>
           <div className=" ">
           <div className="rounded-tr-lg bg-white w-[500px] absolute top-[-8px]  left-[-125px] rounded-md overflow-y-auto max-h-[320px]    ">
              <p className="text-[14px] p-2 text-slate-600">
                Thành phố hoặc sân bay phổ biến
              </p>
              {searchResult.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() => handleSelect(item.name)}
                    className=" w-full text-start pl-4  hover:bg-slate-300 p-2  "
                  >
                    <p className="text-[15px]">{item.name}</p>
                    <p className="text-[12px] font-medium text-slate-500">
                      {item.note}
                    </p>
                  </button>
                </div>
              ))}
            </div>
           </div>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <form className="flex bg-white  h-[50px] w-[250px] rounded-l-2xl  border-[3px] border-slate-500 border-r-0 text-slate-800  ">
          <label
            htmlFor="button3"
            className="flex items-center w-[65px] justify-center text-blue-500"
          >
            <FaPlaneDeparture className="text-[25px] " />
          </label>
          <input
            id="button3"
            spellCheck={false}
            value={select }
            onChange={chang}
            onFocus={() => setShowResult(true)}
            className="w-full h-full outline-0"
            type="text"
            placeholder="Origin"
          />
        </form>
      </HeadlessTippy>
    </div>
  );
}

export default DropDownChooseFlight2;
