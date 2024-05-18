import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { CiCalendarDate } from "react-icons/ci";


import "react-datepicker/dist/react-datepicker.css";

function DateFlight3() {
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
    <div className="relative w-[100%] text-slate-900 rounded-lg  ">
      <div className="flex items-center font-medium   space-x-2 border-b-[1px] border-slate-400 hover:border-slate-800 ">
      <CiCalendarDate className="text-[20px]" />
        
        <DatePicker
        
          className="button h-[44px] outline-0     "
          selected={dateCurrent}
          onChange={handleChange}
          dateFormat="dd/MM/yyyy "
        />
      </div>
    </div>
  );
}

export default DateFlight3;
