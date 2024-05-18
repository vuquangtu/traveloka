import { useEffect, useRef, useState } from "react";
import HotelStarSmall from "../../components/icon/HotelStarSmall";
import LocationIconBlack from "../../components/icon/LocationIconBlack";

import { selectHotel } from "../../redux/features/hotelSlice";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import TravelokaIcon from "../../components/icon/TravelokaIcon";
import RoomCard from "../../components/layout/hotels/RoomCard";

import Header from "../../components/hompage/Header";
import HotelSearchBar from "../../components/layout/hotels/HotelSearchBar";
import { selectComboFlight } from "../../redux/features/comboFlightSlice";
import ComboFlightSearchBar from "../../components/layout/combo/ComboFlightSearchBar";
import ComboHotelSearchBar from "../../components/layout/combo/ComboHotelSearchBar";
import ComboFlightTicket from "../../components/layout/combo/ComboFlightTicket";
import FrameComment from "./FrameComment";
import BackButton from "../../components/buttons/BackButton";
import { useFetchhotelQuery } from "../../redux/features/hotelsApi";
import "react-image-gallery/styles/css/image-gallery.css";
import { useFetchhotelImgsQuery } from "../../redux/features/hotelImgsAps";
import { useFetchhotel_utilitys2Query } from "../../redux/features/hotel_utilitys2Api";
import { useFetchhotel_utilitysQuery } from "../../redux/features/hotel_utilitysApi";
import { useFetchroomsQuery } from "../../redux/features/room";
import { useFetchroomImagesApiQuery } from "../../redux/features/roomImagesApi";
import { useFetchroomUtilitesQuery } from "../../redux/features/roomUtilitesApi";

function HotelInfo(params) {
  const [seat, setSeat] = useState();
  const comboIsValid = params.combo;

  const { id } = useParams();

  const [stars, setStars] = useState([]);

  const hotelState = useSelector(selectHotel);

  const gallaryRef = useRef();
  const [utilities, setUtilities] = useState([{ hotelUtility: { name: "" } }]);

  const { data: hotel } = useFetchhotelQuery(id);
  const { data: hotelImgs } = useFetchhotelImgsQuery();

  const { data: hotelUtility2s } = useFetchhotel_utilitys2Query();
  const { data: hotelUtilitys } = useFetchhotel_utilitysQuery();
  const { data: allRooms } = useFetchroomsQuery();
  const { data: roomsImage } = useFetchroomImagesApiQuery();
  const { data: roomUtilities } = useFetchroomUtilitesQuery();

  // Filter hotel utilities by hotel ID
  const hotelUtilitybyHotel = hotelUtility2s?.filter(
    (item) => item.hotel_id === hotel?.hotelId
  );
  console.log(roomsImage);

  // Extract the hotel utility IDs
  const hotelUtilityIds =
    hotelUtilitybyHotel?.map((item) => item.hotel_utility_id) || [];

  // Create a map for quick lookup of hotel utilities by type ID
  const utilityMap =
    hotelUtilitys?.reduce((map, utility) => {
      if (hotelUtilityIds.includes(utility.hotel_utility_type_id)) {
        if (!map[utility.hotel_utility_type_id]) {
          map[utility.hotel_utility_type_id] = [];
        }
        map[utility.hotel_utility_type_id].push(utility.name);
      }
      return map;
    }, {}) || {};

  // Extract and flatten the result into a single array of names
  const result2 = Object.values(utilityMap).flat();

  const images = hotelImgs?.filter(
    (image) => image?.hotelId === hotel?.hotelId
  );

  const gallery = images?.map((image) => ({
    original: image.url,
    thumbnail: image.url,
  }));

  const roomByselects = allRooms?.filter((room) => {
    return (
      room.hotelId === hotel?.hotelId &&
      room.maxPerson >= hotelState.personQuantity / hotelState.roomQuantity
    );
  });
  // console.log(roomByselects);

  const roomFullinfors = roomByselects?.reduce((result, item) => {
    const roomId = item.roomId;
    const roomImage = roomsImage?.find((room) => room.room_id === roomId);
    const url = roomImage ? roomImage.url : null;
    const roomTypes = roomUtilities?.filter(
      (item2) => item2.room_utility_type_id === item.roomTypeId
    );
    const roomUtilitiesName = roomTypes?.reduce((result, item) => {
      result.push(item.name);
      return result;
    }, []);

    // Create a new object that includes all properties of `item` plus the `url` property
    const newItem = {
      ...item,
      url: url,
      utilities: roomUtilitiesName,
    };

    result.push(newItem);
    return result;
  }, []);


  function handleFullScreen() {
    console.log(gallaryRef);
    gallaryRef.current.toggleFullScreen();
  }

  if (
    images === undefined ||
    hotelImgs === undefined ||
    hotel === undefined ||
    gallery === undefined ||
    hotelUtility2s === undefined ||
    hotelUtilitys === undefined
  ) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="hotelHeader">
        <Header />
      </div>
      <BackButton />
      {comboIsValid ? <ComboHotelSearchBar /> : <HotelSearchBar />}
      {comboIsValid ? <ComboFlightSearchBar /> : null}
      <div className="hotelInfo-flightTicket-container">
        {seat ? <ComboFlightTicket disableButton={true} seat={seat} /> : null}
      </div>
      <div className="hotelInfo">
        <div className="container">
          <div className="group1">
            <div className="left">
              <div className="hotelName">{hotel?.hotelName}</div>
              <div className="hotel-starGroup">
                <span className="text">Khách sạn</span>{" "}
                {stars.map((value, index) => (
                  <span key={index}>
                    <HotelStarSmall />
                  </span>
                ))}
              </div>
              <div className="location">
                {" "}
                <LocationIconBlack />
                <p>{hotel?.address}</p>
              </div>
            </div>
            <div className="right">
              <div className="text">Giá/phòng/đêm từ</div>
              <div className="price">{`${hotel?.minSellPrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VND`}</div>
              <a href="#rooms">Chọn phòng</a>
            </div>
          </div>
          <div className="group2">
            <div className="left">
              <img src={images[0].url} alt="" />
            </div>
            <div className="right">
              <img src={images[1] ? images[1].url : images[0].url} alt="" />
              <img src={images[2] ? images[2].url : images[0].url} alt="" />
              <img src={images[3] ? images[3].url : images[0].url} alt="" />
              <img src={images[4] ? images[4].url : images[0].url} alt="" />
              <img src={images[5] ? images[5].url : images[0].url} alt="" />
              <div onClick={handleFullScreen} className="last-img">
                <img src={images[6] ? images[6].url : images[0].url} alt="" />
                <div className="bg">Xem tất cả hình ảnh</div>
              </div>
            </div>
          </div>
          <div className="group3">
            <div className="left">
              <div className="row1">
                <h3>Giới thiệu cơ sở lưu trú</h3>{" "}
                <div className="loadmore">Xem thêm</div>
              </div>
              <div className="row2">
                <p>{hotel?.description}</p>
              </div>
            </div>
            <div className="right">
              <div className="facility">
                <div className="row1">
                  <h3>Tiện ích chính</h3>
                </div>
                <div className="row2">
                  {result2.map((util, index) => (
                    <div key={index} className="group">
                      <TravelokaIcon /> <span key={"span" + index}>{util}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="preview-comment">
                <div className="row1">
                  <p>Khách nói gì về kỳ nghỉ của họ</p>
                </div>
                <div className="row2">
                  <div className="comment-tag">
                    <div className="comment-tag-row1">
                      <div className="comment-tag-left">
                        <span className="travelIcon">
                          <TravelokaIcon />
                        </span>
                        <span className="ratePoint">10.0</span>
                        <span className="staticPoint">/ 10</span>
                      </div>
                      <div className="comment-tag-right">
                        <span>Quang Tu</span>
                      </div>
                    </div>
                    <div className="comment-tag-row2">
                      <p>
                        Khách sạn đối diện khúc biển cát rất êm, không hề có đá.
                        Lần đầu tắm biển mà cảm thấy không sợ bị xước da chảy
                        máu. Khúc biển đối diện cũng không đông đúc. Dậy sớm ăn
                        sáng rồi tắm luôn là hết sẩy. Nhân viên xách hành lý
                        lịch sự nhã nhặn. Nhìn rất hiền. Ra vô luôn có lễ tân
                        cúi chào. Anh quản lý làm nhân viên check in siêu nhanh.
                        Có welcome drink nữa. Nói chung là ổn trong tầm giá.
                        View biển khá đẹp.
                      </p>
                    </div>
                  </div>
                  <div className="comment-tag">
                    <div className="comment-tag-row1">
                      <div className="comment-tag-left">
                        <span className="travelIcon">
                          <TravelokaIcon />
                        </span>
                        <span className="ratePoint">10.0</span>
                        <span className="staticPoint">/ 10</span>
                      </div>
                      <div className="comment-tag-right">
                        <span>Quang Tu</span>
                      </div>
                    </div>
                    <div className="comment-tag-row2">
                      <p>
                        Khách sạn đối diện khúc biển cát rất êm, không hề có đá.
                        Lần đầu tắm biển mà cảm thấy không sợ bị xước da chảy
                        máu. Khúc biển đối diện cũng không đông đúc. Dậy sớm ăn
                        sáng rồi tắm luôn là hết sẩy. Nhân viên xách hành lý
                        lịch sự nhã nhặn. Nhìn rất hiền. Ra vô luôn có lễ tân
                        cúi chào. Anh quản lý làm nhân viên check in siêu nhanh.
                        Có welcome drink nữa. Nói chung là ổn trong tầm giá.
                        View biển khá đẹp.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="rooms" className="group4">
            <div className="group4-title">
              Những phòng còn trống tại khách sạn
            </div>
            {roomFullinfors?.map((room) => (
              <RoomCard
                combo={comboIsValid}
                key={"room" + room.id}
                room={room}
              />
            ))}
          </div>
        </div>
        <ImageGallery
          showIndex={true}
          ref={gallaryRef}
          className="gallary"
          items={gallery}
        />
        <div>
          <FrameComment />
        </div>
      </div>
    </>
  );
}
export default HotelInfo;
