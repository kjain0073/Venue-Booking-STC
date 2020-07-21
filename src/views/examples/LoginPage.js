import React, { Component } from 'react';
import Header from '../../components/header/header';
import '../../assets/css/LoginPage.css';
import { Link} from "react-router-dom";

class LoginPage extends Component {
    // state = {  }

    handleSubmit = (e) => {
        
    }

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
                                    Login
                                    <span id="lblinfo"></span>
                                </div>

                                <div className="panel-body">
                                    <div className="form-horizontal">
                                        <div className="form-group">
                                            <div className="col-sm-12">
                                                        
                                            </div>
                                        </div>
                                    </div>
                                </div>  

                                <div id="Panel1" style={{padding:"10px"}}>
                                    <div className="form-horizontal">
                                        <div className="form-group">
                                            <div className="col-sm-12">
                                                <strong>Username:</strong>
                                                <input name="txtUsername" type="text" id="txtUsername" className="form-control" placeholder="abc@cs.iitr.ac.in"/>
                                                <span id="RequiredFieldValidator1" className="text-danger" style={{display:"none"}}placeholder="">*</span>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-sm-12">
                                                <strong>Password:</strong>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-sm-12">
                                                <input name="txtPassword" type="password" id="txtPassword" className="form-control" />
                                                <span id="RequiredFieldValidator2" className="text-danger" style={{display:"none"}} placeholder="(minimum 8 characters)">*</span>
                                            </div>
                                        </div>


                                        <div className="form-group">
                                            <div className="col-sm-12">
                                                <Link to="/venue-page">
                                                    <input type="submit" name="btnSubmit" onClick={this.handleSubmit} value="Login" id="btnSubmit" className="btn-sm btn-success" />
                                                </Link>
                                            </div>
                                        </div>

                                        {/* <div className="form-group">
                                            <div className="col-md-12">
                                                <a id="HyperLink1" href="Forgotpass.aspx">Forgot Password?</a>
                                            </div>
                                        </div> */}
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
export default LoginPage;