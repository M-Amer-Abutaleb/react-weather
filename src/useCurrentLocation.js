import { useState, useEffect, useCallback } from 'react';
import { useGlobalContext } from './context';
const useCurrentLocation = () => {
	let location = useGlobalContext();
	let [currentLocation, setCurrentLocation] = useState([]);
	let { long, lat } = { ...location };

	const getCurrentLocation = useCallback(async () => {
		const URL = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`;
		const response = await fetch(URL);
		const data = await response.json();
		return setCurrentLocation(data);
	}, [lat, long]);
	useEffect(() => {
		getCurrentLocation();
	}, []);
	return currentLocation;
};

export default useCurrentLocation;
