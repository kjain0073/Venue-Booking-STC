import React, { Component } from 'react';
import Header from '../../components/header/header';
import Calender from '../../components/calender/index';
import { Link } from "react-router-dom";

class CalenderPage extends Component {
    // state = {  }
    render() { 
        return ( 
            <section>
                <Header />
                <div>This is the page for CalenderPage.</div>
                <Calender/>
                <br/>
                <Link to="/venue-description">Enter Event Description</Link> 
                <br/>
                <br/>
                <Link to="/">Go back to main page.</Link>
            </section>
        );
    }
}
 
export default CalenderPage;