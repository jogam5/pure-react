import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ button }) => (
	<button 
		className={button.className} >
		<a href={button.url}>
			{button.label}
		</a>
	</button>
);

Button.propTypes = {
	button: PropTypes.isRequired
};

export default Button;

/* 
 * Suggested CSS:
 *
.login-button {
	border: 1px solid #EFEFEF;
	border-radius: 24px;
	box-sizing: border-box;   
	background-color: #EFEFEF;
	font-size: 16px;
	font-weight: 700;
	height: 48px;
	width: 80px;
	margin-left: 20px;
	text-decoration: none;
	cursor: pointer;
}

.login-button:hover {
	background-color: #ccc;
}

.login-button a {
	text-decoration: none;
	color: black;
}/
*/
