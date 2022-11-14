import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';
import './App.css';
import iconMarker from './assets/images/icon-location.svg';

import Header from './components/Header/Header';
import InfoContainer from './components/InfoContainer/InfoContainer';

const MapSetView = ({ location }) => {
	const map = useMap();
	useEffect(() => {
		if (location) map.setView([location.location.lat, location.location.lng]);
	}, [location]);
	return null;
};

const App = () => {
	const [location, setLocation] = useState(null);
	const customMarker = new Icon({
		iconUrl: iconMarker,
		iconSize: [46, 56],
	});

	return (
		<div className="app">
			<Header setLocation={setLocation} />
			<InfoContainer location={location} />
			<MapContainer
				center={[51.50853, -0.12574]}
				zoom={20}
				scrollWheelZoom={true}
				zoomControl={false}
			>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				/>
				<Marker
					position={
						location
							? [
									parseFloat(location.location.lat),
									parseFloat(location.location.lng),
							  ]
							: [51.50853, -0.12574]
					}
					icon={customMarker}
				></Marker>
				<MapSetView location={location} />
			</MapContainer>
		</div>
	);
};

export default App;
