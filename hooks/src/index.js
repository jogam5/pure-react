import React from 'react';
import ReactDOM from 'react-dom';
import Reddit from './Reddit.js';
import InputBox from './InputBox.js';
import Click from './Click.js';
import RoomStore from './RoomStore.js';

function App() {
	return (
		<>
			<SetReddit />
		</>
	);
}

function SetReddit() {
	// 2 pieces of state: one to hold the input value,
	// another to hold the current subreddit
	const [inputValue, setValue] = React.useState('ai');
	const [subreddit, setSubreddit] = React.useState(inputValue);

	// Update the subreddit when the user presses enter
	const handleSubmit = e => {
		e.preventDefault();
		setSubreddit(inputValue);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					value={inputValue}
					onChange={e => setValue(e.target.value)}
				/>
			</form>
			<Reddit subreddit={subreddit} />
		</>
	);
}

const LogEffect = () => {
	const [text, setText] = React.useState('');

	React.useEffect(() => {
		console.log('latest value:', text);
	});

	return (
		<input
			value={text}
			onChange={e => setText(e.target.value)}
		/>
	);
};

const Input = () => {
	// Store a reference to the input's DOM node
	const inputRef = React.useRef();

	// Store the input's value in state
	const [value, setValue] = React.useState("");

	React.useEffect(() => {
			// This runs AFTER  the first render,
			// so the ref is already set.
			console.log("render");
			inputRef.current.focus();
		},
		// The effect "depends on" inputRef
		[inputRef]
	);

	return (
		<input
			ref={inputRef}
			value={value}
			onChange={e => setValue(e.target.value)}
		/>
	);
}

ReactDOM.render(
	<App />,
	document.querySelector('#root')
);
