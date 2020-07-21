import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Index from "./views/Index.js";
import LoginPage from "./views/examples/LoginPage.js";
import VenuePage from "./views/examples/VenuePage.js";
import CalenderPage from "./views/examples/CalenderPage.js";
import EventDescription from "./components/eventDescription/index";
import ProgressBar from "./components/progressBar/index";
import Home from './Home';
import './App.css';

class App extends React.Component{
	render(){
		return(
			<div className="App">
				<BrowserRouter>
				        <Switch>
				        	<Route path="/home" component={Home}/>
				            <Route path="/index" render={props => <Index {...props} /> } />
				            <Route path="/login-page" render={props => <LoginPage {...props} /> } />
				            <Route path="/venue-page" render={props => <VenuePage {...props} /> } />
				            <Route path="/calender-page" render={props => <CalenderPage {...props} /> } />
				            <Route path="/venue-description" component={EventDescription}/>
				            <Route path="/progress-bar" component={ProgressBar}/>
				            <Redirect to="/home" />
				            <Redirect from="/" to="/home" />
				        </Switch>
				</BrowserRouter>
			</div>
			)
	}
}
export default App