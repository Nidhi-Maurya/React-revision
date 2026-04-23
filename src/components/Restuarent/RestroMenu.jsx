import { useEffect, useState } from "react";


export default function RestroMenu(){

    useEffect(()=>{
        console.log("useEffect called nidha");
      fetchMenu();
    },[])

     const fetchMenu= async()=>{
        console.log("fetchMenu called");
    const data = await fetch(
  "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.459497&lng=77.026634&restaurantId=229&submitAction=ENTER"
);
      
      const json= await data.json();
      console.log("menu:", json);
     } 




  return (
    <>
    <div>
      <h1 className="text-2xl font-bold text-center mt-5">
        Name of the Restaurent
      </h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani </li>
        <li>Pizza</li>
        <li>Burger</li>
        <li>Salad</li>
      </ul>
    </div>
    </>
  )
}