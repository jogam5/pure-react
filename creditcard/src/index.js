import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function CreditCard({ cardInfo }) {
	return (
		<div className="credit-card">
			<BankName bankName={cardInfo.bankName}/>
			<AccountNumber accountNumber={cardInfo.accountNumber}/>
			<ExpirationDate expirationDate={cardInfo.expirationDate}/>
			<CardholderName cardholderName={cardInfo.cardholderName}/>
		</div>
	);
}

function BankName({ bankName }) {
	return (
		<div className="bank-name">
			{bankName}
		</div>
	);
}

function AccountNumber({ accountNumber }) {
	return (
		<div className="account-number">
			{accountNumber}
		</div>
	);
}

function ExpirationDate({ expirationDate }) {
	return (
		<div className="expiration-date">
			<div className="valid-thru">
				<p>VALID</p>
				<p>THRU</p>
			</div>
			{expirationDate}
		</div>
	);
}

function CardholderName({ cardholderName }) {
	return (
		<div className="cardholder-name">
			{cardholderName}
		</div>
	);
}

const cardInfoTest = {
	bankName: "Comienza BANK",
	accountNumber: "6728 8789 2009 1554",
	expirationDate: "08/19",
	cardholderName: "LUNA NUEVA"
};

ReactDOM.render(<CreditCard cardInfo={cardInfoTest}/>,
	document.querySelector('#root'));

