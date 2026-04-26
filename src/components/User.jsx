import { useState } from "react";
export default function User(){


const [count,setCount]=useState(0);
const [count2,setCount2]=useState(5); 




  return (
    <>
     <div className="p-10 border m-5">
      <h1>count={count}</h1>
      <h1>Count2={count2}</h1>
       <button className="p-1 rounded-md  border " onClick={()=>setCount(count+1)}> Increase</button>
       <h2>Name: Nidhi </h2>
       <h3>Location: Delhi</h3>
       <h4>Contact: 1234567890</h4>
        <h4>Email:maurya@gmail.com </h4>

     </div>
    
    
    
    
    </>
  )
}