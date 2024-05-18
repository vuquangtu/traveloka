function HotelSortBar({ hotelsWithMaxPersons, setHotelsWithMaxPersons }) {
  function handleChangeSort1(event) {
    const sortedHotels = [...hotelsWithMaxPersons].sort(
      (a, b) => b.averagePoint - a.averagePoint
    );
    setHotelsWithMaxPersons(sortedHotels);
  }
  function handleChangeSort2(event) {
    const sortedHotels = [...hotelsWithMaxPersons].sort(
      (a, b) => b.hotelStar - a.hotelStar
    );
    setHotelsWithMaxPersons(sortedHotels);
  }
  function handleChangeSort3(event) {
    const sortedHotels = [...hotelsWithMaxPersons].sort(
      (a, b) => a.minSellPrice - b.minSellPrice
    );
    setHotelsWithMaxPersons(sortedHotels);
  }
  function handleChangeSort4(event) {
    const sortedHotels = [...hotelsWithMaxPersons].sort(
      (a, b) => b.minSellPrice - a.minSellPrice
    );
    setHotelsWithMaxPersons(sortedHotels);
  }
  return (
    <div className="hotelSortBar">
      <input
        onChange={handleChangeSort1}
        value={"booked"}
        type="radio"
        name="sort"
        id="booked"
        hidden
      />
      <label htmlFor="booked" className="group">
        <p className="text-1">Sắp xếp theo</p>
        <p className="text-2">Độ phổ biến</p>
      </label>
      <input
        onChange={handleChangeSort2}
        value={"point"}
        type="radio"
        name="sort"
        id="point"
        hidden
      />
      <label htmlFor="point" className="group">
        <p className="text-1">Sắp xếp theo</p>
        <p className="text-2">Điểm đánh giá</p>
      </label>
      <input
        onChange={handleChangeSort3}
        value={"minPrice"}
        type="radio"
        name="sort"
        id="minPrice"
        hidden
      />
      <label htmlFor="minPrice" className="group">
        <p className="text-1">Sắp xếp theo</p>
        <p className="text-2">Giá thấp nhất</p>
      </label>
      <input
        onChange={handleChangeSort4}
        value={"maxPrice"}
        type="radio"
        name="sort"
        id="maxPrice"
        hidden
      />
      <label htmlFor="maxPrice" className="group">
        <p className="text-1">Sắp xếp theo</p>
        <p className="text-2">Giá cao nhất</p>
      </label>
    </div>
  );
}
export default HotelSortBar;
