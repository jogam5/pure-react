import React from 'react';

const ControlledInput = () => {
	const [firstName, setFirstName] = React.useState('');
	const [lastName, setLastName] = React.useState('');

	const handleFirstName = event => {
		console.log('handle first name');
		setFirstName(event.target.value);
		console.log('out handle first name');
		console.log(firstName);
	};

	const handleLastName = event => {
		setLastName(event.target.value);
	};

	return (
		<>
			<div style={{padding:"5px"}}>
				<label>First Name</label>
				<input
					type="text"
					value={firstName}
					onChange={handleFirstName}
				/>
				<label>Last Name</label>
				<input
					type="text"
					value={lastName}
					onChange={handleLastName}
				/>
				<div>
					<p>{firstName} - {lastName}</p>
				</div>
			</div>
		</>
	);
}

export default ControlledInput;
