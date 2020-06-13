import React from 'react';

const Keypad = () => {
	const [secret, dispatch] = React.useReducer((state, action) => {
		let result;
		console.log('==================');	
		// reset when press any number
		if ( state === 'ENTER KEY' ) {
			state = '';
		}
		// if state => 0, use action
		// else use state to check prev. state
		if ( state === '' ) {
			if (action === '1') {
			} else {
				action = '';
			}
			result = state + action;
		} else {
			result = state + action;	
			const ln = result.length;
			if (ln === 2) {
				if (result !== '15') {
					result = '';
				}
			} else if (ln === 3) {
				if (result !== '158') {
					result = '';
				}
			} else if (ln === 4) {
				if (result !== '1584') {
					result = '';
				}
			}
		}

		if ( result === '1584') {
			result = 'UNLOCKED';
		}

		console.log('result: '+result);
		return result;
	}, 'ENTER KEY');

	return (
		<div className="keypad">
			<div className="pad">
				<div className="secret">
					<label>{secret}</label>
				</div>
				<div className="pad-border">
					<div className="row">
						<div className="digit">
							<button onClick={() => dispatch("1")}>
								1
							</button>
						</div>	
						<div className="digit">
							<button onClick={() => dispatch("2")}>
								2
							</button>
						</div>	
						<div className="digit">
							<button onClick={() => dispatch("3")}>
								3
							</button>
						</div>	
					</div>
					<div className="row">
						<div className="digit">
							<button onClick={() => dispatch("4")}>
								4
							</button>
						</div>	
						<div className="digit">
							<button onClick={() => dispatch("5")}>
								5
							</button>
						</div>	
						<div className="digit">
							<button onClick={() => dispatch("6")}>
								6
							</button>
						</div>	
					</div>
					<div className="row">
						<div className="digit">
							<button onClick={() => dispatch("7")}>
								7
							</button>
						</div>	
						<div className="digit">
							<button onClick={() => dispatch("8")}>
								8
							</button>
						</div>	
						<div className="digit">
							<button onClick={() => dispatch("9")}>
								9
							</button>
						</div>	
					</div>
					<div className="row">
						<div className="digit">
							<button onClick={() => dispatch("0")}>
								0
							</button>
						</div>	
					</div>
				</div>
			</div>
		</div>
	);
}

export default Keypad;
