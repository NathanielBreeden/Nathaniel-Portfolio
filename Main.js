import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  
  import Shopping from "./Shopping";
  import Cart from "./Cart";
  import Qanda from "./Qanda";

class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
                <h1>The Online Shop</h1>
                <div><img src="images/cart.png"></img> </div>
                
                <ul className="header">
                   
                    <li><NavLink to="/shopping">Shopping</NavLink></li>
                    <li><NavLink to="/cart">Cart</NavLink></li>
                    <li><NavLink to="/qanda">Q and A</NavLink></li>
                </ul>
                <div className="content">
                     
                    <Route exact path="/shopping" component={Shopping}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/qanda" component={Qanda}/>
                </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;