import ChooseFlight from "../componentFlight/chooseFlight";
import ChooseFlight2 from "../componentFlight/chooseFlight2";
import PassengerFlight from "../componentFlight/passengerFlight";
import ChooseFlight3 from "../componentFlight/chooseFlight3";
import ChooseFlight4 from "../componentFlight/chooseFlight4";
import DateFlight1 from "../componentFlight/dateFlight1";
import DateFlight2 from "../componentFlight/dateFlight2";
import SelectFlight from "../componentFlight/selecFlight";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";

import { useState, useEffect } from "react";

function OneCity() {
  const [showResult, setShowResult] = useState(true);
  const [showResult1, setShowResult1] = useState(false);
  useEffect(() => {
    const initSlider = () => {
      
      const button = document.getElementsByClassName("button");
      const white = document.getElementById("white");
      const black = document.getElementById("black");
      const mot=document.getElementById("mot")
      const hai=document.getElementById("hai")
      black.addEventListener("click", (event) => {
        let isInsideButton = false;
        for (let i = 0; i < button.length; i++) {
          if (button[i].contains(event.target)) {
            isInsideButton = true;
            break; // Nếu tìm thấy target nằm trong button thì dừng vòng lặp
          }
        }
        
       

        if (!isInsideButton) {
          white.style.position = "fixed";
          white.style.top = "0";
          white.style.left = "0";
          white.style.width = "100vw";
          white.style.height = "100vh";
          white.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
          white.style.zIndex = "1";
          black.style.position = "relative";
          black.style.zIndex = "2";
         
          
          document.addEventListener("click", handleClickOutside);
        }
      });
      
      mot.addEventListener("mouseenter", () => {
          mot.classList.add("hover:bg-blue-600"); // Thêm lớp CSS khi rê chuột vào
      });
      
      mot.addEventListener("mouseleave", () => {
          mot.classList.remove("hover:bg-blue-600"); // Xóa lớp CSS khi rời chuột khỏi phần tử
      });
      hai.addEventListener("mouseenter", () => {
          hai.classList.add("hover:bg-blue-700"); // Thêm lớp CSS khi rê chuột vào
      });
      
      hai.addEventListener("mouseleave", () => {
          hai.classList.remove("hover:bg-blue-700"); // Xóa lớp CSS khi rời chuột khỏi phần tử
      });


      const handleClickOutside = (event) => {
        if (!black.contains(event.target)) {
          white.style.position = "";
          white.style.top = "";
          white.style.left = "";
          white.style.width = "";
          white.style.height = "";
          white.style.backgroundColor = "";
          white.style.zIndex = "";
          black.style.position = "";
          black.style.zIndex = "";
          document.removeEventListener("click", handleClickOutside);
        }
      };
    };
    initSlider();
  }, []);

  return (
    <div className="relative">
      <div id="black" className="  w-full  ">
        <div className="ml-5 flex relative translate-y-2  items-center w-[160px] space-x-2 text-slate-100  bg-sky-500 font-bold px-6 py-1 rounded-t-lg    ">
          <GiCommercialAirplane />
          <p>Vé máy bay</p>
        </div>
        <div className=" ">
          <div
            className=" relative translate-y-2 border-[1px] border-blue-600   bg-cover rounded-t-lg h-[100%] bg-no-repeat flex text-[14px] font-bold  items-center  justify-between bg-sky-500 pt-6 pb-5 px-4 "
            style={{
              backgroundImage:
                "url(https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/1/19d70f54525b8bd167113e49116b5c7d.png)",
            }}
          >
            <div className=" flex text-slate-100 space-x-4">
              <button
                id="mot"
                type="button"
                onClick={() => {
                  setShowResult(true);
                  setShowResult1(false);
                }}
                className=" button  px-2 rounded-md  bg-sky-500 py-1 z-50 border border-white"
              >
                Một chiều / khứ hồi
              </button>
              <button
                id="hai"
                type="button"
                onClick={() => {
                  setShowResult(false);
                  setShowResult1(true);
                }}
                className="button px-2 rounded-md   py-1 z-50 border border-white"
              >
                Nhiều thành phố
              </button>
            </div>
            <button className="px-2 rounded-md text-blue-500 bg-slate-100 py-1 border border-white flex items-center space-x-2">
              < FaMapMarkerAlt />
              <span> Mở bản đồ</span>
            </button>
          </div>

          {showResult && (
            <div className="border-[1px] border-blue-600 rounded-b-md ">
              <div className=" px-5 pt-5 bg-white rounded-lg relative ">
                <div className="flex relative space-x-5">
                  <div>{<ChooseFlight />}</div>
                  <div>{<ChooseFlight2 />}</div>
                  <div className="w-[100%]">{<PassengerFlight />}</div>
                </div>
                <div className="flex relative space-x-5 mt-12 ">
                  <div className="w-[600px]">{<DateFlight1 />}</div>
                  <div className="w-[600px]">{<DateFlight2 />}</div>
                  <div className="w-[100%]">{<SelectFlight />}</div>
                </div>
                <div className="flex justify-end  mt-4">
                  <div className="flex items-center  rounded-lg font-bold space-x-2 text-slate-100 justify-center py-2 bg-orange-600 w-[380px]  mb-4 ">
                    <HiMagnifyingGlass />
                    <p>Tìm chuyến bay</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {showResult1 && (
            <div className="  relative top-[-11px] mt-[11px]  rounded-b-md mb-10 ">
              <div className=" px-5 pt-5 top  bg-white rounded-lg  border-[1px] border-blue-600  w-[960px]  ">
                <div className="flex relative space-x-5 mt-5">
                  <div>{<ChooseFlight />}</div>
                  <div>{<ChooseFlight2 />}</div>
                  <div className="w-[100%]">{<DateFlight1 />}</div>
                </div>
                <div className="flex relative space-x-5 mt-7">
                  <div className="mt-[22px]">{<ChooseFlight3 />}</div>
                  <div className="mt-[22px]">{<ChooseFlight4 />}</div>
                  <div className="w-[100%]">{<DateFlight2 />}</div>
                </div>
                <p className="flex items-center space-x-2 text-blue-500 font-bold ml-5 my-4">
                  <AiOutlinePlus className=" text-blue-800" />
                  <span>Thêm chuyến bay khác</span>
                </p>
                <div className="flex relative space-x-5">
                  <div className="w-[100%] font-medium">
                    {<PassengerFlight />}
                  </div>
                  <div className="w-[100%] font-medium">{<SelectFlight />}</div>
                </div>
                <p className="text-[14px] font-medium mt-3">
                  <span>Chuyến bay nhiều thành phố là gì?</span>
                  <span className="text-blue-500"> Tìm hiểu thêm tại đây.</span>
                </p>

                <div className="flex justify-end  mt-4">
                  <div className="flex items-center  rounded-lg font-bold space-x-2 text-slate-100 justify-center py-2 bg-orange-600 w-[380px]  mb-4 ">
                    <HiMagnifyingGlass />
                    <p>Tìm chuyến bay</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OneCity;
