
import { useEffect, useState } from "react";
const useOnlineStatus=()=>{

  const [onlineStatus,setOnlineStatus] = useState(true);
  //!  check online or not 

   useEffect(()=>{

    window.addEventListener("offline",()=>{
setOnlineStatus(false)
    });

    window.addEventListener("online",()=>{
      setOnlineStatus(true);
    })

   },[])

//! boolean 
  return onlineStatus;

}



export default useOnlineStatus;