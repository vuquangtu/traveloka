import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainSlide from "../../mainSlide";
import { TfiEmail } from "react-icons/tfi";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function MainHomeDefault() {
  return (
    <>
      <main className=" pt-[50px] px-[5%]  font-bold bg-white  rounded-t-[40px]">
        <div>
          <h1 className=" font-bold text-[25px] mb-[20px] text-slate-700 ">
            Register to enjoy this promo 👇🏻
          </h1>
          <img
            className="rounded-md mb-[5%]"
            src="https://ik.imagekit.io/tvlk/image/imageResource/2024/03/28/1711599868743-efdeb17317af3f0118a4b16d8eaa9de0.jpeg?tr=q-75,w-1280"
            alt=""
          />
          <img
            className="rounded-md mb-[6%]"
            src="https://ik.imagekit.io/tvlk/image/imageResource/2024/03/27/1711527842794-8f3dbeddf2c0491f341abb537d53200c.png?tr=q-75,w-1280"
            alt=""
          />
          <img
            className="rounded-md "
            src="https://ik.imagekit.io/tvlk/image/imageResource/2024/03/27/1711528772107-72abb28e54c271a6014bf74d7e3af8e5.png?tr=q-75,w-1280"
            alt=""
          />
          <div className="my-[80px] text-center">
            <MainSlide />
          </div>
          <img
            className="rounded-md mb-[3%]"
            src="https://ik.imagekit.io/tvlk/image/imageResource/2024/04/01/1711933618534-c6b94445c7539bca07ef1075889f238d.jpeg?tr=q-75,w-1280"
            alt=""
          />
          <h1 className=" text-slate-700 font-bold text-[25px] mb-[20px]">
            Nâng tầm chuyến đi theo cách bạn muốn
          </h1>
          <ul className="flex space-x-2">
            <li className=" shadow-xl rounded-md space-y-2 pb-2">
              <img
                className="rounded-md"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2023/06/20/1687227865303-92e8a9f380d1ac6cc541dee7a4d49a88.png?tr=q-75,w-256"
                alt=""
              />
              <p className="text-slate-900">Chuyến đi và Danh thắng</p>
            </li>
            <li className=" shadow-xl rounded-md space-y-2 pb-2">
              <img
                className="rounded-md"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2023/06/20/1687227867984-3c8e84185751a99679e258b0e16bc914.png?tr=q-75,w-256"
                alt=""
              />
              <p>Fun Activities</p>
            </li>
            <li className=" shadow-xl rounded-md space-y-2 pb-2">
              <img
                className="rounded-md"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2023/06/20/1687227873526-2c86a7c100d5a4bd96603a7eac3ec60a.png?tr=q-75,w-256"
                alt=""
              />
              <p>Travel Insurance</p>
            </li>
            <li className=" shadow-xl rounded-md space-y-2 pb-2">
              <img
                className="rounded-md"
                src=" https://ik.imagekit.io/tvlk/image/imageResource/2024/03/13/1710299294373-6a6663cee8a14bddecdce31879e096e9.webp?tr=q-75,w-256"
                alt=""
              />
              <p>Đặt trước, Trả sau</p>
            </li>
          </ul>
          <div className=" flex mt-[50px] mb-[30px] space-x-4 ">
            <img
              className="h-[25px] "
              src="https://ik.imagekit.io/tvlk/image/imageResource/2024/03/21/1711002136291-9aa9885d81f33cafc62a860c5fc2e506.png?_src=imagekit&tr=q-40,h-24"
              alt=""
            />
            <h1 className=" font-bold text-[25px] text-slate-700  ">
              Các chuyến bay phổ biến
            </h1>
          </div>
          <ul className="flex space-x-4 text-blue-500 items-center">
            <li className="bg-[rgba(1,148,243,1.00)] p-2 rounded-full text-white">
              Việt Nam
            </li>
            <li className="p-2 rounded-full bg-slate-100">Thái Lan</li>
            <li className="p-2 rounded-full bg-slate-100">Singapore</li>
            <li className="p-2 rounded-full bg-slate-100">Malaysia</li>
            <li className="p-2 rounded-full bg-slate-100">Hàn Quốc</li>
          </ul>
          <div className="flex space-x-2 my-6">
            <div className="relative w-[300px] shadow-xl">
              <p className="absolute top-0 left-0 text-white bg-black p-1 rounded-tl-md rounded-br-md">
                ONEWAY
              </p>
              <img
                className="rounded-md"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2019/03/13/1552466374013-a57dacdbc92a9c508c1dbc4c4ceeb5cd.jpeg?tr=q-75,w-320"
                alt=""
              />
              <div className="flex items-center space-x-1  ">
                <img
                  src="https://ik.imagekit.io/tvlk/image/imageResource/2021/03/08/1615183128719-eb20dcaed13e5b74629b222345995b7a.png?tr=q-75,w-24,h-24"
                  alt=""
                />
                <p className="text-[12px] text-slate-500">Vietravel Airlines</p>
              </div>
              <h1 className="mt-[20px] text-slate-900 text-[15px] mb-[3px]">
                Hà Nội-TP HCM
              </h1>
              <p className="text-[12px] text-slate-500">6 Tháng 5 2024</p>
              <p className="ml-1 text-orange-500">VND1.327.441</p>
            </div>
            <div className="relative w-[300px] shadow-xl">
              <p className="absolute top-0 left-0 text-white bg-black p-1 rounded-tl-md rounded-br-md">
                ONEWAY
              </p>
              <img
                className="rounded-md"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2021/11/25/1637851894841-e5d7f8e7abc30ff0f1f07f6d7a64eac1.png?tr=q-75,w-320"
                alt=""
              />
              <div className="flex items-center space-x-1  ">
                <img
                  src="https://ik.imagekit.io/tvlk/image/imageResource/2021/03/08/1615183128719-eb20dcaed13e5b74629b222345995b7a.png?tr=q-75,w-24,h-24"
                  alt=""
                />
                <p className="text-[12px] text-slate-500">Vietravel Airlines</p>
              </div>
              <h1 className="mt-[20px] text-slate-900 text-[15px] mb-[3px]">
                Hà Nội-Đà Nẵng
              </h1>
              <p className="text-[12px] text-slate-500">17 Tháng 10 2024</p>
              <p className="ml-1 text-orange-500">VND917.040</p>
            </div>
            <div className="relative w-[300px] shadow-xl">
              <p className="absolute top-0 left-0 text-white bg-black p-1 rounded-tl-md rounded-br-md">
                ONEWAY
              </p>
              <img
                className="rounded-md"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2021/11/25/1637851505067-e5745050cc951e5c9c11b01c1d0ff920.png?tr=q-75,w-320"
                alt=""
              />
              <div className="flex items-center space-x-1  ">
                <img
                  src="https://ik.imagekit.io/tvlk/image/imageResource/2021/03/08/1615183128719-eb20dcaed13e5b74629b222345995b7a.png?tr=q-75,w-24,h-24"
                  alt=""
                />
                <p className="text-[12px] text-slate-500">Vietravel Airlines</p>
              </div>
              <h1 className="mt-[20px] text-slate-900 text-[15px] mb-[3px]">
                TP HCM-Hà Nội
              </h1>
              <p className="text-[12px] text-slate-500">23 Tháng 10 2024</p>
              <p className="ml-1 text-orange-500">VND1.035.839</p>
            </div>
            <div className="relative w-[300px] shadow-xl">
              <p className="absolute top-0 left-0 text-white bg-black p-1 rounded-tl-md rounded-br-md">
                ONEWAY
              </p>
              <img
                className="rounded-md"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2021/11/25/1637851600794-f02453e5e7d6bc0533503519b44bd817.png?tr=q-75,w-320"
                alt=""
              />
              <div className="flex items-center space-x-1  ">
                <img
                  src="https://ik.imagekit.io/tvlk/image/imageResource/2021/03/08/1615183128719-eb20dcaed13e5b74629b222345995b7a.png?tr=q-75,w-24,h-24"
                  alt=""
                />
                <p className="text-[12px] text-slate-500">Vietravel Airlines</p>
              </div>
              <h1 className="mt-[20px] text-slate-900 text-[15px] mb-[3px]">
                Hà Nội-TP HCM
              </h1>
              <p className="text-[12px] text-slate-500">10 Tháng 9 2024</p>
              <p className="ml-1 text-orange-500">VND595.241</p>
            </div>
          </div>
          <div className=" m-auto w-[250px] bg-slate-100 h-[40px] flex items-center justify-center rounded-md text-blue-500  ">
            <div>
              <span>Đặt vé máy bay ngay</span>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div>
          <div className="flex space-x-3 mt-10 ">
            <img
              className="h-[25px] mt-[3px] "
              src="https://ik.imagekit.io/tvlk/image/imageResource/2023/06/01/1685631988109-4e2f068146d14d35aa47c5e9e9add5ff.png?_src=imagekit&tr=q-40,h-24"
              alt=""
            />
            <p className=" text-slate-700 font-bold text-[25px] mb-[20px]">
              Tái khám phá bản thân ở châu Á và những nơi khác
            </p>
          </div>
          <div className="grid gap-6 grid-cols-3 ">
            <div className="relative  h-[210px] w-[390px]">
              <img
                className="rounded-md w-full h-full"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2023/06/14/1686721948003-7928a0b56734caaca663b9239cde96da.png?tr=q-75,w-427"
                alt=""
              />
              <div className="absolute top-[30px] left-[20px] text-white">
                <p className="text-[25px]">Việt Nam</p>
                <p className="text-[12px]">16,763 accommodations</p>
              </div>
            </div>
            <div className="relative  h-[210px] w-[390px]">
              <img
                className="rounded-md w-full h-full"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2023/05/29/1685329328194-3d7df8cb31d4a3bf69f10209ba8402ec.png?tr=q-75,w-427"
                alt=""
              />
              <div className="absolute top-[30px] left-[20px] text-white">
                <p className="text-[25px]">Thái lan</p>
                <p className="text-[12px]">20,609 accommodations</p>
              </div>
            </div>
            <div className="relative  h-[210px] w-[390px]">
              <img
                className="rounded-md w-full h-full"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2023/06/14/1686722015787-18de277528bf9856fc61a3be4cfe4a4e.png?tr=q-75,w-427"
                alt=""
              />
              <div className="absolute top-[30px] left-[20px] text-white">
                <p className="text-[25px]">Singapore</p>
                <p className="text-[12px]">763 accommodations</p>
              </div>
            </div>
            <div className="relative  h-[210px] w-[390px]">
              <img
                className="rounded-md w-full h-full"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2023/05/29/1685328965749-d622f5f8496a6dc11d9b1aca65c6d58e.png?tr=q-75,w-427"
                alt=""
              />
              <div className="absolute top-[30px] left-[20px] text-white">
                <p className="text-[25px]">Malaysia</p>
                <p className="text-[12px]">6,763 accommodations</p>
              </div>
            </div>
            <div className="relative  h-[210px] w-[390px]">
              <img
                className="rounded-md w-full h-full"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2023/06/01/1685626590562-f7fc1564035ab9e353099a96c659b5c1.png?tr=q-75,w-427"
                alt=""
              />
              <div className="absolute top-[30px] left-[20px] text-white">
                <p className="text-[25px]">Indonesia</p>
                <p className="text-[12px]">56,063 accommodations</p>
              </div>
            </div>
            <div className="relative  h-[210px] w-[390px]">
              <img
                className="rounded-md w-full h-full"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2023/06/01/1685626793768-ea048e16aff039145ae995a58a35cffd.png?tr=q-75,w-427"
                alt=""
              />
              <div className="absolute top-[30px] left-[20px] text-white">
                <p className="text-[25px]">Hàn quốc</p>
                <p className="text-[12px]">9,763 accommodations</p>
              </div>
            </div>
          </div>
          <h1 className="mt-[50px] text-[25px] text-slate-800">
            Không thể không đến
          </h1>
          <p className="text-[15px] text-gray-500 mt-3 mb-6">
            Đi cùng người thân vừa vui vừa thích
          </p>
          <ul className="flex space-x-5 text-blue-600 items-center text-[14px] ">
            <li className="bg-[rgba(1,148,243,1.00)] p-2 rounded-full text-white">
              Attraction
            </li>
            <li className="p-2 rounded-full bg-slate-100">Tour</li>
            <li className="p-2 rounded-full bg-slate-100">Playground</li>
          </ul>
          <div className="flex space-x-2 my-6">
            <div className="relative w-[300px] h-[200px] shadow-xl">
              <p className="absolute text-[14px] top-0 left-0 text-white bg-red-400 p-1 rounded-tl-md rounded-br-md">
                Hòa Vang
              </p>
              <img
                className="rounded-md h-full w-full"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2019/03/13/1552466374013-a57dacdbc92a9c508c1dbc4c4ceeb5cd.jpeg?tr=q-75,w-320"
                alt=""
              />

              <h1 className="mt-[15px] text-slate-900 text-[13px] mb-[3px]">
                Sun World Ba Na Hills tại Đà Nẵng
              </h1>
              <p className="text-[12px] text-slate-500 line-through">
                VND 200.000
              </p>
              <p className=" text-orange-500 text-[12px]"> VND 160.000</p>
            </div>
            <div className="relative w-[300px] h-[200px] shadow-xl">
              <p className="absolute text-[14px] top-0 left-0 text-white bg-red-400 p-1 rounded-tl-md rounded-br-md">
                Vĩnh Nguyên
              </p>
              <img
                className="rounded-md h-full w-full"
                src="https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2000684219858/VinWonders-Nha-Trang-Tickets--80b15ee9-1b00-482d-a01d-566adef9bc25.jpeg?_src=imagekit&tr=c-at_max,h-569,q-60,w-320"
                alt=""
              />

              <h1 className="mt-[15px] text-slate-900 text-[13px] mb-[3px]">
                Vé VinWonDers Nha Trang
              </h1>
              <p className="text-[12px] text-slate-500 line-through">
                VND 100.000
              </p>
              <p className=" text-orange-500 text-[12px]"> VND 60.000</p>
            </div>
            <div className="relative w-[300px] h-[200px] shadow-xl">
              <p className="absolute text-[14px] top-0 left-0 text-white bg-red-400 p-1 rounded-tl-md rounded-br-md">
                Xã Thạch Tân
              </p>
              <img
                className="rounded-md h-full w-full"
                src="https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/4234684001188/Sun-World-Ba-Den-Mountain-38bdf6a2-36e7-49cf-9d87-73b3dec4b05e.jpeg?_src=imagekit&tr=c-at_max,h-569,q-60,w-320"
                alt=""
              />

              <h1 className="mt-[15px] text-slate-900 text-[13px] mb-[3px]">
                Sun World Bà Den Mountain
              </h1>

              <p className=" text-orange-500 text-[12px]"> VND 249.000</p>
            </div>
            <div className="relative w-[300px] h-[200px] shadow-xl">
              <p className="absolute text-[14px] top-0 left-0 text-white bg-red-400 p-1 rounded-tl-md rounded-br-md">
                Xã Gành Dầu
              </p>
              <img
                className="rounded-md h-full w-full"
                src="https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2000684220668/VinWonders-Phu-Quoc-Tickets-f08cf971-c544-46a8-a9eb-b6d64bc26651.jpeg?_src=imagekit&tr=c-at_max,h-569,q-60,w-320"
                alt=""
              />

              <h1 className="mt-[15px] text-slate-900 text-[13px] mb-[3px]">
                Vé vinwonders Phú Quốc
              </h1>

              <p className=" text-orange-500 text-[12px]"> VND 200.000</p>
            </div>
          </div>
        </div>
      </main>
      <main className=" px-[5%] bg-white font-bold pb-[7%] mt-5">
        <div>
          <div className=" m-auto mt-20 w-[150px] bg-slate-100 h-[40px] flex items-center justify-center rounded-md text-blue-500  ">
            <div>
              <span>Xem tất cả</span>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div>
        </div>
        <div className="flex items-center mt-10 space-x-4">
          <img
            className="text-[25px] "
            src="https://ik.imagekit.io/tvlk/image/imageResource/2023/06/01/1685632370538-63ea09621bb19474f36a8e6a994f4ab9.png?_src=imagekit&tr=q-40,h-24"
            alt=""
          />
          <h1 className=" text-[24px] text-slate-800">
            Du hành quốc tế: nhận hướng dẫn
          </h1>
        </div>
        <div className=" w-full flex space-x-2 mt-5 relative">
          <div className="relative w-[235px] h-[290px] shadow-xl">
            <p className="absolute text-[14px] top-[220px] left-[20px] text-white   ">
              Bali
            </p>
            <p className="absolute text-[12px] top-[245px] left-[20px] text-white  ">
              Indonesia
            </p>

            <img
              className="rounded-md h-full w-full"
              src="https://ik.imagekit.io/tvlk/image/imageResource/2023/06/15/1686809745816-f79a1d39bd05dff74a28980cbb7875b1.png?tr=q-75,w-256"
              alt=""
            />
          </div>
          <div className="relative w-[235px] h-[290px] shadow-xl">
            <p className="absolute text-[14px] top-[220px] left-[20px] text-white   ">
              Bangkok
            </p>
            <p className="absolute text-[12px] top-[245px] left-[20px] text-white  ">
              Thailand
            </p>

            <img
              className="rounded-md h-full w-full"
              src="https://ik.imagekit.io/tvlk/image/imageResource/2023/06/15/1686809749394-d6cd1791d20b3255f25cb3fb7a191acc.png?tr=q-75,w-256"
              alt=""
            />
          </div>
          <div className="relative w-[235px] h-[290px] shadow-xl">
            <p className="absolute text-[14px] top-[220px] left-[20px] text-white   ">
              Seoul
            </p>
            <p className="absolute text-[12px] top-[245px] left-[20px] text-white  ">
              South Korea
            </p>

            <img
              className="rounded-md h-full w-full"
              src="https://ik.imagekit.io/tvlk/image/imageResource/2023/06/15/1686809753588-b7415ac732c452b9207632846e6c4c3b.png?tr=q-75,w-256"
              alt=""
            />
          </div>
          <div className="relative w-[235px] h-[290px] shadow-xl">
            <p className="absolute text-[14px] top-[220px] left-[20px] text-white   ">
              Istanbul
            </p>
            <p className="absolute text-[12px] top-[245px] left-[20px] text-white  ">
              Turkey
            </p>

            <img
              className="rounded-md h-full w-full"
              src="https://ik.imagekit.io/tvlk/image/imageResource/2023/06/15/1686809757422-818b6a6738fa9d78685617becf7e9428.png?tr=q-75,w-256"
              alt=""
            />
          </div>
          <div className="relative w-[235px] h-[290px] shadow-xl">
            <p className="absolute text-[14px] top-[220px] left-[20px] text-white   ">
              Liverpool
            </p>
            <p className="absolute text-[12px] top-[245px] left-[20px] text-white  ">
              United Kingdom
            </p>

            <img
              className="rounded-md h-full w-full"
              src="https://ik.imagekit.io/tvlk/image/imageResource/2023/06/15/1686809760542-61384b1b7393cf68b60b740abd903861.png?tr=q-75,w-256"
              alt=""
            />
          </div>
        </div>
        <h1 className=" text-[24px] text-slate-800 mt-[100px]">
          Lý do nên đặt chỗ với Traveloka?
        </h1>
        <div className="flex space-x-3 mt-6 ">
          <div className="flex w-[400px]  items-center justify-center p-3 space-x-2 rounded-md shadow-2xl">
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2023/06/14/1686718236517-bf9a3e5ffd872b781ba2e56e93fe8840.webp?tr=h-64,q-75,w-64"
              alt=""
            />
            <div>
              <p className="text-[16px]">Đáp ứng mọi nhu cầu của bạn</p>
              <p className="text-[14px] font-medium">
                Từ chuyến bay, lưu trú, đến điểm tham quan, bạn có thể tin chọn{" "}
                <span className="font-bold">sản phẩm hoàn chỉnh</span> và{" "}
                <span className="font-bold">Hướng Dẫn Du Lịch</span> của chúng
                tôi.
              </p>
            </div>
          </div>
          <div className="flex w-[400px]  items-center justify-center p-3 space-x-2 rounded-md shadow-2xl">
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2023/06/14/1686718238370-9ef6b6e0701e9074614951c0bd49930c.webp?tr=h-64,q-75,w-64"
              alt=""
            />
            <div>
              <p className="text-[16px]">Tùy chọn đặt chỗ linh hoạt</p>
              <p className="text-[14px] font-medium">
                Kế hoạch thay đổi bất ngờ? Đừng lo!{" "}
                <span className="font-bold">Đổi lịch</span> hoặc{" "}
                <span className="font-bold">Hoàn tiền</span> dễ dàng.
              </p>
            </div>
          </div>
          <div className="flex w-[400px]  items-center justify-center p-3 space-x-2 rounded-md shadow-2xl">
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2023/06/14/1686718240417-96131eb957c39a098a12d2d7926e3342.webp?tr=h-64,q-75,w-64"
              alt=""
            />
            <div>
              <p className="text-[16px]">Thanh toán an toàn và thuận tiện</p>
              <p className="text-[14px] font-medium">
                Tận hưởng{" "}
                <span className="font-bold">nhiều cách thanh toán an toàn</span>
                , bằng loại tiền thuận tiện nhất cho bạn.
              </p>
            </div>
          </div>
        </div>
        <h1 className=" text-[24px] text-slate-800 mt-[100px]">
          Bạn muốn khám phá điều gì?
        </h1>
        <div className="">
          <ul className="flex mt-8 text-[17px] text-slate-700 space-x-5">
            <li className="text-blue-500 underline decoration-4 underline-offset-[15px] hover:underline hover:decoration-4 hover:underline-offset-[15px] hover:decoration-blue-500">
              Các chặng bay hàng đầu
            </li>
            <li className="hover:underline hover:decoration-4 hover:underline-offset-[15px] hover:decoration-blue-500 ">
              Các khách sạn hàng đầu
            </li>
            <li className="hover:underline hover:decoration-4 hover:underline-offset-[15px] hover:decoration-blue-500">
              Hoạt động Tham quan và Giải trí
            </li>
          </ul>
          <div className=" border mt-3"></div>
        </div>

        <div className="mt-7 flex text-[14px] font-medium  space-x-[100px] text-slate-500">
          <ul className="space-y-5">
            <li className="hover:text-blue-600">Vé máy bay đi Đà Nẵng</li>
            <li className="hover:text-blue-600">Vé máy bay đi Phú Quốc</li>
            <li className="hover:text-blue-600">Vé máy bay đi Nha Trang</li>
            <li className="hover:text-blue-600">Vé máy bay đi Hà Nội</li>
            <li className="hover:text-blue-600">Vé máy bay đi Đà Lạt</li>
            <li className="hover:text-blue-600">Vé máy bay đi Hải Phòng</li>
          </ul>
          <ul className="space-y-5">
            <li className="hover:text-blue-600">
              Vé máy bay đi Sài Gòn-Hà Nội
            </li>
            <li className="hover:text-blue-600">
              Vé máy bay đi Sài Gòn-Đà Nẵng
            </li>
            <li className="hover:text-blue-600">
              Vé máy bay đi Sài Gòn-Phú Quốc
            </li>
            <li className="hover:text-blue-600">
              Vé máy bay đi Sài Gòn-Nha Trang
            </li>
            <li className="hover:text-blue-600">
              Vé máy bay đi Sài Gòn-Đà Lạt
            </li>
            <li className="hover:text-blue-600">Vé máy bay đi Singapore</li>
          </ul>
          <ul className="space-y-5">
            <li className="hover:text-blue-600">
              Vé máy bay đi Hà Nội-Sài Gòn
            </li>
            <li className="hover:text-blue-600">
              Vé máy bay đi Hà Nội-Phú Quốc
            </li>
            <li className="hover:text-blue-600">
              Vé máy bay đi Hà Nội-Đà Nẵng
            </li>
            <li className="hover:text-blue-600">
              Vé máy bay đi Hà Nội-Nha Trang
            </li>
            <li className="hover:text-blue-600">Vé máy bay đi Hà Nội-Đà Lạt</li>
            <li className="hover:text-blue-600">Vé máy bay đi Sài Gòn</li>
          </ul>
          <ul className="space-y-5">
            <li className="hover:text-blue-600">
              Vé máy bay đi Đà Nẵng-Hà Nội
            </li>
            <li className="hover:text-blue-600">
              Vé máy bay đi Đà Nẵng-Sài Gòn
            </li>
            <li className="hover:text-blue-600">
              Vé máy bay đi Hồ Chí Minh-Bangkok
            </li>
            <li className="hover:text-blue-600">
              Vé máy bay đi Hồ Chí Minh-Singapore
            </li>
            <li className="hover:text-blue-600">
              Vé máy bay đi Hà Nội-Bangkok
            </li>
            <li className="hover:text-blue-600">Vé máy bay đi Bangkok</li>
          </ul>
        </div>
      </main>
      <div className=" relative  flex  w-full  pl-[60px] space-x-[80px] bg-[url('https://ik.imagekit.io/tvlk/image/imageResource/2023/06/08/1686193661791-d09fe628fd8f9b6c377a91b30628d0b2.png?tr=q-75')] h-[400px]   bg-center bg-no-repeat  ">
        <img
          className="pt-10"
          src="https://ik.imagekit.io/tvlk/image/imageResource/2023/07/03/1688370082420-ea9f0f5530ce9e6a7b36fcec8aa60664.png?tr=q-75"
          alt=""
        />
        <div className="w-[600px] text-white font-bold pt-3 h-full">
          <p className="text-[33px] font-bold leading-10 text-white ">
            Luôn được cập nhật về các lời khuyên du lịch, đề xuất và khuyến mãi
            mới nhất.
          </p>
          <div className="flex space-x-5 mt-5 h-[40px] ">
            <div className="flex items-center bg-white space-x-2 py-1 px-2 rounded-md outline outline-2 outline-cyan-200">
              <label className="text-blue-500 text-[22px]" htmlFor="">
                <TfiEmail className="rounded-md" />
              </label>
              <input
                className="h-full w-[430px] outline-none "
                type="text"
                placeholder="Địa chỉ email của bạn"
              />
            </div>
            <button className="bg-orange-500 h-full p-2  rounded-md">
              {" "}
              Đăng ký tin
            </button>
          </div>
          <p className="mt-[60px] text-[20px] w-[550px] leading-6">
            Có chuyến đi mơ ước của bạn trong tầm tay của bạn. Tải xuống ứng
            dụng.
          </p>
          <div className="flex  h-[80px] mt-2 space-x-5 items-center rounded-md">
            <img
              className=" h-full border-[5px] rounded-md border-slate-300 "
              src="https://ik.imagekit.io/tvlk/image/imageResource/2023/06/05/1685932333390-f442fb93a4dc254d3c4f6771dd04b4ad.png?tr=q-75"
              alt=""
            />
            <img
              className=" h-[40px]"
              src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/f/f519939e72eccefffb6998f1397901b7.svg"
              alt=""
            />
            <img
              className=" h-[40px]"
              src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/1/18339f1ae28fb0c49075916d11b98829.svg"
              alt=""
            />
          </div>
        </div>
        <img
          className=" h-[110px] absolute right-0 bottom-0"
          src="https://ik.imagekit.io/tvlk/image/imageResource/2023/06/05/1685932290700-ea7123964ddb7be49d634302d707eede.webp?tr=q-75"
          alt=""
        />
      </div>
    </>
  );
}

export default MainHomeDefault;
