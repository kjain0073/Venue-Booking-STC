import React from 'react';
import './header.css';
import line1 from './Line 1.png';
import logo from './IITR 1.png';

const Header = () => {
	return (
			<div >
				<img src = {line1} class='border1' alt ='border1'/>
				<img src = {logo} class='logo' alt ='logo'/>
				<p className='hindiName'>भारतीय प्रौद्योगिकी संस्थान रुड़की </p>	
				<p className='englishName'>INDIAN INSTITUTE OF TECHNOLOGY ROORKEE</p>
			</div>
		);
}

export default Header;