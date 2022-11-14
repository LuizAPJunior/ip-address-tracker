import React from 'react';
import './InfoContainer.css';

const InfoContainer = ({ location }) => {
	return (
		<main className="info">
			<div className="info-column">
				<p className="info-header">IP address</p>
				<p>{location ? location.ip : 'N/A'}</p>
			</div>
			<div className="info-column">
				<p className="info-header">Location</p>
				<p>
					{location
						? `${location.location.city}, ${location.location.region} ${location.location.postalCode}`
						: 'N/A'}
				</p>
			</div>
			<div className="info-column">
				<p className="info-header">Timezone</p>
				<p>{location ? `UTC ${location.location.timezone}` : 'N/A'}</p>
			</div>
			<div className="info-column">
				<p className="info-header">ISP</p>
				<p>{location ? location.isp : 'N/A'}</p>
			</div>
		</main>
	);
};

export default InfoContainer;
