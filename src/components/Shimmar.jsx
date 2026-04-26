export default function Shimmar() { 

  return (
    <div className=" flex flex-wrap">
      <div className=" w-50 h-60 bg-[#f0f0f0] m-5"></div>
      <div className=" w-50 h-60 bg-[#f0f0f0] m-5"></div>
      <div className=" w-50 h-60 bg-[#f0f0f0] m-5"></div>
      <div className=" w-50 h-60 bg-[#f0f0f0] m-5"></div>




    </div>
  )

}







// import { useEffect, useState } from "react";

// export default function Shimmar() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(
//       "https://www.swiggy.com/mapi/misc_new/skeleton?lat=28.4349272&lng=77.0392319"
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Skeleton API:", data);
//         setLoading(false); // stop shimmer after API call
//       })
//       .catch((err) => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, []);

//   if (!loading) return null; // or return real UI later

//   return (
//     <div className="flex flex-wrap">
//       {Array(8)
//         .fill("")
//         .map((_, index) => (
//           <div
//             key={index}
//             className="w-50 h-60 m-5 bg-[#f0f0f0] animate-pulse rounded-lg"
//           ></div>
//         ))}
//     </div>
//   );
// }