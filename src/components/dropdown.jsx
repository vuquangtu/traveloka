import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleDropdown,
  selectDropdownState,
} from "../redux/headerSlice/dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function DropDown() {
  const isOpen = useSelector(selectDropdownState);
  const dispatch = useDispatch();

  const handleDropdownToggle = () => {
    dispatch(toggleDropdown());
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdownButton = document.getElementById("button");
      const dropdownContent = document.getElementById("content");

      if (
        !dropdownButton.contains(event.target) &&
        !dropdownContent.contains(event.target)
      ) {
        dispatch(toggleDropdown());
        // Đóng dropdown khi click bên ngoài
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="  relative ">
      <button
        id="button"
        onClick={handleDropdownToggle}
        className="  rounded-md hover:bg-black/25 flex items-center p-[6px] space-x-2   "
      >
        <span>More</span>
        <FontAwesomeIcon icon={faChevronDown} className="h-[8px] " />
      </button>

      {isOpen && (
        <div
          id="content"
          className=" w-[160px] border py-[10px] absolute -translate-x-[60%] rounded-md bg-white text-slate-600  "
        >
          <div>
            <a
              className="flex justify-center space-x-1 hover:bg-slate-300 py-[10px] "
              href=""
            >
              <img
                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/c69bbbaab19285dd98e27ec11d83bf33.svg"
                alt=""
              />
              <span>Combo tiết kiệm</span>
            </a>
          </div>
          <div>
            <a
              className="flex justify-center space-x-1 hover:bg-slate-300 py-[10px]"
              href=""
            >
              <img
                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/b5ba7b36551c2499565d55c265f5f9e7.svg"
                alt=""
              />
              <span>bảo Hiểm du lịch</span>
            </a>
          </div>
          <div>
            <a
              className="flex justify-center space-x-1 pr-[10px] hover:bg-slate-300 py-[10px]"
              href=""
            >
              <img
                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/e/e676ec2c54d3d081691ff29b7fb9a97e.svg"
                alt=""
              />
              <span>Phiếu quà tặng</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropDown;
