import React from 'react';

function InputBox() {
	// Initialize state
	const [label, setLabel] = React.useState('');

	// Each time the state of the function changes,
	// this method will be triggered
	React.useEffect( () => {
		document.title = label;
	});

	return (
		<>
			<textarea 
				value={label} 
				onChange={(event) => setLabel(event.target.value)} 
			/>
		</>
	)
}

export default InputBox;
