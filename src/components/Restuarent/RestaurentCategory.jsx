import { TiArrowSortedDown } from "react-icons/ti";
import RestaurentItemList from "./RestaurentItemList";
  import {useState} from "react"
export default function RestaurentCategory({data,showItems,setShowIndex}){
// const  [showItems ,setShowItems] = useState(false)




  const  handleClicked=()=>{
                 setShowIndex()
  }

  return (
    <>
     <div className=" ">
      {/* Header */}
     <div className="  px-5 py-2  bg-gray-200 border mt-3 shadow-md   p-2 cursor-pointer rounded-md">
<div className="flex justify-between" onClick={handleClicked}>
        <span className="font-semibold">{data.title} ({data.itemCards.length})</span>
      <span> <TiArrowSortedDown /> </span>
</div>
     

      {/* Accordion body*/}

     {showItems &&  <RestaurentItemList items={data.itemCards} />}
      </div>
     </div>


    </>
  )
}