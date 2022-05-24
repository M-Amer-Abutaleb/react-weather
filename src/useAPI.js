import React, { useEffect, useState } from 'react';


const useAPI = () => {
	const [location, setLocation] = useState({
		loaded: true,
		coordinates: { lat: '30.033333', long: '31.233334' },
	});

	const onSuccess = (location) => {
		setLocation({
			loaded: true,
			coordinates: {
				lat: location.coords.latitude,
				long: location.coords.longitude,
			},
		});
	};

	const onError = (error) => {
		console.log(error);
		setLocation({
			loaded: false,
			error,
		});
	};

	useEffect(() => {
		if (!'geolocation' in navigator) {
			onError({
				code: 0,
				message: 'Geolocation is not supported on your browser',
			});
		} else {
			navigator.geolocation.getCurrentPosition(onSuccess, onError);
		}
	}, []);
	return location;
};

export default useAPI;
