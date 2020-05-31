
/* Exercise 1
 
import React from 'react';
import ReactDOM from 'react-dom';

class OneTimeButton extends React.Component {
	state = {
		clicked: false
	}

	handleClick = () => {
		// The handler won't be called if the button is disabled,
		// so id we got here, it's safe to trigger the click
		this.props.onClick();
	
		// Ok, no more clicking.
		this.setState({ clicked: true });
	}

	render() {
		return (
			<button
				onClick={this.handleClick}
				disabled={this.state.clicked}
			>
				You can only click me once
			</button>
		);
	}
}
*/

/* Exercise 2
 
function OneTimeButton({ onClick }) {
	const [clicked, setClicked] = React.useState(false);

	const handleClick = () => {
		onClick();

		// Ok, no more clicking.
		setClicked(true);
	};

	return (
		<button onClick={handleClick} disabled={clicked}>
			You can only click me once
		</button>
	);
}

ReactDOM.render(
	<OneTimeButton onClick={() => alert("hi human")}/>,
	document.querySelector('#root')
);

*/


/* Exercise 3
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function StepTracker() {
	const [steps, setSteps] = useState(0);

	function increment() {
		setSteps(steps => steps + 1);
	}

	return (
		<div>
			Today youve taken {steps} steps!
			<br />
			<button onClick={increment}>I took another step</button>
		</div>
	);
}

ReactDOM.render(
	<StepTracker />,
	document.querySelector('#root')
);

*/

/* Exercise 4
import React from 'react';
import ReactDOM from 'react-dom';

function RandomList() {
	const [items, setItems] = React.useState([]);

	function addItem() {
	//const addItem = () => {
		setItems([
			...items,
			{
				id: items.length,
				value: Math.random() * 100
			}
		]);
	};

	return (
		<>
			<button onClick={addItem}>Add a number</button>
			<ul>
				{items.map(item => (
					<li key={item.id}>{item.value}</li>
				))}
			</ul>
		</>
	);
}

ReactDOM.render(
	<RandomList />,
	document.querySelector('#root')
);

*/

/* Exercise 5
import React from 'react';
import ReactDOM from 'react-dom';

const MultiCounter = () => {

	const [counts, setCounts] = React.useState({
		countA: 0,
		countB: 0
	});

	const incA = () => (
		setCounts(counts => ({
			...counts,
			countA: counts.countA + 1
		}))
	);

	const incB = () => (
		setCounts(counts => ({
			...counts,
			countB: counts.countB + 1
		}))
	);

	const badIncA = () => (
		setCounts({
			countA: counts.countA + 1
		})
	);

	return (
		<>
			<div>A: {counts.countA}</div>
			<div>B: {counts.countB}</div>
			<button onClick={incA}>
				Increment A
			</button>
			<button onClick={incB}>
				Increment B
			</button>
			<button onClick={badIncA}>
				Increment A Badly
			</button>
		</>
	);
}

ReactDOM.render(<MultiCounter />,
	document.querySelector("#root")
);
*/

/* Exercise 6 - Light
import React from 'react';
import ReactDOM from 'react-dom';

const Room = () => {
	const [light, setLight] = React.useState(false);

	const switchLight = () => (
		setLight(light => (!light))
	);

	return (
		<>
			<button style={{height: "60px"}} onClick={switchLight}>
				{light ? "off" : "on"}
			</button>
			<p> The light is turned {light ? "on" : "off"} </p>
		</>
	);
}

ReactDOM.render(<Room />,
	document.querySelector("#root")
);
*/

/* Exercise 7 - Random list
import React from 'react';
import ReactDOM from 'react-dom';

const RandomList = () => {
	const [numbers, setNumbers] = React.useState([]); 

	const addNumber = () => {
		setNumbers([
			...numbers,
			{
				id: numbers.length,
				value: Math.random() * 100
			}
		]);
	};

	return (
		<>
			<button onClick={addNumber}>
				Add random number
			</button>
			<ul>
				{numbers.map(item => ( <li key={item.id}>{item.value}</li> ))}
			</ul>
		</>
	);
}

ReactDOM.render(<RandomList />,
	document.querySelector("#root")
);

*/ 

/* Exercise 8 
import React from 'react';
import ReactDOM from 'react-dom';

const AudioControls = () => {
	const [volume, setVolume] = React.useState(98);
	const [trebble, setTrebble] = React.useState(50);
	const [mid, setMid] = React.useState(32);
	const [bass, setBass] = React.useState(41);

	const decreaseVolume = () => {
		var v = volume;
		if (v === 1) {
			v = 1;
		} else {
			v = volume - 1;
		}
		setVolume(volume => v)
	};

	const increaseVolume = () => {
		var v = volume === 100 ? 100 : (volume + 1)
		setVolume(volume => v)
	};

	const decreaseTrebble = () => {
		var t = trebble === 1 ? 1 : (trebble - 1)
		setTrebble(trebble => t)
	};

	const increaseTrebble = () => {
		var t = trebble === 100 ? 100 : (trebble + 1)
		setTrebble(trebble => t)
	};

	const decreaseMid = () => {
		var m = mid === 1 ? 1 : (mid - 1)
		setMid(mid => m)
	};

	const increaseMid = () => {
		var m = mid === 100 ? 100 : (mid + 1)
		setMid(mid => m)
	};

	const decreaseBass = () => {
		var b = bass === 1 ? 1 : (bass - 1)
		setBass(bass => b)
	};

	const increaseBass = () => {
		var b = bass === 100 ? 100 : (bass + 1)
		setBass(bass => b)
	};

	return (
		<>
			<div style={{display: "flex", margin: "0px 20px" }}>
				<button onClick={decreaseVolume}>
					-
				</button>
				<span style={{ width: "65px", margin: "0px 8px", "fontSize": "14px"}}>{volume} Volume</span>
				<button onClick={increaseVolume}>
					+
				</button>
			</div>

			<div style={{display: "flex", margin: "0px 20px" }}>
				<button onClick={decreaseTrebble}>
					-
				</button>
				<span style={{ width: "65px", margin: "0px 8px", "fontSize": "14px"}}>{trebble} Trebble</span>
				<button onClick={increaseTrebble}>
					+
				</button>
			</div>

			<div style={{display: "flex", margin: "0px 20px" }}>
				<button onClick={decreaseMid}>
					-
				</button>
				<span style={{ width: "65px", margin: "0px 8px", "fontSize": "14px"}}>{mid} Mid</span>
				<button onClick={increaseMid}>
					+
				</button>
			</div>

			<div style={{display: "flex", margin: "0px 20px" }}>
				<button onClick={decreaseBass}>
					-
				</button>
				<span style={{ width: "65px", margin: "0px 8px", "fontSize": "14px"}}>{bass} Bass</span>
				<button onClick={increaseBass}>
					+
				</button>
			</div>

		</>
	);
}

ReactDOM.render(<AudioControls />,
	document.querySelector("#root")
);
*/

/* Exercise 9 - Final version */
import React from 'react';
import ReactDOM from 'react-dom';

const AudioControls = () => {
	const [settings, setSettings] = React.useState({
		volume: 98,
		trebble: 50,
		mid: 32,
		bass: 41
	});

	const decreaseVolume = () => {
		var v = settings.volume;
		if (v === 1) {
			v = 1;
		} else {
			v = settings.volume - 1;
		}
		setSettings(settings => ({
			...settings,
			volume: v
		}))
	};

	const increaseVolume = () => {
		var v = settings.volume === 100 ? 100 : (settings.volume + 1)
		setSettings(settings => ({
			...settings,
			volume: v
		}))
	};

	const decreaseTrebble = () => {
		var t = settings.trebble === 1 ? 1 : (settings.trebble - 1)
		setSettings(settings => ({
			...settings,
			trebble: t
		}))
	};

	const increaseTrebble = () => {
		var t = settings.trebble === 100 ? 100 : (settings.trebble + 1)
		setSettings(settings => ({
			...settings,
			trebble: t
		}))
	};

	const decreaseMid = () => {
		var m = settings.mid === 1 ? 1 : (settings.mid - 1)
		setSettings(settings => ({
			...settings,
			mid: m
		}))
	};

	const increaseMid = () => {
		var m = settings.mid === 100 ? 100 : (settings.mid + 1)
		setSettings(settings => ({
			...settings,
			mid: m
		}))
	};

	const decreaseBass = () => {
		var b = settings.bass === 1 ? 1 : (settings.bass - 1)
		setSettings(settings => ({
			...settings,
			bass: b
		}))
	};

	const increaseBass = () => {
		var b = settings.bass === 100 ? 100 : (settings.bass + 1)
		setSettings(settings => ({
			...settings,
			bass: b
		}))
	};

	return (
		<>
			<Setting decrease={decreaseVolume} increase={increaseVolume} amount={settings.volume} type={"Volume"} />
			<Setting decrease={decreaseTrebble} increase={increaseTrebble} amount={settings.trebble} type={"Trebble"} />
			<Setting decrease={decreaseMid} increase={increaseMid} amount={settings.mid} type={"Mid"} />
			<Setting decrease={decreaseBass} increase={increaseBass} amount={settings.bass} type={"Bass"} />
		</>
	);
}

const Setting = ({decrease, increase, amount, type}) => (
	<div style={{display: "flex", margin: "10px 20px" }}>
		<button onClick={decrease}>
			-
		</button>
		<div style={{ textAlign:"center", display: "block", width: "65px", margin: "0px 8px", "fontSize": "12px"}}>
			<span style={{ display: "block", textAlign:"center"}}>{amount}</span>
			<span style={{ color: "#999", fontSize:"10px", textTransform:"uppercase"}}>{type}</span>
		</div>
		<button onClick={increase}>
			+
		</button>
	</div>
);

ReactDOM.render(<AudioControls />,
	document.querySelector("#root")
);
