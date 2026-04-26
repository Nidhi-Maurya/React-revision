

import React from "react";

class UserClass extends React.Component{

    constructor(props){
      super(props);
    }


  render(){
    return (
      <>
      <div className="p-10 border m-5">
       <h2> name: {this.props.name} </h2>
       <h3>{this.props.location}</h3>
       <h4>{this.props.contact}</h4>
        <h4>{this.props.email}</h4>

     </div>
    
    
      </>
    )
  }
}


export default UserClass;