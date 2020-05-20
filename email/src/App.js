import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
    	<Email email={emailTest}/>
    </div>
  );
}

function Email({ email }) {
	return(
		<div className="email">
			<CheckBox />
			<i class="fa fa-heart" aria-hidden="true"></i>
			<div className="top-line">
				<Sender sender={email.sender}/>
				<Subject subject={email.subject}/>
				<DateEmail date={email.date}/>
			</div>
			<Message message={email.message}/>
		</div>
	);
}

const CheckBox = () => (
	<label className="checkmark">
  	<input type="checkbox"/>
	</label>
);

const Sender = ({ sender }) => (
	<span className="sender">
		{sender}
	</span>
);

const Subject = ({ subject }) => (
	<span className="subject">
		{subject}
	</span>
);

const DateEmail = ({ date }) => (
	<span className="date-email">
		{date}
	</span>
);

const Message = ({ message }) => (
	<div className="message">
		{message}
	</div>
);

const emailTest = {
	sender: "John Stockton",
	subject: "New GRE official dates",
	date: "Jun 5",
	message: "Good morning. There are new dates avaialable for the GRE test that will take place tomorrow."
};

export default App;
