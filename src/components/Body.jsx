import { useEffect, useState } from "react";
 
import RestaurentCard from "./RestaurentCard";
import Shimmar from "./Shimmar";

export default function Body() {
// hooks state

const [listOfRestuarent,setListOfRestuarent]  =useState([]);
const [searchText,setSearchText]
=useState("");
const [filteredRestuarent,setFilteredRestuarent]=useState([]);

console.log("body rendered");   

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

  setListOfRestuarent(restaurants );
  setFilteredRestuarent(restaurants);
};

// conditional rendering  

// if(listOfRestuarent.length===0){
//   return <Shimmar/>
// }


  return  listOfRestuarent.length===0 ? <Shimmar/> :(
    <>
      <div className="flex flex-row">
        <div className="flex ">
<div className=" gap-2 ">
  <input type="text" placeholder="Search here..." value={searchText} onChange={(e)=>{
    setSearchText(e.target.value);
  }} className="border border-gray-300 rounded-lg px-4 py-2 m-10 "/>

  <button onClick={()=>{
    // filter resturent card and update the ui 
    // search text

    const filteredRestuarent=listOfRestuarent.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

  setFilteredRestuarent(filteredRestuarent);
    console.log("button clicked",searchText);





  }} className="border  px-6 py-2 rounded-xl cursor-pointer ">Search</button>

 
  </div>

 <button
            onClick={() => {
              //filter logic
              console.log("Top Rated Button Clicked");

              const Filteredlist = listOfRestuarent.filter((res) => res?.info?.avgRating >4);

             setListOfRestuarent(FilteredList)
            }}
            className="   cursor-pointer "
          >
            Top Rated Buttons
          </button>
  </div>
  </div>
          
          <div className="grid grid-cols-4 gap-5 m-10">
            {filteredRestuarent.map((res,id) => (
              <RestaurentCard key={res.info.id} resData={res} />
            ))}
          </div>
        
    
    </>
  );
}
