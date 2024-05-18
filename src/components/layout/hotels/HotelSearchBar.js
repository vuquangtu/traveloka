import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import LocationIcon from "../../icon/LocationIcon";
import axios from "../../../config/privateAxios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeHotelId,
  changeCity,
  selectHotel,
  changeStartDate,
  changeNights,
  changePersonQuantity,
  changeRoomQuantity,
  changePageNumber,
} from "../../../redux/features/hotelSlice";

import { changeHotels } from "../../../redux/features/hotelsSlice";
import CalenderIcon from "../../icon/CalenderIcon";
import { Calendar } from "react-date-range";
import NightIcon from "../../icon/NightIcon";
import React from "react";
import Select from "react-select";
import PersonAndRoomIcon from "../../icon/PersonAndRoomIcon";
import PersonIcon from "../../icon/PersonIcon";
import SubIcon from "../../icon/SubIcon";
import PlusIcon from "../../icon/PlusIcon";
import RoomIcon from "../../icon/RoomIcon";
import { toast } from "react-toastify";
import SearchIcon from "../../icon/SearchIcon";
import { useNavigate } from "react-router";
import { useFetchcitiesQuery } from "../../../redux/features/citiesApi";
import { useFetchhotelsQuery } from "../../../redux/features/hotelsApi";
import { useFetchroomsQuery } from "../../../redux/features/room";

function HotelSearchBar({ hotelsWithMaxPersons, setHotelsWithMaxPersons }) {
  const navigate = useNavigate();
  const { data: hotels } = useFetchhotelsQuery();
  const { data: allRooms } = useFetchroomsQuery();
  const dispatch = useDispatch();

  const [selectedOpiton, setSelectedOpiton] = useState(null);
  const [persons, setPersons] = useState(0);
  const [rooms, setRooms] = useState(0);
  const [searchResultHotels, setSearchResultHotels] = useState([]);
  const hotel = useSelector(selectHotel);

  const [personAndRoomDisplay, setPersonAndRoomDisplay] = useState("none");
  const [calendarDisplay, setCalendarDisplay] = useState("none");
  const [date, setCalendarDate] = useState(new Date(2024, 4, 7));
  const nights = [];
  const createNights = () => {
    for (let index = 0; index < 30; index++) {
      nights.push({ value: index + 1, label: `${index + 1} đêm` });
    }
  };
  createNights();

  const [night, setNight] = useState({
    label: `1 đêm`,
    value: 1,
  });

  const { data: cities } = useFetchcitiesQuery();
  // console.log(cities);

  const options = cities?.reduce((acc, item) => {
    acc.push({ value: item.name, label: item.name });
    return acc;
  }, []);

  const customStyles = {
    control: (provided) => ({
      ...provided,
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#fff",
    }),
  };

  function handleChangeCity(city) {
    setSelectedOpiton(city);
    dispatch(changeCity({ id: city.value, name: city.label }));
  }

  function handleChangStartDate(date) {
    setCalendarDate(date);
    setCalendarDisplay("none");
    let startDate = new Date();
    startDate.setDate(date.getDate());
    dispatch(changeStartDate(startDate.toISOString().split("T")[0]));
  }

  function handleChangeNight(night) {
    console.log(night.value);
    dispatch(changeNights(night.value));
  }

  function handleOpenCalendar(e) {
    e.preventDefault();
    setCalendarDisplay("block");
  }
  function handleCloseCalendar(e) {
    e.preventDefault();
    setCalendarDisplay("none");
  }
  function handlePlusPersonQuantity(e) {
    e.preventDefault();
    if (persons < 30) {
      setPersons(persons + 1);
      dispatch(changePersonQuantity(persons + 1));
    }
  }
  function handleSubPersonQuantity(e) {
    e.preventDefault();
    if (persons > 0) {
      setPersons(persons - 1);
      dispatch(changePersonQuantity(persons - 1));
    }
  }
  function handlePlusRoomQuantity(e) {
    e.preventDefault();
    setRooms(rooms + 1);
    dispatch(changeRoomQuantity(hotel.roomQuantity + 1));
  }
  function handleSubRoomQuantity(e) {
    e.preventDefault();
    if (rooms > 0) {
      setRooms(rooms - 1);
      dispatch(changeRoomQuantity(hotel.roomQuantity - 1));
    }
  }
  function handleOpenPersonAndRoom(e) {
    e.preventDefault();
    setPersonAndRoomDisplay("block");
  }
  function handleClosePersonAndRoom(e) {
    e.preventDefault();
    setPersonAndRoomDisplay("none");
  }

  function searchHotelsByCity() {
    // Find city ID based on selected option
    const cityIdNum = cities.find(
      (city) => city.name === selectedOpiton?.value
    )?.cityId;

    if (!cityIdNum) {
      console.log("City not found.");
      return;
    }

    // Filter hotels by city ID
    const hotelsInCity = hotels.filter((hotel) => hotel.cityId === cityIdNum);

    // Filter hotels by maximum persons per room
    const result = hotelsInCity.filter((hotel) => {
      return allRooms.some(
        (room) =>
          room.hotelId === hotel.hotelId && room.maxPerson >= persons / rooms
      );
    });
    setHotelsWithMaxPersons(result);
  }

  function handleSearchHotel(e) {
    e.preventDefault();
    searchHotelsByCity();
  }

  // if (isFetching) {
  //   return <h1>Loading...</h1>;
  // }

  // console.log(hotels);

  return (
    <div className="hotelSearchBar">
      <div className="hotelSearchBarContainer">
        <div className="grid grid-cols-12 gap-4 content">
          <div className="col-span-3 item">
            <LocationIcon />
            <Select
              styles={customStyles}
              defaultValue={{
                value: options && options[2].label,
                label: options && options[2].label,
              }}
              className="react-select-container"
              classNamePrefix="react-select"
              value={selectedOpiton}
              options={options}
              onChange={handleChangeCity}
            />
          </div>
          <div className="col-span-3 item">
            <CalenderIcon />
            <input
              onClick={handleOpenCalendar}
              className="calendarSelected"
              type="text"
              value={date.toLocaleDateString("vi-VN", options)}
              readOnly
            />
            <div
              onMouseLeave={handleCloseCalendar}
              style={{ display: calendarDisplay }}
              className="calendarContainer"
            >
              <Calendar
                minDate={new Date(2024, 4, 7)}
                maxDate={new Date(2024, 4, 14)}
                className="customCalender"
                date={date}
                onChange={handleChangStartDate}
              />
            </div>
          </div>
          <div className="col-span-2 item">
            <NightIcon />
            <Select
              styles={customStyles}
              className="react-select-container"
              classNamePrefix="react-select"
              defaultValue={night}
              onChange={handleChangeNight}
              options={nights}
            />
          </div>
          <div className="col-span-2 item">
            <PersonAndRoomIcon />
            <input
              onClick={handleOpenPersonAndRoom}
              className="personAndRoomInput"
              type="text"
              readOnly
              value={`${persons} người, ${rooms} phòng`}
            />
            <div
              onMouseLeave={handleClosePersonAndRoom}
              style={{ display: personAndRoomDisplay }}
              className="selectPersonAndRoomContainer"
            >
              <div className="personQuantityContainer">
                <div className="leftItem">
                  <PersonIcon />
                  <div>Số người</div>
                </div>
                <div className="rightItem">
                  <button onClick={handleSubPersonQuantity} className="button">
                    <SubIcon />
                  </button>
                  <input
                    className="personQuantityInput"
                    value={persons}
                    type="text"
                    readOnly
                  />
                  <button onClick={handlePlusPersonQuantity} className="button">
                    <PlusIcon />
                  </button>
                </div>
              </div>
              <div className="roomQuantityContainer">
                <div className="leftItem">
                  <RoomIcon />
                  <div>Số phòng</div>
                </div>
                <div className="rightItem">
                  <button onClick={handleSubRoomQuantity} className="button">
                    <SubIcon />
                  </button>
                  <input
                    className="roomQuantityInput"
                    value={rooms}
                    type="text"
                    readOnly
                  />
                  <button onClick={handlePlusRoomQuantity} className="button">
                    <PlusIcon />
                  </button>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div onClick={handleSearchHotel} className="col-span-2 button">
            <SearchIcon />
            <div className="searchText">Tìm khách sạn</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HotelSearchBar;
