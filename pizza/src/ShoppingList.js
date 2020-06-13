import React from 'react';

const reducer = (state, action) => {
	switch (action.type) {
		// do something with the action
		case 'add':
			return [
				...state,
				{
					id: state.length,
					name: action.name
				}
			];
		case 'substract':
			// keep every item except the one we want to remove
			return state.filter((_, index) => index !== action.index);
		case 'clear':
			return state = [];
		default:
			return state;
	}
};

function ShoppingList() {
	const inputRef = React.useRef();
	const [items, dispatch] = React.useReducer(reducer, []);

	const handleSubmit = event => {
		event.preventDefault();
		dispatch({
			type: 'add',
			name: inputRef.current.value
		});
		inputRef.current.value = '';
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input ref={inputRef} />
			</form>
			<ul>
				{items.map( (item, index) => (
					<li key={item.id}>
						{item.name}
						<button
							onClick={() => dispatch({ type: 'substract', index })}
						>
						X
						</button>
					</li>
				))}
				<button 
					onClick={() => dispatch({ type: 'clear' })}>
					clear list
				</button>
			</ul>
		</>
	);
}

export default ShoppingList;
