import DropDown from "../../dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faUser,
  faHotel,
  faPlane,
  faCar,
  faTruckPlane,
  faTruckMoving,
  faPersonSnowboarding,
  faBars,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../../context/AuthProvider";
import { useContext } from "react";

function HeaderHomeDefault() {
  const { currentUser: user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error("Error during logout:", error);
    }
    window.location.href = "/";
  };
  return (
    <>
      <div
        id="header"
        className="  px-[6%] font-bold  pt-[3px] sticky top-0 z-20 text-slate-100 w-[100vw]  "
      >
        <div className="flex justify-between h-[10%]  items-center ">
          <img
            id="img"
            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/f/fbab4f587da2242fbe9858fe3e5ba717.svg"
          />

          <div className="flex space-x-10 items-center  ">
            <div className="flex items-center space-x-2 hover:bg-black/35 p-2 rounded-md ">
              <img
                className=" "
                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a3478fc6e57b8681609c1458bd50cbb9.svg"
              />

              <div className="flex text-[14px] font-bold  space-x-1   ">
                <p>VI</p>
                <div
                  id="a"
                  className="bg-white w-[2px] h-[14px] mt-[5px]  "
                ></div>
                <p>VND</p>
              </div>
            </div>
            <ul className="flex space-x-6 text-[14px]  ">
              <li className="hover:bg-black/35 p-2 rounded-md ">Khuyến mãi</li>
              <li className="hover:bg-black/35 p-2 rounded-md ">Hỗ trợ</li>
              <li className="hover:bg-black/35 p-2 rounded-md ">
                Hợp tác với chúng tôi
              </li>
              <li className="hover:bg-black/35 p-2 rounded-md ">
                Đặt chổ của tôi
              </li>
            </ul>
            {!user ? (
              <div className="flex space-x-1 ">
                <div>
                  <a
                    id="login"
                    className="flex items-center space-x-3 border border-white rounded-md p-[7px] text-[14px]  hover:bg-black/35 "
                    href=""
                  >
                    <FontAwesomeIcon
                      id="icon"
                      icon={faUser}
                      className="h-[13px] text-white"
                    />
                    <Link to={"/login"}>Đăng nhập</Link>
                  </a>
                </div>
                <div>
                  <Link
                    to={"/register"}
                    className="flex items-center space-x-3 border border-sky-500 rounded-md bg-sky-500 p-[7px] text-[14px] px-[15px] hover:bg-sky-600 text-white  "
                    href=""
                  >
                    Đăng ký
                  </Link>
                </div>
              </div>
            ) : (
              <button className="  flex  space-x-1 hover:bg-black/40 items-center p-2 rounded-md box-border   ">
                <div className=" h-[24px] bg-blue-400 w-5 flex items-center justify-center rounded-full  ">
                  <FontAwesomeIcon icon={faUser} className="h-[11px]  " />
                </div>
                <p className="text-[14px]">
                  {user?.email || user?.displayName}
                </p>

                <div
                  id="b"
                  className="bg-white w-[2px] h-[14px] mt-[5px]  "
                ></div>
                <img
                  className="h-4"
                  src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/c00ab1f427ddf2519a3e080d9d9c1436.svg"
                  alt=""
                />
                <p>0</p>
                <FontAwesomeIcon icon={faChevronDown} className="h-[12px]  " />
                <button
                  onClick={handleLogout}
                  className="hover:text-blue-200 hover:translate-y-[-1px] bg-transparent  text-white"
                >
                  Đăng xuất
                </button>
              </button>
            )}
          </div>
        </div>

        <div className="space-x-6 flex pt-[2px] text-[14px]  h-[60px] items-center    ">
          <ul className="flex space-x-6 items-center   ">
            <li className="hover:bg-black/25 p-2 rounded-md ">
              <Link to={"/hotels"}>Khách sạn</Link>
            </li>
            <Link to="flight">
              <li className="hover:bg-black/25 p-2 rounded-md">Vé máy bay</li>
            </Link>
            <li className="hover:bg-black/25 p-2 rounded-md">Vé xe khách</li>
            <li className="hover:bg-black/25 p-2 rounded-md">
              Đưa đón sân bay
            </li>
            <li className="hover:bg-black/25 p-2 rounded-md">Cho thuê xe</li>
            <li className="hover:bg-black/25 p-2 rounded-md">
              Hoạt động và vui chơi
            </li>
          </ul>
          <div className=" relative  flex items-center ">{<DropDown />}</div>
        </div>
      </div>

      <header className=" pb-3 font-bold  text-slate-300   ">
        <h1 className=" text-center text-[33px] pt-[15px] text-slate-100 mb-8">
          Từ Đông Nam Á Đến Thế Giới, Trong Tầm Tay Bạn
        </h1>
        <ul className="flex justify-center space-x-5 font-bold text-[16px] mb-2 ">
          <li className=" rounded-full  ">
            <a
              href=""
              className="flex space-x-2 items-center hover:outline-1 hover:outline hover:outline-white  hover: rounded-full hover:text-slate-100 py-2 px-3  "
            >
              <FontAwesomeIcon icon={faHotel} className="h-[21px]" />
              <Link to={"/hotels"}>Khách sạn</Link>
            </a>
          </li>
          <li className=" rounded-full bg-white text-slate-800 ">
            <a href="" className="flex space-x-2 items-center py-2 px-3  ">
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
              <FontAwesomeIcon icon={faTruckPlane} className="h-[21px]" />
              <span>Đưa đón sân bay</span>
            </a>
          </li>
          <li className=" rounded-full  ">
            <a
              href=""
              className="flex space-x-2 items-center  py-2 px-3  hover:outline-1 hover:outline hover:outline-white  hover: rounded-full hover:text-slate-100 "
            >
              <FontAwesomeIcon icon={faTruckMoving} className="h-[21px]" />
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

        <div className="border-b-[1px] border-white mx-[5%]   "></div>
      </header>
    </>
  );
}

export default HeaderHomeDefault;
