import React from 'react';

// Plain empty context
const RoomContext = React.createContext();

// A component whose sole job is to manage
// the state of the Room

function RoomStore({ children }) {
	const [isLit, setLit] = React.useState(false);

	const toggleLight = () => {
		setLit(!isLit);
	};

	// Pass down the state and the onToggleLight action
	return (
		<RoomContext.Provider
			value={{
				isLit,
				onToggleLight: toggleLight
			}}
		>
			{children}
		</RoomContext.Provider>
	);
}

// Receive the state of the light, and the function to
// toggle the light, from RoomContext
const Room = () => {
	const { isLit, onToggleLight } = React.useContext(RoomContext);

	return (
		<div className={`room ${
			isLit ? 'lit' : 'dark'
		}`}>
			The room is {isLit ? 'lit' : 'dark'}.
			<br/>
			<button onClick={onToggleLight}>
				Flip
			</button>
		</div>
	);
};

export default RoomStore;
