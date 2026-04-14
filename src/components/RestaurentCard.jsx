export default function RestaurentCard({ resData }) {
  const {
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla: { deliveryTime },
    cloudinaryImageId,
  } = resData;

  const imageUrl =
    "https://res.cloudinary.com/demo/image/upload/" + cloudinaryImageId;

  return (
    <div className="flex items-center gap-4 border rounded-xl p-3 shadow-sm hover:shadow-md transition bg-red-670 w-full max-w-xl">
      
      {/* Image */}
      <img
        src={imageUrl}
        alt="restaurant"
        className="w-full h-40 object-cover"
      />

      {/* Content */}
      <div className="p-4 ">
        
        {/* Name */}
        <h3 className="text-lg font-semibold truncate">{name}</h3>

        {/* Rating + Time */}
        <div className="flex justify-between items-center mt-2 text-sm">
          <span className="bg-green-600 text-white px-2 py-1 rounded">
            ⭐ {avgRating}
          </span>
          <span className="text-gray-600">{deliveryTime} mins</span>
        </div>

        {/* Cuisines */}
        <p className="text-gray-500 text-sm mt-2 truncate">
          {cuisines.join(", ")}
        </p>

        {/* Cost */}
        <p className="text-gray-700 font-medium mt-2">
          ₹{costForTwo / 100} FOR TWO
        </p>
      </div>
    </div>
  );
}