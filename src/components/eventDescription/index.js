import React, { Component }  from 'react';
import './main.css'
import { Button } from 'react-bootstrap';
import { Link} from "react-router-dom";
import Header from '../header/header';

const EventDescription = ()=> {

    return (
        <div className="EventDescription">
            <Header />
            <div className = "eventDescription-wrapper">
            <div> Event Description </div>
            <input className = "eventDescription-input">
            </input>
            <button >
              <Link to="/progress-bar">  Submit </Link>
            </button>
            </div>
        </div>    
    )

}

export default EventDescription;