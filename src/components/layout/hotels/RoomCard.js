import PersonSmallIcon from "../../icon/PersonSmallIcon";
import TravelokaIcon from "../../icon/TravelokaIcon";
import CoinIcon from "../../icon/CoinIcon";
import { useEffect, useState } from "react";
import axios from "../../../config/privateAxios";
import { useNavigate, useDispatch } from "react-router-dom";
import { selectComboFlight } from "../../../redux/features/comboFlightSlice";
import { useSelector } from "react-redux";

function RoomCard(params) {
  const room = params.room;
  //   const utilities = params.utilities;
  console.log(room);  

  const navigate = useNavigate();

  function handleChooseRoom(params) {
    navigate(`/combo/room/${room.roomId}`);
  }
  return (
    <div className="roomCard">
      <div className="roomCard-row1">
        <p>{room ? (room.roomType ? room.roomType.name : null) : null}</p>
      </div>
      <div className="roomCard-row2">
        <div className="roomCard-row2-left">
          <img src={room ? room.url : null} alt="room" />
        </div>
        <div className="roomCard-row2-right">
          <div className="roomCard-row2-right-card">
            <div className="roomCard-row2-right-card-row1">
              <div className="roomCard-row2-right-card-row1-left">
                <PersonSmallIcon />{" "}
                <span>{room ? room.maxPerson : null} Khách</span>
              </div>
            </div>
            <div className="roomCard-row2-right-card-row2">
              <div className="roomCard-row2-right-card-row2-left">
                {room.utilities?.map((util, index) => (
                  <div
                    key={index}
                    className="roomCard-row2-right-card-row2-left-utility"
                  >
                    <TravelokaIcon /> <span key={"span" + index}>{util}</span>
                  </div>
                ))}
              </div>
              <div className="roomCard-row2-right-card-row2-right">
                <div className="roomCard-row2-right-card-row2-right-originPrice">
                  {room.unitPriceOrigin
                    ? room.unitPriceOrigin
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                    : null}
                  VND
                </div>
                <div className="roomCard-row2-right-card-row2-right-sellPrice">
                  {room.unitPriceSell
                    ? room.unitPriceSell
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                    : null}{" "}
                  VND
                </div>
                <div className="roomCard-row2-right-card-row2-right-text">
                  <CoinIcon />
                  Bao gồm thuế và phí
                </div>
                <div className="roomCard-row2-right-card-row2-right-button">
                  <button onClick={handleChooseRoom}>Đặt ngay</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RoomCard;
