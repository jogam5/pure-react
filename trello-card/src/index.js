import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css'

const CardRow = ({ cards }) => (
	<div className="card-row">
		{cards.map(item => (
			<span className="row-element" key={item.id}><Card card={item}/></span>
		))}
	</div>
);

const Card = ({ card }) => (
	<div className="card">
		<div className="card-header">
			<Title title={card.title}/>
		</div>
		<TaskList tasks={card.tasks}/>
		<div className="card-footer">
			<Footer footer={card.footer}/>
		</div>
	</div>
);

const Title = ({ title }) => (
	<span className="title">
		{title}
	</span>
);

Title.propTypes = {
	title: PropTypes.string.isRequired
};

const Task = ({ task }) => (
	<span className="task">
		{task}
	</span>
);

Task.propTypes = {
	task: PropTypes.string.isRequired
};

const TaskList = ({ tasks }) => (
	<ul className="task-list">
		{tasks.map(item => (
			<li key={item.id}><Task task={item}/></li>
		))}
	</ul>
);

TaskList.propTypes = {
	tasks: PropTypes.array
}

const Footer = ({ footer }) => (
	<span className="footer">
		{footer}
	</span>
);

Footer.propTypes = {
	footer: PropTypes.string.isRequired
};

const cardList = [
	{
		id: "1",
		title: "To Do",
		tasks : [
			"Hire Accountant",
			"Open Bank Account",
			"Design Specs"
		],
		footer: "Add a card ..."
	},
	{
		id: "2",
		title: "Doing",
		tasks : [
			"Create Facebbok Page",
			"Build Website",
			"Design logo",
			"Sign Office Lease"
		],
		footer: "Add a card ..."
	},
	{
		id: "3",
		title: "Done",
		tasks : [
			"Close Bank Account",
			"Write Business Plan",
		],
		footer: "Add a card ..."
	}
];

ReactDOM.render(<CardRow cards={cardList}/>,
	document.querySelector('#root')
);
