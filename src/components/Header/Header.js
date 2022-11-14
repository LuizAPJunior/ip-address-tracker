import React from 'react';
import './Header.css';
import IPSearchForm from '../IPSearchForm/IPSearchForm';
const Header = ({ setLocation }) => {
	return (
		<header className="header">
			<h1>IP Address Tracker</h1>
			<IPSearchForm setLocation={setLocation} />
		</header>
	);
};

export default Header;
