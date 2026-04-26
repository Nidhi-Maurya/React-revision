

import React from "react";

class UserClass extends React.Component{

    constructor(props){
      super(props);
       this.state={
        count:0, 
        count2:5,
    }

  };
  render(){

const {name, location,contact,email}= this.props;
const {count,count2}=this.state


    return (
      <>
      <div className="p-10 border m-5">
        <h1>Count: {count}</h1>
        <h1> Count: {count2}</h1>
       <h2> name: {name} </h2>
       <h3>loaction:{location}</h3>
       <h4>contact:{contact}</h4>
        <h4>email:{email}</h4>

     </div>
    
    
      </>
    )
  }
}


export default UserClass;