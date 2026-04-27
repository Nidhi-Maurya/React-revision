import { useEffect, useState } from "react";

import RestaurentCard from "./RestaurentCard";
import Shimmar from "./Shimmar";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export default function Body() {
  // hooks state

  const [listOfRestuarent, setListOfRestuarent] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestuarent, setFilteredRestuarent] = useState([]);

  console.log("body rendered5");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.4420427&lng=77.02065379999999&carousel=true&third_party_vendor=1",
    );
    const json = await data.json();

    const restaurants = json?.data?.cards
      ?.map((c) => c?.card?.card)
      ?.find((c) => c?.gridElements?.infoWithStyle?.restaurants)?.gridElements
      ?.infoWithStyle?.restaurants;

     console.log("restaurants:", restaurants);

    setListOfRestuarent(restaurants || []);
    setFilteredRestuarent(restaurants || []);
  };

const onlineStatus=useOnlineStatus();

if(onlineStatus===false){
  return <h1>Looks like you are offline!! Please check your internet connection</h1>
}



  return listOfRestuarent.length === 0 ? (
    <Shimmar />
  ) : (
    <>
      <div className="flex flex-row">
        <div className="flex ">
          <div className=" gap-2 ">
            <input
              type="text"
              placeholder="Search here..."
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              className="border border-gray-300 rounded-lg px-4 py-2 m-10 "
            />

            <button
              onClick={() => {
                // filter resturent card and update the ui
                // search text

                const filteredRestuarent = listOfRestuarent.filter((res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase()),
                );

                setFilteredRestuarent(filteredRestuarent);
                // console.log("button clicked",searchText);
              }}
              className="border  px-6 py-2 rounded-xl cursor-pointer "
            >
              Search
            </button>
          </div>

          <button
            onClick={() => {
              //filter logic
              console.log("Top Rated Button Clicked");

              const Filteredlist = listOfRestuarent.filter(
                (res) => res?.info?.avgRating > 4,
              );

              setListOfRestuarent(Filteredlist);
            }}
            className="   cursor-pointer "
          >
            Top Rated Buttons
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestuarent.map((res, id) => (
         <Link  key={res.info.id} to={`/restaurants/${res.info.id}`}>  <RestaurentCard resData={res} /></Link>
        ))}
      </div>
    </>
  );
}
