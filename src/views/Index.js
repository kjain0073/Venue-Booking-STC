import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Header from '../components/header/header';

class Index extends Component {
/*    state = {  }*/
    render() { 
        return (  
            <section>
                <Header />
                <p>This is index page.<a href="/login-page">Click here to go to /login-page</a></p>
            </section>
        );
    }
}
 
export default Index;