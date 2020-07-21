import React from 'react';
import './App.css';
import './hover.css';
import Asset from './Asset.png';
import Header from './components/header/header.js';
import arrow from './index.png';
import { Link } from "react-router-dom";
import './Home.css';

class Home extends React.Component{
    render() {
      return (
         <div className="Home">
          <Header/>
            <img src = {Asset} id='mainBuilding' alt ='thomson building' class='center'/>
            <Link to="/login-page"> <p id= 'venue' class = 'hvr-grow '>Venue Booking</p> </Link>
             <Link to="/login-page"> <img src = {arrow} id ='index' class='hvr-wobble-horizontal' alt ='index'/> </Link>
         </div>
        );
    }
}

export default Home;