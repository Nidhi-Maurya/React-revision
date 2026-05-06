
import { useContext } from "react";
import UserContext from "../utils/userContext";   


export default function RestaurentCard({ resData }) {
  const {
    name,
    avgRating,
    cuisines,
    costForTwo,
    cloudinaryImageId,
    sla,
    locality,
  } = resData?.info;

  const imageUrl =
    "https://media-assets.swiggy.com/swiggy/image/upload/" +
    cloudinaryImageId;

const data= useContext(UserContext);



  return (
   <>






   
    <div className="w-full max-w-sm mx-auto bg-gray-200 rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
      
      {/* Image */}
      <div className="rounded-xl">
<img
        src={imageUrl} 
        alt="restaurant"
        className=" p-5 w-full h-56 object-cover "
      />


        </div>
      {/* Content */}
      <div className="p-4">
        
        {/* Name */}
        <h3 className="text-lg font-semibold truncate">{name}</h3>

        {/* Rating + Delivery Time */}
        <div className="flex justify-between items-center mt-2 text-sm">
          <span className="bg-green-600 text-white px-2 py-1 rounded">
            ⭐ {avgRating}
          </span>
          <span className="text-gray-600">
               <span className="font-bold">    Delivery in :</span> {sla?.deliveryTime} mins
          </span>
        </div>

        {/* Cuisines */}
        <p className="text-gray-500 font-semibold text-sm mt-2 line-clamp-2">
          {cuisines?.join(", ")}
        </p>

        {/* Cost */}
        <p className="text-gray-700 font-medium mt-2">
          {costForTwo}
        </p>
        <p className="text-gray-700 font-medium mt-2">{locality}</p>

        <p>{data.loggedInUser}</p>

      
      </div>
    </div>

   
   </>
  );
}
export const withPromoted = (RestaurentCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-gray-800 text-white px-2 py-1 text-xs font-semibold  rounded">
         Promoted
        </label>
        <RestaurentCard {...props} />
      </div>
    );
  };
};

