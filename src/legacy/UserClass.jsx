

import React from "react";

class UserClass extends React.Component{

    constructor(props){
      super(props);
       this.state={
      userInfo:{
        name:"Dummy Name",
        location:"Dummy Location",
        avatar_url:"https://www.svgrepo.com/show/382106/avatar.svg",
       
      }

            
    }
 // console.log( this.props.name+ " child constructor")
  


  };


  async componentDidMount(){
   // console.log( this.props.name+ " child componentDidMount")
   const data= await fetch("https://api.github.com/users/nidhi-maurya");

   const json= await data.json();

   this.setState({
    userInfo:json,
   })

   console.log("github user data",json);
  }


  render(){


   // console.log( this.props.name+ " child render")

 const {name,location,avatar_url } =this.state.userInfo


    return (  
      <>
      <div className="p-10 border m-5">

        <img className="w-20" src={avatar_url} alt="avatar"/>



       <h2> name: {name} </h2>
       <h3>loaction:{location}</h3>
      

     </div>
    
    
      </>
    )
  }
}


export default UserClass;