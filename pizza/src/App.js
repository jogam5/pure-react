import React from 'react';
import './App.css';

//import ControlledInput from './Controlled.js';
import Screen from './Screen.js';
import ShoppingList from './ShoppingList.js';
import Room from './Room.js';
import Keypad from './Keypad.js';

function App() {
  return (
  	<>
			<Screen />
			<br/>
			<Room />
			<br/>
			<br/>
			<Keypad />
		</>
  );
}


export default App;
