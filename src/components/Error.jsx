import { useRouteError } from "react-router-dom";


export default function Error (){

const err=useRouteError();

console.log("error is ", err);



  return (
    <>
    
     <h1 className="text-2xl font-bold text-center mt-70">
      OOPS! Something went wrong. Please try again later.
     </h1>
     <h3 className="text-xl font-semibold text-center mt-4">{err.status} : {err.statusText}</h3>
    
    </>
  )
}