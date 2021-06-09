import React, { Component } from "react";
 
class Qanda extends Component {
  render() {
    return (
      <div>
        <h2>Questions You've Asked</h2>
        <p>Q: Can the PS5 be used as a toaster?</p>
        <p>A: No, the PS5 cannot be used as a toaster?</p>
        <p>Q: Is this blender quiet or loud?</p>
        <p>A: This blender is extremely loud. </p>
        <h2>Questions You've Answered</h2>
        <p>Q: I haven't bought this, but I don't like the color. ZERO STARS</p>
        <p>A: This isn't a question.</p>
        <p>Q: Would you recommded this product as an alternative to lightbulbs?</p>
        <p>Yes, this is what I bought it for and it works great!</p>
      </div>
    );
  }
}
 
export default Qanda;