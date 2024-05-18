import PersonSmallIcon from "../../icon/PersonSmallIcon";
import TravelokaIcon from "../../icon/TravelokaIcon";
import YellowStar from "../../icon/YellowStar";
import BillIcon from "../../icon/BillIcon";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectHotel } from "../../../redux/features/hotelSlice";
import axios from "../../../config/privateAxios";
import { toast } from "react-toastify";
import { selectComboFlight } from "../../../redux/features/comboFlightSlice";
import ComboFlightTicket from "./ComboFlightTicket";
import PreviewComboFlightTicket from "./PreviewComboFlightTicket";
import GifIcon from "../../icon/GifIcon";
import BackButton from "../../buttons/BackButton";
import PaymentNote from "../../utils/PaymentNote";
import {
  useFetchroomImageApiQuery,
  useFetchroomImagesApiQuery,
} from "../../../redux/features/roomImagesApi";
import { useFetchroomsQuery } from "../../../redux/features/room";
import { useFetchhotelsQuery } from "../../../redux/features/hotelsApi";

function ComboPreview(params) {
  const { id } = useParams();
  const comboFlight = useSelector(selectComboFlight);
  const [combo, setCombo] = useState();
  const { roomId, flightId } = useParams();

  const [hotel, setHotel] = useState(useSelector(selectHotel));
  const [stars, setStars] = useState([]);
  const [image, setImage] = useState("");
  const [roomContract, setRoomContract] = useState();

  const { data: roomImages } = useFetchroomImagesApiQuery();
  const { data: allRooms } = useFetchroomsQuery();
  const { data: allhotels } = useFetchhotelsQuery();
  console.log(allRooms);

  const roomImg = roomImages?.find((item) => item.room_id === Number(roomId));
  const room = allRooms?.find((item) => item.roomId === Number(roomId));
  const hotelID = room.hotelId;
  const hotelSelect = allhotels?.find((item) => item.hotelId === hotelID);

  console.log(room);
  console.log(hotelID);
  console.log(hotelSelect);

  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const [date, setDate] = useState(new Date(hotel?.startDate));

  const calculateEndDate = (startDate, nights) => {
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + nights);
    return endDate;
  };

  const [endDate, setEndDate] = useState(
    calculateEndDate(new Date(hotel?.startDate), hotel?.nights)
  );

  const navigate = useNavigate();

  function handleSubmit(params) {}

  return (
    <div className="roomContractPreview">
      <BackButton />
      {/* <PaymentNote /> */}
      <div className="roomContractPreview-container">
        <div className="roomContractPreview-container-header"></div>
        <div className="roomContractPreview-container-group1">
          <div className="roomContractPreview-container-group1-left">
            <span className="roomContractPreview-container-group1-left-name">
              {hotelSelect?.hotelName}
            </span>
            <span>
              <TravelokaIcon />
            </span>
            <span className="roomContractPreview-container-group1-left-point">
              {room ? hotelSelect?.averagePoint : null}
            </span>
            <span className="roomContractPreview-container-group1-left-booked">
              ({room ? hotelSelect?.hotelBookedNumbers : null})
            </span>
          </div>
          <div className="roomContractPreview-container-group1-right">
            {stars.map((value, index) => (
              <span key={index}>
                <YellowStar />
              </span>
            ))}
          </div>
        </div>
        <div className="roomContractPreview-container-group2">
          <img src={roomImg?.url} alt="room" />
        </div>
        <div className="roomContractPreview-container-group3">
          <div className="roomContractPreview-container-group3-container">
            <div className="roomContractPreview-container-group3-container-left">
              <div className="roomContractPreview-container-group3-container-left-title">
                Nhận phòng
              </div>
              <div className="roomContractPreview-container-group3-container-left-content">
                {date?.toLocaleDateString("vi-VN", options)}
              </div>
            </div>
            <div className="roomContractPreview-container-group3-container-center">
              <div className="roomContractPreview-container-group3-container-center-nights">
                {`${
                  id
                    ? Math.abs(date - endDate) / 1000 / 60 / 60 / 24
                    : hotel.nights
                } đêm`}
              </div>
              <div className="roomContractPreview-container-group3-container-center-line"></div>
            </div>
            <div className="roomContractPreview-container-group3-container-right">
              <div className="roomContractPreview-container-group3-container-right-title">
                Trả phòng
              </div>
              <div className="roomContractPreview-container-group3-container-right-content">
                {endDate.toLocaleDateString("vi-VN", options)}
              </div>
            </div>
          </div>
        </div>
        <div className="roomContractPreview-container-group4">
          <div className="roomContractPreview-container-group4-roomName">
            ({hotel.roomQuantity}x) {"Deluxe"}
          </div>
          <div className="roomContractPreview-container-group4-person">
            <span>
              <PersonSmallIcon />
            </span>{" "}
            <span>{hotel.personQuantity} khách</span>
          </div>
        </div>
        <div className="roomContractPreview-container-group5">
          <div className="roomContractPreview-container-group5-left">
            <div className="roomContractPreview-container-group5-left-row1">
              <span>
                <BillIcon />
              </span>{" "}
              <span className="roomContractPreview-container-group5-left-row1-text">
                Tổng giá phòng
              </span>
            </div>
            <div className="roomContractPreview-container-group5-left-row2">
              <span className="roomContractPreview-container-group5-left-row2-text">
                {id
                  ? roomContract
                    ? roomContract.roomQuantity
                    : null
                  : hotel.roomQuantity}{" "}
                phòng, {hotel.nights} đêm
              </span>
            </div>
          </div>
          <div className="roomContractPreview-container-group5-right">
            <div className="roomContractPreview-container-group5-right-row1">
              <span className="roomContractPreview-container-group5-right-row1-originPrice">
                {id
                  ? null
                  : `${(
                      room.unitPriceOrigin *
                      hotel.roomQuantity *
                      hotel.nights
                    )
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VND`}
              </span>
            </div>
            <div className="roomContractPreview-container-group5-right-row2">
              <span className="roomContractPreview-container-group5-right-row2-sellPrice">{`${(id
                ? roomContract
                  ? roomContract.totalMoney
                  : ""
                : room.unitPriceSell * hotel.roomQuantity * hotel.nights
              )
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VND`}</span>
            </div>
          </div>
        </div>
        {/* <div className="roomContractPreview-container-group6">
                    <button onClick={handleSubmit} className="roomContractPreview-container-group6-button">Tiếp tục thanh toán</button>
                </div> */}
      </div>
      {combo ? <PreviewComboFlightTicket seat={combo.ticketAirPlant} /> : null}

      <div className="comboPreview-summary">
        <div className="comboPreview-summary-header">Chi tiết giá</div>
        <div className="comboPreview-summary-room">
          <span className="comboPreview-summary-room-text">Giá phòng</span>
          <span className="comboPreview-summary-room-money">{`${(id
            ? roomContract
              ? roomContract.totalMoney
              : ""
            : room.unitPriceSell * hotel.roomQuantity * hotel.nights
          )
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VND`}</span>
        </div>
        {/* <div className="comboPreview-summary-flight">
          <span className="comboPreview-summary-room-text">Giá vé máy bay</span>
          <span className="comboPreview-summary-room-money">
            {combo
              ? `${combo.ticketAirPlant.totalMoney
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VND`
              : null}
          </span>
        </div> */}
        <div className="comboPreview-summary-total">
          <div className="comboPreview-summary-total-text">
            <div>Tổng giá tiền</div>
            <div className="comboPreview-summary-total-text-coupon">
              <GifIcon /> -20%
            </div>
          </div>
          <div className="comboPreview-summary-total-money">
            <div className="comboPreview-summary-total-money-origin">
              {`${(id
                ? roomContract
                  ? roomContract.totalMoney
                  : ""
                : (room.unitPriceSell * hotel.roomQuantity * hotel.nights) / 0.8
              )
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VND`}
            </div>
            <div className="comboPreview-summary-total-money-sell">
              {`${(id
                ? roomContract
                  ? roomContract.totalMoney
                  : ""
                : room.unitPriceSell * hotel.roomQuantity * hotel.nights
              )
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VND`}
            </div>
          </div>
        </div>
        <div onClick={handleSubmit} className="comboPreview-summary-confirm">
          Tiếp tục thanh toán
        </div>
      </div>
    </div>
  );
}
export default ComboPreview;
