import { useState,useEffect } from "react";
import DatePicker from "react-datepicker";
import { FaRegCalendarDays } from "react-icons/fa6";

import "react-datepicker/dist/react-datepicker.css";

function DropDownDate1() {
  const [selectData1, setSelectData1] = useState(null);
  const [dateCurrent,setDateCurrent]=useState(null);
  
  useEffect(() => {
    const currentDate = new Date();
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + 2);
    setDateCurrent(nextDay);
   
    setSelectData1(nextDay);
  }, []);

  const handleChange = (date) => {
    setDateCurrent(date);
    setSelectData1(date);
    console.log(selectData1);
  };

  return (
    <div className=""  >
      <p className="text-[14px] mb-2">Khứ hồi</p>
      <div className="relative">
      <FaRegCalendarDays className="absolute top-3 left-3 z-[1] text-blue-500 text-[25px]" />
      <DatePicker
       className="h-[50px] text-slate-800  w-[250px] outline-0 pl-[50px] rounded-r-2xl border-[3px] border-slate-500 border-l-2 "
        selected={dateCurrent }
        onChange={handleChange}
        dateFormat="dd/MM/yyyy"
      />
      </div>
    </div>
  );
}

export default DropDownDate1;
