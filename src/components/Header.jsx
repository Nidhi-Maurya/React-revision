import { useState } from "react";


export default  function Header (){
  const[buttonUpdate, setButtonUpdate]=useState("Login");
let btnName="Login";
 

  return (
    <> 
   <div className="w-full bg-gray-200 flex justify-between items-center p-2">
      <div className=" h-12 w-12  overflow-hidden  ">
        <img 
        className="h-full w-full rounded-full object-cover"
        src="" alt="no image"/>
      </div>
      <div className="    ">
        <ul className="flex font-bold text-lg  gap-3  ">
          <li>About Us</li>
        <li>Contact us</li>
        <li>learn</li>
        <li>Details</li>
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