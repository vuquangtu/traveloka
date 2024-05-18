import HotelFilterBanner from "./HotelFilterBanner";
import HotelFilterMoneyRange from "./HotelFilterMoneyRange";
import HotelFilterStarChecked from "./HotelFilterStarChecked";
import { useSelector } from "react-redux";
import { selectHotel } from "../../../redux/features/hotelSlice";

function HotelFilterSideBar({ hotelsWithMaxPersons, setHotelsWithMaxPersons }) {
  const hotel = useSelector(selectHotel);

  function handleFilter() {
    const sortedHotels = [...hotelsWithMaxPersons].filter((item) => {
      return (
        item.minSellPrice >= hotel.moneyFrom &&
        item.minSellPrice <= hotel.moneyTo &&
        hotel.stars.includes(item.hotelStar)
      );
    });
    setHotelsWithMaxPersons(sortedHotels);
  }

  return (
    <div className="hotelFilterSideBar">
      <div className="hotelFilterSideBar-container">
        <HotelFilterBanner />
        <HotelFilterMoneyRange />
        <HotelFilterStarChecked />
        <button
          onClick={handleFilter}
          className="hotelFilterSideBar-container-button"
        >
          Lọc kết quả tìm kiếm
        </button>
      </div>
    </div>
  );
}
export default HotelFilterSideBar;
