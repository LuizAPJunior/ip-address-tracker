import React, { useState, useEffect } from 'react';
import './IPSearchForm.css';

const IPSearchForm = ({ setLocation }) => {
	const [ip, setIP] = useState(null);
	const API_KEY = 'at_bsSbcyZZxQeHC4D21lIsFodQNYHMc';

	const handleIPForm = (event) => {
		event.preventDefault();
		setIP(event.target[0].value);
	};

	useEffect(() => {
		if (ip) {
			fetch(
				`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&domain=${ip}`
			)
				.then((response) => response.json())
				.then((data) => setLocation(data));
		} else {
			fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`)
				.then((response) => response.json())
				.then((data) => setLocation(data));
		}
	}, [ip]);

	return (
		<form className="formIP" onSubmit={handleIPForm}>
			<input
				type="search"
				name="ip"
				id="ip"
				placeholder="Search for any IP Address or Domain"
			/>
			<button name="search-button" aria-label="search button" type="submit">
				<svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
					<path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
				</svg>
			</button>
		</form>
	);
};

export default IPSearchForm;
