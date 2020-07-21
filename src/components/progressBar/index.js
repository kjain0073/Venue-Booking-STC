import React, { Component } from 'react';
import { Timeline, Bookmark, Marker }from 'react-vertical-timeline';
import { Link } from 'react-router-dom';
import Header from '../header/header';
import 'react-vertical-timeline/style.css';
import './main.css'

export default class ProgressBar extends Component {
   
          constructor(props) {
        super(props);
        this.state = {
            progress: 50
        };
    }
    render(){
        return (
            <div className="ProgressBar">
                <Header/>
                <Timeline height={500} progress={this.state.progress} >
                <Bookmark progress={0} >
                    BOOKING REQUESTED 
                </Bookmark>
                <Bookmark progress={50} >
                    APPROVED BY FACULTY ADVISER
                </Bookmark>
                <Bookmark progress={100} >
                    APPROVED BY VINEET JI
                </Bookmark>
                </Timeline>
                <Link to="/"><h4> Go back to main page.</h4></Link>
            </div>
        )   
    }


}
