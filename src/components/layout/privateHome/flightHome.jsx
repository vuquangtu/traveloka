import DropDownChooseFlight from "../../dropdownChooseFlight/dropdownChooseFlight";
import DropDownChooseFlight1 from "../../dropdownChooseFlight/dropdownChooseFlight1";
import DropDownChooseFlight2 from "../../dropdownChooseFlight/dropdownChooseFlight2";
import DropDownChooseFlight3 from "../../dropdownChooseFlight/dropdownChooseFlight3";
import DropDownDate1 from "../../dropdownDate/dropDownDate1";
import DropDownDate2 from "../../dropdownDate/dropDownDate2";
import DropDownPassenger from "../../dropDownPassenger";
import DropDownSelect from "../../dropDownSelect";
import { CiSearch } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { HiBellAlert } from "react-icons/hi2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DateFlight3 from "../../componentFlight/dateFlight3";
import DateFlight4 from "../../componentFlight/dateFlight4";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { AiOutlinePlus } from "react-icons/ai";
import {
  faHotel,
  faPlane,
  faCar,
  faTruckPlane,
  faTruckMoving,
  faPersonSnowboarding,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect, useRef } from "react";

function Flight() {
  const [showResult, setShowResult] = useState(false);

  const cos = document.getElementById("cos");
  
  const cosRef = useRef(null);
  const sinRef = useRef(null);

  const handleChange1 = () => {
    setShowResult(true);
    cos.style.position = "fixed";
    cos.style.top = "0";
    cos.style.left = "0";
    cos.style.width = "100vw";
    cos.style.height = "100vh";
    cos.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    cos.style.zIndex = "40";
  };
  const handleChange2 = () => {
    setShowResult(false);
    cos.style.position = "";
    cos.style.top = "";
    cos.style.left = "";
    cos.style.width = "";
    cos.style.height = "";
    cos.style.backgroundColor = "";
    cos.style.zIndex = "";
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        cosRef.current &&
        !cosRef.current.contains(event.target) &&
        sinRef.current &&
        !sinRef.current.contains(event.target)
      ) {
        setShowResult(false);
        cos.style.position = "";
        cos.style.top = "";
        cos.style.left = "";
        cos.style.width = "";
        cos.style.height = "";
        cos.style.backgroundColor = "";
        cos.style.zIndex = "";
        
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <main className=" font-bold text-slate-100 pb-[100px]  ">
      <div className="px-[90px] space-y-4 pt-1">
        <div className="flex items-center justify-between ">
          <div className="flex space-x-2">
            <button className="bg-blue-500 text-[14px]  p-2 rounded-full">
              Một chiều/ Khứ hồi
            </button>
            <button
              id="tan"
              ref={sinRef}
              onClick={handleChange1}
              className="bg-black/35 text-[14px] p-2  rounded-full  "
            >
              Nhiều thành phố
            </button>
            {showResult && (
              <div id="sin" className="">
                <div
                  id="sin"
                  ref={cosRef}
                  className="absolute top-[191px] z-50 py-3 px-3 bg-slate-950 left-[51px] w-[91%] outline outline-2 outline-slate-200 rounded-md"
                >
                  <ul className="flex justify-center space-x-5 font-bold text-[16px] mb-2 ">
                    <li className=" rounded-full  ">
                      <a
                        href=""
                        className="flex space-x-2 items-center hover:outline-1 hover:outline hover:outline-white  hover: rounded-full hover:text-slate-100 py-2 px-3  "
                      >
                        <FontAwesomeIcon icon={faHotel} className="h-[21px]" />
                        <span>Khách sạn</span>
                      </a>
                    </li>
                    <li className=" rounded-full bg-white text-slate-800 ">
                      <a
                        href=""
                        className="flex space-x-2 items-center py-2 px-3  "
                      >
                        <FontAwesomeIcon
                          icon={faPlane}
                          className="h-[21px] text-blue-500"
                        />
                        <span>Vé máy bay</span>
                      </a>
                    </li>
                    <li className=" rounded-full  ">
                      <a
                        href=""
                        className="flex space-x-2 items-center  py-2 px-3 hover:outline-1 hover:outline hover:outline-white  hover: rounded-full hover:text-slate-100 "
                      >
                        <FontAwesomeIcon icon={faCar} className="h-[21px]" />
                        <span>Vé xe khách</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="flex space-x-2 items-center  py-2 px-3 hover:outline-1 hover:outline hover:outline-white  hover: rounded-full hover:text-slate-100 "
                      >
                        <FontAwesomeIcon
                          icon={faTruckPlane}
                          className="h-[21px]"
                        />
                        <span>Đưa đón sân bay</span>
                      </a>
                    </li>
                    <li className=" rounded-full  ">
                      <a
                        href=""
                        className="flex space-x-2 items-center  py-2 px-3  hover:outline-1 hover:outline hover:outline-white  hover: rounded-full hover:text-slate-100 "
                      >
                        <FontAwesomeIcon
                          icon={faTruckMoving}
                          className="h-[21px]"
                        />
                        <span>Cho thuê xe</span>
                      </a>
                    </li>
                    <li className=" rounded-full  ">
                      <a
                        href=""
                        className="flex space-x-2 items-center  py-2 px-3 hover:outline-1 hover:outline hover:outline-white  hover: rounded-full hover:text-slate-100 "
                      >
                        <FontAwesomeIcon
                          icon={faPersonSnowboarding}
                          className="h-[21px]"
                        />
                        <span>Hoạt động và vui chơi</span>
                      </a>
                    </li>
                    <li className=" rounded-full  ">
                      <a
                        href=""
                        className="flex space-x-2 items-center  py-2 px-3 hover:outline-1 hover:outline hover:outline-white  hover: rounded-full hover:text-slate-100 "
                      >
                        <FontAwesomeIcon icon={faBars} className="h-[21px]" />
                        <span>Khác</span>
                      </a>
                    </li>
                  </ul>

                  <div className="border-b-[1px]   "></div>

                  <div className="flex justify-between mt-[15px]">
                    <div className="flex ml-[25px] space-x-2 h-full">
                      <button
                        onClick={handleChange2}
                        className="bg-blue-500 text-[14px] px-2 py-1 rounded-full"
                      >
                        Một chiều/ Khứ hồi
                      </button>
                      <button className="bg-black/35 text-[14px] p-2   rounded-full  ">
                        Nhiều thành phố
                      </button>
                    </div>
                    <div className="flex items-center space-x-2 mr-[15px]">
                      <div>{<DropDownPassenger />}</div>
                      <div>{<DropDownSelect />}</div>
                    </div>
                  </div>
                  <div className=" px-5 pt-5   rounded-lg     ">
                    <div className="flex relative  mt-5   ">
                      <div className="flex ">
                        <div>{<DropDownChooseFlight />}</div>
                        <div>{<DropDownChooseFlight1 />}</div>
                      </div>
                      <div className="w-full ml-[200px] space-y ">
                        <p className="text-[15px]">Ngày đi</p>
                        <div className="w-full bg-white rounded-lg mt-[8px] border-[3px] border-slate-500     ">
                          {<DateFlight3 />}
                        </div>
                      </div>
                    </div>
                    <div className="flex relative  mt-5  ">
                      <div className="flex ">
                        <div>{<DropDownChooseFlight2 />}</div>
                        <div>{<DropDownChooseFlight3 />}</div>
                      </div>
                      <div className="w-full ml-[200px] space-y ">
                        <p className="text-[15px]">Khứ hồi</p>
                        <div className="w-full bg-white rounded-lg mt-[8px] border-[3px] border-slate-500     ">
                          {<DateFlight4 />}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between mt-5 ">
                      <p className="flex items-center space-x-2 text-slate-100 font-bold ml-5 my-4 border-dashed border-2 border-white rounded-lg px-[100px] py-2">
                        <AiOutlinePlus />
                        <span>Thêm chuyến bay khác</span>
                      </p>

                      <div className="flex  ">
                        <div className="flex items-center  rounded-lg font-bold space-x-2 text-slate-100 justify-center py-4 bg-orange-600 px-2  mb-4 ">
                          <HiMagnifyingGlass />
                          <p>Tìm chuyến bay</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between mt-6">
                      <div className="flex items-center text-[14px]   space-x-4">
                        <span>Tìm kiếm</span>
                        <div className="flex items-center space-x-2 bg-slate-500/60 p-2 rounded-md">
                          <TbWorld />
                          <span>Khám phá ý tưởng chuyến bay</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-slate-500/60 p-2 rounded-md">
                          <HiBellAlert />
                          <span>Cảnh báo giá</span>
                        </div>
                      </div>
                      <p className="text-[14px] font-medium mt-3 space-x-1">
                        <span>Chuyến bay nhiều thành phố là gì?</span>
                        <span className="underline">
                          Tìm hiểu thêm tại đây.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <div>{<DropDownPassenger />}</div>
            <div>{<DropDownSelect />}</div>
          </div>
        </div>

        <div className="flex items-center space-x-5  ">
          <div className="flex ">
            <div>{<DropDownChooseFlight />}</div>
            <div>{<DropDownChooseFlight1 />}</div>
          </div>
          <div className="flex ">
            <div>{<DropDownDate1 />}</div>
            <div>{<DropDownDate2 />}</div>
          </div>
          <div className=" bg-orange-500 h-[50px] w-[50px] flex items-center justify-center rounded-2xl mt-7  border-[3px] border-slate-500 ">
            <CiSearch className="text-[25px] text-white" />
          </div>
        </div>
        <div className="flex items-center text-[14px]   space-x-4">
          <span>Tìm kiếm</span>
          <div className="flex items-center space-x-2 bg-slate-500/60 p-2 rounded-md">
            <TbWorld />
            <span>Khám phá ý tưởng chuyến bay</span>
          </div>
          <div className="flex items-center space-x-2 bg-slate-500/60 p-2 rounded-md">
            <HiBellAlert />
            <span>Cảnh báo giá</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Flight;
