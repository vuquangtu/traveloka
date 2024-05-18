import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { FaRegCalendarDays } from "react-icons/fa6";

import "react-datepicker/dist/react-datepicker.css";

function DropDownDate1() {
  const [selectData1, setSelectData1] = useState(null);
  const [dateCurrent, setDateCurrent] = useState(null);

  useEffect(() => {
    const currentDate = new Date();
    setDateCurrent(currentDate);
    setSelectData1(currentDate);
  }, []);

  const handleChange = (date) => {
    setDateCurrent(date);
    setSelectData1(date);
    console.log(selectData1);
  };

  return (
    <div className="">
      <p className="text-[14px] text-slate-300 mb-2">Ngày đi</p>
      <div className="relative">
        <FaRegCalendarDays className="absolute top-3 left-3 z-[1] text-blue-500 text-[25px]" />
        <DatePicker
          className="h-[50px] text-slate-800 w-[250px] outline-0 pl-[50px] rounded-l-2xl border-[3px] border-slate-500 border-r-0"
          selected={dateCurrent}
          onChange={handleChange}
          dateFormat="dd/MM/yyyy"
        />
      </div>
    </div>
  );
}

export default DropDownDate1;
