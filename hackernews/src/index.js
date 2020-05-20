import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Time from './Time.js'
import './index.css';

function News() {
	return(
		<div className="news">
			<NavBar navbar={TestNavBar}/>
			<NewsList news={TestNews}/>
		</div>
	);
}

const NavBar = ({ navbar }) => (
	<div className="nav-bar">
		<LogoNavBar image={navbar.image}/>
		<WebsiteName name={navbar.name}/>
		<MenuBar items={navbar.menuItems}/>
		<a className="login" href="https://news.ycombinator.com/login?goto=news">login</a>
	</div>
);

const LogoNavBar = ({ image }) => (
	<img 
		src={image}
		className="logo-nav-bar" 
		alt="logo" />
);	

LogoNavBar.propTypes = {
	image: PropTypes.string.isRequired
};

const WebsiteName = ({ name }) => (
	<span className="website-name">
		{name}
	</span>
);

WebsiteName.propTypes = {
	name: PropTypes.string.isRequired
};

const MenuBar = ({ items }) => (
	<span className="menu-bar">
		{items.map( link => (
			<span key={link.id}><MenuItem item={link}/></span>
		))}
	</span>
);

const MenuItem = ({ item }) => (
	<a className="menu-item" href={item.url}>{item.name} | </a>
);
		

const NewsList = ({ news }) => (
	<ul className="news-list">
		{news.map( item => (
			<li key={item.id}><NewsItem item={item}/></li>
		))}
	</ul>
);

const NewsItem = ({ item }) => (
	<div className="news-item">
		<div className="headline">
			<ItemRank rank={item.rank}/>
			<RankIcon />
			<ItemHeadline headline={item.headline}/>
			<ItemSource source={item.source}/>
		</div>
		<div className="footer">
			<ItemInformation itemInfo={item.information}/>
		</div>
	</div>
);

const ItemRank = ({ rank }) => (
	<span className="item-rank">
		{rank}.
	</span>
);

const RankIcon = () => (
	<i className="fa fa-sort-asc" aria-hidden="true"/>
);

const ItemHeadline = ({ headline }) => (
	<span className="item-headline">
		{headline}
	</span>
);

const ItemSource = ({ source }) => (
	<span className="item-source">
		({source})
	</span>
);

const ItemInformation = ({ itemInfo }) => (
	<div className="item-information">
		<ItemDetails details={itemInfo.details} />
		| <a className="hide" href="www.hide.com">hide</a> |
		<Comments comments={itemInfo.details.comments}/>
	</div>
);

const ItemDetails = ({ details }) => (
	<span className="item-details">
		{details.points} points by {details.author}
		<Time time={details.timestamp}/>
	</span>
);

const Comments = ({ comments }) => (
	<span className="comments">
		{comments} comments
	</span>
);

const TestNavBar = {
	image: "/yclogo.png",
	name: "Hacker News",
	menuItems: [
		{
			id: 1,
			name: "new",
			url: "https://news.ycombinator.com/newest" 
		},
		{
			id: 2,
			name: "comments",
			url: "https://news.ycombinator.com/newcomments" 
		},
		{
			id: 3,
			name: "ask",
			url: "https://news.ycombinator.com/ask" 
		},
		{
			id: 4,
			name: "show",
			url: "https://news.ycombinator.com/show" 
		},
		{
			id: 5,
			name: "jobs",
			url: "https://news.ycombinator.com/jobs" 
		},
		{
			id: 6,
			name: "submit",
			url: "https://news.ycombinator.com/sumbit" 
		}
	]
};

const TestNews = [
	{
		id: 1,
		rank: "1",
		headline: "PWA Store",
		source: "pogressiveapp.store",
		information: {
			details: {
				id: 1,
				points: 59,
				author: "mattpearl",
				timestamp: "2020-04-23 15:00:00",
				comments: 32
			}
		}
	},
	{
		id: 2,
		rank: "2",
		headline: "Amazon scooped up data from its own sellers to launch competing products",
		source: "wsj.com",
		information: {
			details: {
				id: 2,
				points: 1146,
				author: "benryon",
				timestamp: "2020-04-23 11:00:00",
				comments: 599
			}
		}
	},
	{
		id: 3,
		rank: "3",
		headline: "The Quiet Revolution of Animal Crossing",
		source: "theatlantic.com",
		information: {
			details: {
				id: 3,
				points: 102,
				author: "deegles",
				timestamp: "2020-04-23 19:00:00",
				comments: 42
			}
		}
	},
	{
		id: 4,
		rank: "4",
		headline: "Books I recommend to my software engineering students",
		source: "utk.edu",
		information: {
			details: {
				id: 4,
				points: 150,
				author: "ashort11",
				timestamp: "2020-04-23 21:00:00",
				comments: 44
			}
		}
	},
	{
		id: 5,
		rank: "5",
		headline: "When in doubt: hang up, look up, and call back",
		source: "krebsonsecurity.com",
		information: {
			details: {
				id: 5,
				points: 463,
				author: "todsacerdoti",
				timestamp: "2020-04-23 22:00:00",
				comments: 225
			}
		}
	},
	{
		id: 6,
		rank: "6",
		headline: "PWA Store",
		source: "pogressiveapp.store",
		information: {
			details: {
				id: 1,
				points: 59,
				author: "mattpearl",
				timestamp: "2020-04-23 15:00:00",
				comments: 32
			}
		}
	},
	{
		id: 7,
		rank: "7",
		headline: "Amazon scooped up data from its own sellers to launch competing products",
		source: "wsj.com",
		information: {
			details: {
				id: 2,
				points: 1146,
				author: "benryon",
				timestamp: "2020-04-23 11:00:00",
				comments: 599
			}
		}
	},
	{
		id: 8,
		rank: "8",
		headline: "The Quiet Revolution of Animal Crossing",
		source: "theatlantic.com",
		information: {
			details: {
				id: 3,
				points: 102,
				author: "deegles",
				timestamp: "2020-04-23 19:00:00",
				comments: 42
			}
		}
	},
	{
		id: 9,
		rank: "9",
		headline: "Books I recommend to my software engineering students",
		source: "utk.edu",
		information: {
			details: {
				id: 4,
				points: 150,
				author: "ashort11",
				timestamp: "2020-04-23 21:00:00",
				comments: 44
			}
		}
	},
	{
		id: 10,
		rank: "10",
		headline: "When in doubt: hang up, look up, and call back",
		source: "krebsonsecurity.com",
		information: {
			details: {
				id: 5,
				points: 463,
				author: "todsacerdoti",
				timestamp: "2020-04-23 22:00:00",
				comments: 225
			}
		}
	},
	{
		id: 11,
		rank: "11",
		headline: "PWA Store",
		source: "pogressiveapp.store",
		information: {
			details: {
				id: 1,
				points: 59,
				author: "mattpearl",
				timestamp: "2020-04-23 15:00:00",
				comments: 32
			}
		}
	},
	{
		id: 12,
		rank: "12",
		headline: "Amazon scooped up data from its own sellers to launch competing products",
		source: "wsj.com",
		information: {
			details: {
				id: 2,
				points: 1146,
				author: "benryon",
				timestamp: "2020-04-23 11:00:00",
				comments: 599
			}
		}
	},
	{
		id: 13,
		rank: "13",
		headline: "The Quiet Revolution of Animal Crossing",
		source: "theatlantic.com",
		information: {
			details: {
				id: 3,
				points: 102,
				author: "deegles",
				timestamp: "2020-04-23 19:00:00",
				comments: 42
			}
		}
	},
	{
		id: 14,
		rank: "14",
		headline: "Books I recommend to my software engineering students",
		source: "utk.edu",
		information: {
			details: {
				id: 4,
				points: 150,
				author: "ashort11",
				timestamp: "2020-04-23 21:00:00",
				comments: 44
			}
		}
	},
	{
		id: 15,
		rank: "15",
		headline: "When in doubt: hang up, look up, and call back",
		source: "krebsonsecurity.com",
		information: {
			details: {
				id: 5,
				points: 463,
				author: "todsacerdoti",
				timestamp: "2020-04-23 22:00:00",
				comments: 225
			}
		}
	},
	{
		id: 16,
		rank: "16",
		headline: "PWA Store",
		source: "pogressiveapp.store",
		information: {
			details: {
				id: 1,
				points: 59,
				author: "mattpearl",
				timestamp: "2020-04-23 15:00:00",
				comments: 32
			}
		}
	},
	{
		id: 17,
		rank: "17",
		headline: "Amazon scooped up data from its own sellers to launch competing products",
		source: "wsj.com",
		information: {
			details: {
				id: 2,
				points: 1146,
				author: "benryon",
				timestamp: "2020-04-23 11:00:00",
				comments: 599
			}
		}
	},
	{
		id: 18,
		rank: "18",
		headline: "The Quiet Revolution of Animal Crossing",
		source: "theatlantic.com",
		information: {
			details: {
				id: 3,
				points: 102,
				author: "deegles",
				timestamp: "2020-04-23 19:00:00",
				comments: 42
			}
		}
	},
	{
		id: 19,
		rank: "19",
		headline: "Books I recommend to my software engineering students",
		source: "utk.edu",
		information: {
			details: {
				id: 4,
				points: 150,
				author: "ashort11",
				timestamp: "2020-04-23 21:00:00",
				comments: 44
			}
		}
	},
	{
		id: 20,
		rank: "20",
		headline: "When in doubt: hang up, look up, and call back",
		source: "krebsonsecurity.com",
		information: {
			details: {
				id: 5,
				points: 463,
				author: "todsacerdoti",
				timestamp: "2020-04-23 22:00:00",
				comments: 225
			}
		}
	}
];

ReactDOM.render(<News />,
	document.querySelector('#root'));
