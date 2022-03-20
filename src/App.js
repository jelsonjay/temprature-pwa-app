import '../src/styles/styles.scss';
import { useState } from 'react';

export default function App() {
	const [temp, setTemp] = useState(19);
	const [tempColor, setTemColor] = useState('cloud');

	// Increse temperature
	const increseTemp = e => {
		if (temp === 47) return;
		const newTemp = temp + 1;
		if (newTemp >= 30) {
			setTemColor('sun');
		}
		setTemp(newTemp);
	};

	// Decrese temperature
	const decreseTemp = () => {
		if (temp === 0) return;
		const newTemp = temp - 1;
		if (newTemp < 20) {
			setTemColor('rain');
		}
		setTemp(temp - 1);
	};

	return (
		<>
			<h1>Temperature Control App</h1>
			<div className='container'>
				<div className='temperature_display'>
					<div className={`temperature ${tempColor}`}>{temp}°C</div>
				</div>
				<div className='btn'>
					<button onClick={() => increseTemp()}>+</button>
					<button onClick={() => decreseTemp()}>-</button>
				</div>
			</div>
		</>
	);
}
