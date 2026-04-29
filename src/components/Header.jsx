import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";


export default  function Header (){
  const[buttonUpdate, setButtonUpdate]=useState("Login");
let btnName="Login";
 
const onlineStatus=useOnlineStatus();



  return (
    <> 
   <div className="w-full bg-gray-200 flex justify-between items-center p-2">
      <div className=" h-12 w-12  overflow-hidden  ">
        <img 
        className="h-full w-full rounded-full object-cover"
        src={CDN_URL} alt="no image"/>
      </div>
      <div className="    ">
        <ul className="flex font-bold text-lg  gap-3  ">
          <li>Online Status : { onlineStatus ?"✅":"🔴 " } </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact"> Contact Us</Link>
        </li>
        <li>
          <Link to="/grocery "> Grocery</Link>
        </li>
          
        <button className="border cursor-pointer px-4  rounded-xl"
          onClick={()=>{
            buttonUpdate==="Login" ?
            setButtonUpdate("LogOut") : setButtonUpdate("Login")
            //  console.log(buttonUpdate);
          }}
        
        >{buttonUpdate}</button>
        </ul>
      </div>
    </div>
    
    </>
  )
}