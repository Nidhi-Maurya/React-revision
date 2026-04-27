import User from "./User";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component{
  
  constructor(props){
    super(props) 
    //console.log("parent constructor")
    }
  
   componentDidMount(){
    //console.log("parent componentDidMount")
   }
  

  
  
  
  render() { 

    //console.log("parent render")
  return (
 <>
    <h1>This is the About Page3</h1>

  

    <UserClass name="first" location="Delhi" contact="1234567890" email="maurya@gmail.com"/>
   
    </>
  )

}}



export default About;

