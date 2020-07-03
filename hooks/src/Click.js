import React from 'react';

function InputBox() {
	React.useEffect( () => {
		// Add when mounted
		document.addEventListener('click', handleStatusChange);
		// Return function to be called when unmounted
		return () => {
			document.removeEventListener('click');
		};
	}, []);

	function handleStatusChange(event) {
		alert('click');
	}

	return (
		<>
			<p>hola</p>
		</>
	)
}

export default InputBox;

