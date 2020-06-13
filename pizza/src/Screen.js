import React from 'react';

const Screen = () => {
	const [letter, setLetter] = React.useState('Small');
	const [flavor, setFlavor] = React.useState('Pepperoni');
	const [gluten, setGluten] = React.useState('false');
	const [notes, setNotes] = React.useState('Add special notes, i.e. crispy');

	const handleLetter = (event) => {
		console.log(event.target.value);
		setLetter(event.target.value);
	};
	const handleFlavor = (event) => {
		console.log(event.target.value);
		setFlavor(event.target.value);
	};
	const handleGluten = (event) => {
		console.log(event.target.checked);
		setGluten(event.target.value);
	};
	const handleNotes = event => {
		console.log(event.target.value);
		setNotes(event.target.value);
	};
	const sendOrder = () => {
		const order = {
			size: letter,
			flavor: flavor,
			gluten: gluten,
			notes: notes,
		};
		console.log(order);
	};

	return (
		<div className="screen">
			<Size letter={letter} handle={handleLetter}/>
			<div className="ingridients">
				<label className="label">Topping</label>
				<select onChange={handleFlavor} value={flavor} name="flavor" id="flavor">
					<option value="Pepperoni">Pepperoni</option>
					<option value="Ham">Ham</option>
				</select>
				<div className="gluten">
					<input 
						type="checkbox" 
						value={gluten}
						onChange={handleGluten}
					/>
					<label>Gluten free</label>
				</div>
				<label className="label">Special instructions</label>
				<textarea className="notes" value={notes} onChange={handleNotes}>
				</textarea>
			</div>
			<button onClick={sendOrder} className="order-button">
				Send Order
			</button>
		</div>
	);
}

const Size = ({ letter, handle}) => (
	<div className="size">	
		<label className="label">Size</label>
		<form>
			<input
				type="radio"
				value="Small"
				checked={letter === 'Small'}
				onChange={handle}
			/>
			<label>Small</label>
			<input
				type="radio"
				value="Medium"
				checked={letter === 'Medium'}
				onChange={handle}
			/>
			<label>Medium</label>
			<input
				type="radio"
				value="Large"
				checked={letter === 'Large'}
				onChange={handle}
			/>
			<label>Large</label>
		</form>
	</div>	
);

export default Screen;
