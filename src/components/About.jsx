import User from "./User";
import UserClass from "./UserClass";

export default function About(){
  return(
    <>
    <h1>This is the About Page</h1>

    <User/>

    <UserClass name="Nidhi" location="Delhi" contact="1234567890" email="maurya@gmail.com"/>
    
    </>
  )
}