import { useEffect, useState } from "react";
 
import RestaurentCard from "./RestaurentCard";
import Shimmar from "./Shimmar";

export default function Body() {
// hooks state

const [listOfRestuarent,setListOfRestuarent]  =useState([]);


useEffect(()=>{
  console.log("useEffect is called");
  fetchData();
},[]);


const fetchData= async()=>{
  const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.459497&lng=77.026634&page_type=DESKTOP_WEB_LISTING");
  const json= await data.json();
 const restaurants =
    json?.data?.cards
      ?.find((card) => card?.card?.card?.gridElements)
      ?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  console.log("restaurants:", restaurants);

  setListOfRestuarent(restaurants || []);
};

// conditional rendering  

// if(listOfRestuarent.length===0){
//   return <Shimmar/>
// }


  return  listOfRestuarent.length===0 ? <Shimmar/> :(
    <>
      <div className="flex flex-row">
        <div>
          <button
            onClick={() => {
              //filter logic
              console.log("Top Rated Button Clicked");

              const FilteredRestuarent = listOfRestuarent.filter((res) => res?.info?.avgRating >4);

             setListOfRestuarent(FilteredRestuarent)
            }}
            className="text-black  border border-gray-200 rounded-2xl m-10 cursor-pointer  "
          >
            Top Rated Buttons
          </button>
          <div className="grid grid-cols-4 gap-5 m-10">
            {listOfRestuarent.map((res,id) => (
              <RestaurentCard key={res.info.id} resData={res} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
