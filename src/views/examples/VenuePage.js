import React, { Component } from 'react';
import Header from '../../components/header/header';
import { Link } from "react-router-dom";

class VenuePage extends Component {
    // state = {  }
    render() { 
        return ( 
            <section>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">    
                            <div className="panel panel-info" style={{margin:"20px"}}>
                                <div className="panel-heading">
                                    Choose Venue
                                </div>

                                <div className="panel-body">
                                    <div className="form-horizontal">
                                        <div className="form-group">
                                            <div className="col-sm-12">
                                                        
                                            </div>
                                        </div>
                                    </div>
                                </div>  

                                <div id="venuePanel" style={{padding:"10px"}}>
                                    <div className="form-horizontal">

                                        <div className="form-group">
                                            <div className="col-sm-12">
                                                <Link to="/calender-page">
                                                    <button type="button" id="venue-button" className="btn btn-outline-primary">MAC</button>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-sm-12"></div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-sm-12">
                                                <button type="button" id="venue-button" className="btn btn-outline-primary">LHC</button>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-sm-12"></div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-sm-12">
                                                <button type="button" id="venue-button" className="btn btn-outline-primary">Other Venue</button>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-sm-12"></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4"></div>    
                    </div>  
                </div>
            </section>          
        );
    }
}
 
export default VenuePage;