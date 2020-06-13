import React from 'react';

const Room = () => {
	const [level, dispatch] = React.useReducer((state, action) => {
		// Update the state of light
		return action;
	}, 'off');

	const handleLevels = () => {
		switch (level) {
			case 'off':
				dispatch('low');
				break;
			case 'low':
				dispatch('medium');
				break;
			case 'medium':
				dispatch('high');
				break;
			default:
				return '';	
		}	
	};

	const handleOff = () => {
		dispatch('off')
	};

	return (
		<>
			<p> Light is: {level} </p>
			<button onClick={handleLevels}>
				Next level
			</button>
			<button onClick={handleOff}>
				Turn off
			</button>
		</>
	);
}

export default Room;
