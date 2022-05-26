import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context';
import Loading from './Loading';
import useCurrentLocation from '../useCurrentLocation';
import {
	WiFog,
	WiNightClear,
	WiDaySunny,
	WiNightAltRain,
	WiNightSnow,
	WiSleet,
	WiDayWindy,
	WiNightCloudyHigh,
	WiDayCloudy,
} from 'react-icons/wi';

const Main = () => {
	// State values
	const { loading, location, submitRequest } = useGlobalContext();
	const [showDiv, setShowDiv] = useState(true);
	const [cTemp, setCTemp] = useState(true);
	// APIs
	let currentLocation = useCurrentLocation();
	let { locality, countryName } = { ...currentLocation };

	// Functions
	const getTodayTime = () => {
		let date = new Date().toUTCString().slice(0, 16);
		return date;
	};

	const getHour = (x = 0) => {
		function addZero(i) {
			if (i < 10) {
				i = '0' + i;
			}
			return i;
		}
		const e = new Date();
		let hour = addZero(e.getHours() + x);
		let minute = addZero(e.getMinutes());
		let time = `${hour}:${minute}`;
		return time;
	};

	const getDay = (x = 0) => {
		const weekday = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		];
		const a = new Date();
		let day = weekday[a.getDay() + x + 1];
		return day;
	};

	// BODY
	return (
		<main className='main'>
			<nav className='container'>
				<div className='logo'>instaweather</div>
				<div className='buttons'>
					<button
						onClick={() => setCTemp(true)}
						className='btn  btn-outline-light'>
						C
					</button>
					<button
						onClick={() => setCTemp(false)}
						className='btn btn-outline-light'>
						F
					</button>
				</div>
			</nav>
			<section className='container firstSection'>
				<div className='left-side text-start'>
					<h4 className='mb-1 fw-normal'> {locality}</h4>
					<h2 className='mb-3'>{countryName}</h2>
					<h6>{getTodayTime()}</h6>
					<h1 className='left-logo'>
						<WiNightCloudyHigh />
					</h1>
				</div>
				<div className='right-side text-center '>
					<h1 className='firstTemp'>{cTemp ? 32 + ' °C' : 75 + ' °F'}</h1>
					<h5 className=''>
						{cTemp
							? 35 + ' °C' + ' / ' + 21 + ' °C'
							: 73 + ' °F' + ' / ' + 54 + ' °F'}
					</h5>
					<h6>Cloudy</h6>
				</div>
			</section>
			<section className='secondSection text-center mt-5'>
				<div className='container'>
					<ul className=' text-center buttons'>
						<li className='nav-item'>
							<button
								onClick={() => setShowDiv(true)}
								className='btn  btn-outline custom-button text-light'>
								Hourly
							</button>
						</li>
						<li className='nav-item'>
							<button
								onClick={() => setShowDiv(false)}
								className='btn btn-outline custom-button text-light'>
								Daily
							</button>
						</li>
					</ul>
				</div>
				<div className='card-body'>
					{showDiv ? (
						<ul className='hourly'>
							<li>
								<p>NOW</p>
								<h2>
									<WiNightAltRain />
								</h2>
								<h4>{cTemp ? 30 + '°' : 67 + '°'}</h4>
							</li>
							<li>
								<p>{getHour(1)}</p>
								<h2>
									<WiNightClear />
								</h2>
								<h4>{cTemp ? 34 + '°' : 70 + '°'}</h4>
							</li>
							<li>
								<p>{getHour(2)}</p>
								<h2>
									<WiDayCloudy />
								</h2>
								<h4>{cTemp ? 37 + '°' : 73 + '°'}</h4>
							</li>
							<li>
								<p>{getHour(3)}</p>
								<h2>
									<WiNightAltRain />
								</h2>
								<h4>{cTemp ? 39 + '°' : 82 + '°'}</h4>
							</li>
							<li>
								<p>{getHour(4)}</p>
								<h2>
									<WiNightClear />
								</h2>
								<h4>{cTemp ? 35 + '°' : 69 + '°'}</h4>
							</li>
							<li>
								<p>{getHour(5)}</p>
								<h2>
									<WiNightAltRain />
								</h2>
								<h4>{cTemp ? 45 + '°' : 82 + '°'}</h4>
							</li>
							<li>
								<p>{getHour(6)}</p>
								<h2>
									<WiDayWindy />
								</h2>
								<h4>{cTemp ? 49 + '°' : 88 + '°'}</h4>
							</li>
						</ul>
					) : (
						<ul className='daily'>
							<li>
								<p>Tomorrow | {getDay()}</p>
								<h2>
									<WiNightAltRain />
								</h2>
								<h4>{cTemp ? 40 + '°' : 79 + '°'}</h4>
							</li>
							<li>
								<p>{getDay(1)}</p>
								<h2>
									<WiNightAltRain />
								</h2>
								<h4>{cTemp ? 37 + '°' : 63 + '°'}</h4>
							</li>
							<li>
								<p>{getDay(2)}</p>
								<h2>
									<WiDayWindy />
								</h2>
								<h4>{cTemp ? 39 + '°' : 77 + '°'}</h4>
							</li>
						</ul>
					)}
				</div>
			</section>
			<footer className='text-start'>
				<h3>
					Made by <span className='text-warning'>Mohamed Amer</span>{' '}
				</h3>
			</footer>
		</main>
	);
};

export default Main;
