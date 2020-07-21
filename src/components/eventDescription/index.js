import React, { Component }  from 'react';
import './main.css'
import { Button } from 'react-bootstrap';
import { Link} from "react-router-dom";
import Header from '../header/header';

const EventDescription = ()=> {

    return (
        <div className = "eventDescription-wrapper">
            <Header />
            <div> Event Description </div>
            <input className = "eventDescription-input">
            </input>
            <button >
              <Link to="/progress-bar">  Submit </Link>
            </button>
        </div>

    )

}

export default EventDescription;