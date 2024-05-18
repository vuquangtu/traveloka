import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { MdFlightLand } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";

function ChooseFlight() {
  const [searchResult, setSearchResult] = useState([]);
  //const [searchValue,setSearcValue] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [select, setSelect] = useState(null);
  const [fist, setFist] = useState([]);

  const fectProducts = async () => {
    await axios
      .get("https://660ab189ccda4cbc75db8c57.mockapi.io/api/user")
      .then((reponse) => {
        console.log(reponse.data);
        setSearchResult(reponse.data);
        if (reponse.data.length > 0) {
          const firstItem = reponse.data[0]; // Lấy phần tử đầu tiên
          const first = firstItem.name;
          setFist(first); // Cập nhật state searchResult với phần tử đầu tiên
        }
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
    <div className="  relative  text-black ">
      <span className="text-[14px] text-slate-700 ">Đến </span>
      <HeadlessTippy
        zIndex={1}
        placement="bottom"
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div tabIndex="-1" {...attrs}>
            <div>
              <div className="rounded-tr-lg bg-white w-[580px] border border-slate-400 absolute top-[-8px]  left-[-125px] rounded-md overflow-y-auto max-h-[320px]    ">
                <p className="text-[14px] p-2 font-bold">
                  Thành phố hoặc sân bay phổ biến
                </p>
                {searchResult.map((item) => (
                  <div key={item.id}>
                    <button
                      onClick={() => handleSelect(item.name)}
                      className="button w-full text-start pl-4  hover:bg-slate-300 p-2  "
                    >
                      <p className="text-[14px] font-bold">{item.name}</p>
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
        <form className="button flex bg-white  h-[40px]  w-[250px] border-b-[1px] border-slate-400 hover:border-slate-800   ">
          <label
            htmlFor="button3"
            className="flex items-center w-[30px] justify-start text-blue-500"
          >
            <MdFlightLand className="text-[20px] text-slate-500  " />
          </label>
          <input
            id="button3"
            spellCheck={false}
            value={select !== null ? select : fist}
            onChange={chang}
            onFocus={() => setShowResult(true)}
            className="w-full h-full outline-0  text-[14px] font-medium    "
            type="text"
            placeholder="Chọn Thành Phố"
          />
        </form>
      </HeadlessTippy>
    </div>
  );
}

export default ChooseFlight;
