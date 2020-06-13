import React from 'react';

function Counter() {
	// First render will create the state, and
	// it will persist through future renders
	const [sum, dispatch] = React.useReducer((state, action) => {
		console.log('state:'+state);
		console.log('action:'+action);
		return state + action;
	}, 0);
	console.log('sum:'+sum);
	console.log('dispatch:'+dispatch);

	return (
		<>
			{sum}

			<button onClick={() => dispatch(1)}>
				Add 1
			</button>
		</>
	);
}

export default Counter;
