import { useEffect, useState } from "react";
import Shimmar from "../Shimmar";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/constant";

export default function RestroMenu(){
const [resInfo, setResInfo] = useState(null);


const {resId} = useParams();




    useEffect(()=>{
        console.log("useEffect called nidha");
      fetchMenu();
    },[])

     const fetchMenu= async()=>{
        console.log("fetchMenu called");
    const data = await fetch( MENU_API+resId
  
);
      
      const json= await data.json();
      console.log("menu:", json);
      setResInfo(json.data );
     } 

 const {name, cuisines, costForTwoMessage,avgRatingString,totalRatingsString,sla,availability,aggregatedDiscountInfo,badges

} = resInfo?.cards[2]?.card?.card?.info || {};

// const itemCards =
//   resInfo?.cards[6]?.card?.card?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;


// console.log("itemCards:",itemCards);


const regularCards = resInfo?.cards
  ?.find(card => card?.groupedCard)
  ?.groupedCard?.cardGroupMap?.REGULAR?.cards;
const itemCategory = regularCards?.find(
  c =>
    c?.card?.card?.["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);

const itemCards = itemCategory?.card?.card?.itemCards;

console.log("itemCards:", itemCards);

  return (
    <>
    <div>
      <h1 className="text-2xl font-bold text-center mt-5">
{resInfo?.cards[2]?.card?.card?.info?.name}
      </h1>
     
      <p>{ cuisines} - {costForTwoMessage}</p>

      <h1>{avgRatingString},({totalRatingsString})</h1>
      <h1>{sla?.deliveryTime} minutes</h1>
      <h1>{availability?.opened ? "Open" : "Closed"}</h1>
<h1>{aggregatedDiscountInfo?.shortDescriptionList[0]?.meta}</h1>
<h1>{badges?.imageBased?.length > 0 ? "Has Badges" : "No Badges"}</h1>

      <h1 className="font-semibold text-xl">  Menu </h1>
      <h1>{itemCards?.length} items</h1>
  
      <ul>
        {itemCards?.map((item,id)=> <li key={id} >{item.card.info.name } - {" Rs."}{item.card.info.price/100}</li>)}
      </ul>
    </div>
    </>
  )
}