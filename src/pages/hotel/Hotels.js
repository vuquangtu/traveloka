import HotelCard from "../../components/layout/hotels/HotelCard";
import HotelFilterSideBar from "../../components/layout/hotels/HotelFilterSideBar";
import HotelSearchBar from "../../components/layout/hotels/HotelSearchBar";
import HotelSortBar from "../../components/layout/hotels/HotelSortBar";

import Header from "../../components/hompage/Header";
import { useFetchhotelsQuery } from "../../redux/features/hotelsApi";
import { useState } from "react";



function Hotels(params) {


  const [hotelsWithMaxPersons, setHotelsWithMaxPersons] = useState([]);



  return (
    <>
      <div className="hotelHeader">
        <Header />
      </div>
      <div className="hotels">
        <HotelSearchBar
          hotelsWithMaxPersons={hotelsWithMaxPersons}
          setHotelsWithMaxPersons={setHotelsWithMaxPersons}
        />
        <div className="hotels-container">
          <HotelFilterSideBar
            hotelsWithMaxPersons={hotelsWithMaxPersons}
            setHotelsWithMaxPersons={setHotelsWithMaxPersons}
          />
          <div className="hotels-body">
            <HotelSortBar
              hotelsWithMaxPersons={hotelsWithMaxPersons}
              setHotelsWithMaxPersons={setHotelsWithMaxPersons}
            />
            <div className="hotels-list">
              {hotelsWithMaxPersons?.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
            <button>Xem thêm</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hotels;
