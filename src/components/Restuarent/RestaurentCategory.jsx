import { TiArrowSortedDown } from "react-icons/ti";
import RestaurentItemList from "./RestaurentItemList";

export default function RestaurentCategory({data}){
console.log("data in category:", data);

  return (
    <>
     <div className=" ">
      {/* Header */}
     <div className="  px-5 py-2  bg-gray-200 border mt-3 shadow-md   p-2 cursor-pointer rounded-md">
<div className="flex justify-between">
        <span className="font-semibold">{data.title} ({data.itemCards.length})</span>
      <span> <TiArrowSortedDown /> </span>
</div>
     

      {/* Accordion body*/}

      <RestaurentItemList items={data.itemCards} />
      </div>
     </div>


    </>
  )
}