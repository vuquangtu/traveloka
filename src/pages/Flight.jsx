import "./Flight.css";
import { useEffect } from "react";
import { MdOutlineChevronLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import OneCity from "../components/componentFlight2/oneCity";
import Header from "../components/layout/public//header";
import Footer from "../components/layout/public/footer";

function Flight() {
  useEffect(() => {
    const initSlider = () => {
      const sliderButton = document.querySelectorAll(
        ".slider-wrapper .slide-button"
      );

      const A = document.getElementById("A");

      const imgList = document.querySelector(".slider-wrapper .img-list");
      const scrollDistanceLeft = 650;
      const scrollDistanceRight = 550;
      sliderButton.forEach((button) => {
        button.addEventListener("click", () => {
          const direction = button.id === "left" ? -1 : 1;
          const scroll =
            direction === -1 ? scrollDistanceLeft : scrollDistanceRight;
          imgList.scrollBy({ left: scroll * direction, behavior: "smooth" });

          if (button.id === "right") {
            A.style.opacity = "0";
          } else {
            A.style.opacity = "1";
          }
        });
      });
    };
    initSlider();
  }, []);

  return (
    <div className=" container w-[100vw] ">
      <div  className=" sticky top-0 bg-slate-50 w-[100vw] z-10 h-[110px] shadow-lg ">{<Header/>}</div>
      <div id="white"></div>
      
      <div className="container relative  w-[100vw] ">
        <div className="h-full  w-screen slider-wrapper bg-blue-500 pt-2 pb-10      ">
          <div className=" img-list  overflow-auto  bg-blue-500  ">
            <div className="flex  relative translate-x-[650px] space-x-3 px-10">
              <div
                id="A"
                className="h-[150px]  font-medium space-y-5 text-slate-100 max-w-[472px]  left-[-500px] top-[50px]   absolute"
              >
                <p className=" text-[24px]">
                  Tìm và đặt vé máy bay khuyến mãi & vé giá rẻ chỉ với 3 bước
                  đơn giản!
                </p>
                <p className=" text-[18px]">
                  Khám phá ngay những ưu đãi tốt nhất dành cho bạn tại
                  Traveloka!
                </p>
              </div>
              <div className="flex space-x-3 mx-10">
                <img
                  className="h-[230px] w-[472px] object-cover rounded-md shadow-lg ml-[50px] "
                  src="https://ik.imagekit.io/tvlk/image/imageResource/2024/03/21/1710994049364-82de453830d7fb46a2ee86d347e45ff5.png?tr=h-230,q-75,w-472"
                  alt=""
                />
                <img
                  className="h-[230px] w-[472px] object-cover rounded-md shadow-lg"
                  src="https://ik.imagekit.io/tvlk/image/imageResource/2024/04/03/1712110808170-7edca175fb7944ab6335b4a817fdfaa6.jpeg?tr=h-230,q-75,w-472"
                  alt=""
                />
                <img
                  className="h-[230px] w-[472px] object-cover rounded-md shadow-lg"
                  src="https://ik.imagekit.io/tvlk/image/imageResource/2024/02/29/1709190883390-4928a82187a68e03236fe6f9c738342b.png?tr=h-230,q-75,w-472"
                  alt=""
                />
                <img
                  className="h-[230px] w-[472px] object-cover rounded-md shadow-lg"
                  src="https://ik.imagekit.io/tvlk/image/imageResource/2024/03/27/1711506129166-98d0ca7806ab5f2da51ae78f164d6c62.jpeg?tr=h-230,q-75,w-472"
                  alt=""
                />
                <img
                  className="h-[230px] w-[472px] object-cover rounded-md shadow-lg mr-10"
                  src="https://ik.imagekit.io/tvlk/image/imageResource/2024/03/28/1711593245144-dd7fb4f8ad868902de0b5c03b7b759b3.jpeg?tr=h-230,q-75,w-472"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-center space-x-10    text-slate-100 text-[12px] font-bold ite">
            <button id="left" className="z-[3] slide-button text-[30px]">
              <MdOutlineChevronLeft />
            </button>
            <a className="z-[3] " href="">Xem thêm khuyến mãi</a>
            <button id="right" className=" slide-button z-[3] text-[30px]">
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>
        <div className="w-[100vw] px-[200px] border-blue-500  relative top-[-65px]   ">
          {<OneCity />}
        </div>

      </div>
      <main className="mt-[60px] w-[100vw] pb-[50px]">
          <div className="flex mx-[15%] space-x-[50px] border-b-[1px] pb-[50px] border-b-slate-300">
            <div className="w-[280px]">
              <p className="font-bold text-[23px]">Đối tác hàng không</p>
              <p className="mt-[50px] font-medium text-[14px] text-slate-600">Đối tác hàng không nội địa và quốc tế</p>
              <p className="mt-3 font-medium">Những đối tác hàng không toàn cầu sẽ chắp cánh đưa bạn đến mọi địa điểm trên thế giới.</p>
            </div>
            <div>
              <ul className="grid grid-cols-6 gap-x-4 gap-y-6 items-center ">
                <li><img className="w-[82px] h-[40px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568212919133-2482812716f8f0532738cb4518387a0d.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[20px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2020/02/21/1582260108949-09348d284bb3fd1675614f43ab22a6d8.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[40px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2022/05/31/1653980299757-6784a77ebf1ee7eb39aded22846ad2ce.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[20px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2021/05/04/1620136036133-d74f19434de12f627b593e49a144ff6c.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[25px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2024/03/27/1711521123036-81bac1424c30a09447c6d835796c4d99.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[35px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2020/09/29/1601371217702-a33be2e4dcf4e85af9a3739912cc17d5.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[35px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568213286490-40a57162d59a3cdfd871be63262c1153.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[70px] h-[72px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568213291182-fd05076a8f71ea7f97ce37b307741c11.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[72px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568213296422-f6b5db2bbfea2e7ee39bd7b2a7bb612f.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[42px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568213462655-77c3422f91cface84d1833b02dda2ebd.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[72px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568213465059-3c99fbdba33fa1ca0e86b737fc99c6ba.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[42px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2023/08/23/1692767121750-0989e9604f930f7ff5ba0eaeea205bd5.jpeg?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[72px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568213567811-45f3f59fc0903fd5b92e7204728dea91.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[72px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2021/08/09/1628503297217-f74fe9efe3c7cd6b9af924f8142c61ac.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[72px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568213757871-6538d009d80f24afe25b6e4e3ed088b4.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[42px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568213762621-ccb5f1779c3e22e75aae42d4bf8ac419.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[72px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568213775464-6d9c127d5ca800b1e62b3f90be41f2de.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[42px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568213832708-a5ef5334cf7c4b248687d5c7011f4e3a.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[42px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568213834589-e5806d7b2b2e46d491f654f01c8b62d4.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[72px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568213837211-1dca13fc088dcc4b3eb297930e26fb69.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[72px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2021/05/04/1620136659344-3cf68dab2f7f9c886de7f6cdae8051e4.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[72px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2021/05/04/1620137555683-90b05a128324b8a83c70792e36545625.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[72px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2021/05/04/1620137565151-8b6e8b6dd617e6f0414af60ec4345215.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[72px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2021/05/04/1620137568853-e51b5219eb7de7652f4d85230caba3e4.png?tr=q-75,w-82" alt="" /></li>
              </ul>
            </div>
          </div>

          <div className="flex mx-[15%] space-x-[50px] my-[60px] border-b-[1px] border-b-slate-300 pb-[50px]">
            <div className="w-[280px] mt-2">
              <p className="font-bold text-[23px]">Đối tác thanh toán</p>
              <p className="mt-3 font-medium">Những đối tác thanh toán đáng tin cậy của chúng tôi sẽ giúp cho bạn luôn an tâm thực hiện mọi giao dịch một cách thuận lợi nhất!</p>
            </div>
            <div>
              <ul className="grid grid-cols-6 gap-x-4 gap-y-6 items-center ">
                <li><img className="w-[72px] h-[70px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214095745-950140744e8aaa6adc5f20c9070ec099.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[50px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214097094-68a8e4013fffaf9e3eb509ab01c443cd.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[5 0px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214118270-af8e9adc7a6c728d0df9c6590279dd48.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[30px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214099540-8d8fe069f3c5f30b42c6067bb66bf7b5.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[35px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214169837-2e167f93c28a31c50929ff25141af9c7.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[35px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214177572-608f357f64d150269e946dd01dc35f6c.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[35px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214182554-3d9057e89f3e8013c6b5623a0b3fd72d.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[70px] h-[32px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617778862778-43a622292ba164040d7264969df8725d.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[32px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214295854-530deeeeef4c927cf42574a9c4f18f26.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[32px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214297342-0f18b61b9af8466c550a64863c2f7fc9.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[32px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214299520-8bfa969c933323094f1f75162ae3fc0f.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[32px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214302804-b2cfe4878f3d09ee6b42932a00fac1be.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[22px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214562316-23d36ef9c331eafb5f6969537a71d0d8.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[22px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214563936-6db8e46b87125641ecfd380c4a164822.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[22px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214567374-346d8678df93256bb18d96411ce6824f.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[22px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214569849-e12071083ab6ec3538609ff5fe335d5a.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[22px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214572050-b1b7a34c36ff030bf048e132830f1cda.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[22px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214650335-23a8d04dcbda252547b163b96960a663.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[22px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214650797-b71c7513db77a56375191d6449cacae9.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[72px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214653058-c75030e2f2da18c41f83565052775d78.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[22px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214657064-78a53af4edb426e7b9e7ec29c315db23.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[22px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214667160-db526deb55b30b5a2dbdf5f603379e94.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[22px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214692424-fab15f0a3f501acb66bc11964dfdc1a4.png?tr=q-75,w-82" alt="" /></li>
                <li><img className="w-[82px] h-[22px] " src="https://ik.imagekit.io/tvlk/image/imageResource/2021/05/04/1620134924854-7aba4700113c851ccc974d04b13a07cc.png?tr=q-75,w-82" alt="" /></li>
              </ul>
            </div>
          </div>
          <h1 className="font-bold text-[35px] text-center " >Tại sao nên đặt vé máy bay & phòng khách sạn tại Traveloka?</h1>
          <div className="flex items-center justify-center space-x-10 pt-[40px]">
            <div className="w-[242px] mt-6   "> 
              <div className="flex justify-center">
              <img className="" src="https://ik.imagekit.io/tvlk/image/imageResource/2017/05/17/1495008633454-096d11a8cc4cbd60e1143f974757ef1a.png?tr=h-150,q-75,w-150" alt="" />
              </div>
              <p className="text-center mt-10  mb-5 font-bold text-[20px]">Kết quả tìm kiếm bao quát</p>
              <p className=" text-center  font-medium">Chỉ với một cú nhấp chuột, dễ dàng so sánh các chuyến bay của Vietnam Airlines, Jetstar, Vietjet và các chặng bay quốc tế khác với 100.000 đường bay ở châu Á Thái Bình Dương và châu Âu.</p>
            </div>
            <div className="w-[242px]    "> 
              <div className="flex justify-center">
              <img className="" src="https://ik.imagekit.io/tvlk/image/imageResource/2017/05/10/1494412638469-cb1624ec1f89097e71b0b4a1f542e851.png?tr=h-150,q-75,w-150" alt="" />
              </div>
              <p className="text-center mt-10  mb-5 font-bold text-[20px]">Phương thức thanh toán an toàn và linh hoạt</p>
              <p className=" text-center  font-medium">Giao dịch trực tuyến an toàn với nhiều lựa chọn như thanh toán tại cửa hàng tiện lợi, chuyển khoản ngân hàng, thẻ tín dụng đến Internet Banking. </p>
            </div>
          </div>
          <div className="mt-[70px] space-y-[60px]">
            <p className="font-bold text-[20px] text-center">Tại sao nên đặt vé máy bay với Traveloka?</p>
            <p className="text-[15px] font-bold text-center">Thoả sức vi vu cùng Traveloka siêu ứng dụng du lịch và tiện ích sống - Giải pháp đặt vé máy bay trực tuyến trọn gói</p>
            <div className="flex justify-center"><button className="bg-blue-600 p-2 rounded-lg text-slate-100 font-medium ">Xem thêm</button></div>
          </div>
          <h1 className="font-bold text-[20px] text-center mt-[100px]">Điểm đến phổ biến</h1>
          <div className="flex text-slate-600 mt-[50px] justify-center space-x-[100px] ">         
            <ul className="space-y-3">
              <li>Vé máy bay đi Đà Nẵng</li>
              <li>Vé máy bay đi Hà Nội</li>
              <li>Vé máy bay đi Vinh</li>
              <li>Vé máy bay đi Singapore</li>
              <li>Vé máy bay đi Hồng công</li>
              <li>Vé máy bay đi Quy nhơn</li>
              
            </ul>
            <ul className="space-y-3">
              <li>Vé máy bay đi Phú Quốc</li>
              <li>Vé máy bay đi Đà Lạt</li>
              <li>Vé máy bay đi Hải Phòng</li>
              <li>Vé máy bay đi Sài Gòn</li>
              <li>Vé máy bay đi Bali</li>
              <li>Vé máy bay tết 2024</li>
              
            </ul>
            <ul className="space-y-3">
              <li>Vé máy bay đi Nha Trang</li>
              <li>Vé máy bay đi Huế</li>
              <li>Vé máy bay đi Côn Đảo</li>
              <li>Vé máy bay đi Băngkok</li>
              <li>Vé máy bay đi Kumla Lumpur</li>
              
              
            </ul>
          </div>
          <h1 className="font-bold text-[20px] text-center mt-[100px]">Chặng bay hàng đầu</h1>
          <div className="flex text-slate-600 mt-[50px] justify-center space-x-[100px] ">         
            <ul className="space-y-3">
              <li> Vé máy bay Sài Gòn - Hà Nội</li>
              <li>Vé máy bay Sài Gòn - Nha Trang</li>
              <li> Vé máy bay Hà Nội - Phú Quốc</li>
              <li> Vé máy bay Hà Nội - Đà Lạt</li>
              <li> Vé máy bay Hồ Chí Minh - Bangkok</li>
              <li>Vé máy bay Vinh - Sài Gòn</li>
              
            </ul>
            <ul className="space-y-3">
              <li> Vé máy bay Sài Gòn - Đà Nẵng</li>
              <li> Vé máy bay Sài Gòn - Đà Lạt</li>
              <li>Vé máy bay Hà Nội - Đà Nẵng</li>
              <li> Vé máy bay Đà Nẵng - Hà Nội</li>
              <li>Vé máy bay Hồ Chí Minh - Singapore</li>
              <li> Vé máy bay Đà Nẵng - Đà Lạt </li>
              
            </ul>
            <ul className="space-y-3">
              <li> Vé máy bay Sài Gòn - Phú Quốc</li>
              <li> Vé máy bay Hà Nội - Sài Gòn</li>
              <li>Vé máy bay Hà Nội - Nha Trang</li>
              <li>Vé máy bay Đà Nẵng - Sài Gòn</li>
              <li> Vé máy bay Hà Nội - Bangkok</li>
              
              
            </ul>
          </div>
        </main>
        <footer className="w-[100vw]">
          {<Footer/>}
        </footer>
    </div>
  );
}

export default Flight;
