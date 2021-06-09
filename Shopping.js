import React, { Component } from "react";
 
class Shopping extends Component {
  render() {
    return (
      <div>
        <h2>Welcome back Nathaniel!</h2>
        <p>Currently Viewing: Popular Items </p>
        <body>
          <img src="images/ps5.png"></img>
          <p>Play Station 5</p>  
          <p>$500</p>
          <img src="images/switch.jpg"></img> 
          <p>Nintendo Switch</p>
          <p>$300</p>
          <img src="images/xbox.png"></img> 
          <p>Xbox</p>
          <p>$500</p>
        </body>
      </div>
      
    );
  }
}
 
export default Shopping;