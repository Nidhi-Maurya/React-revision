import { useState } from "react";
import { resList } from "../utils/mockData";
import RestaurentCard from "./RestaurentCard";

export default function Body() {
// hooks state

const [listOfRestuarent,setListOfRestuarent]  =useState(resList);


  
  return (
    <>
      <div className="flex flex-row">
        <div>
          <button
            onClick={() => {
              //filter logic
              

              const FilteredRestuarent = listOfRestuarent.filter((res) => res.avgRating >= 4.5);

             setListOfRestuarent(FilteredRestuarent)
            }}
            className="text-black  border border-gray-200 rounded-2xl m-10 cursor-pointer  "
          >
            TOp Rated Buttons
          </button>
          <div className="grid grid-cols-4 gap-5 m-10">
            {listOfRestuarent.map((res) => (
              <RestaurentCard key={res.id} resData={res} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
