import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './Logo.js';
import Button from './Button.js';
import WebsiteNavLabel from './WebsiteNavLabel.js';
import './index.css';

/* 
 ====
 Main Function
 ====
*/

const App = () => (
	<div className="app">
		<header>
			<Nav
				left={<WebsiteNavLabel website={websiteInfo}/>}
				center={<SearchBox/>}
			/>
		</header>
		<section>
			<BoardProfile boardProfile={testBoardProfile} />
		</section>	
		<section>	
			<BoardGridHeader header={testBoardProfile.category}/>
			<div className="grid-perimeter">
				<div className="grid-body">
					<div className="grid">
						<div className="grid-items centered-within-wrapper">
						<BoardGrid array={testArray}/>
						</div>
					</div>
				</div>
			</div>
		</section>	
	</div>
);

/* 
 ====
 Nav 
 ====
*/

const Nav = ( props ) => (
	/* The Nav component could be improved by deliberately
	 * turning each of its components into separate files.
	 * In addition, it could be helpful to redo its CSS by
	 * using a custom grid in order to have a better grasp
	 * of the differences between a grid and the flex property
	 */
	<div className="nav">
		<div className="nav-left">{props.left}</div>
		<div className="nav-center">{props.center}</div>
		<div className="nav-right">
			<Button button={login} />
			<Button button={signup} />
			<OptionsButton />
		</div>	
	</div>

	/* 
	<div className="nav">
		<div className="nav-left">
			<WebsiteNavLabel website={nav}/>
		</div>
		<div className="nav-center">
			<SearchBox />
		</div>
		<div className="nav-right">
			<Button button={loginButton} />
			<Button button={signupButton} />
			<OptionsButton />
		</div>
		</div>
	*/
);

const SearchBox = () => {
	return (
		<>
			<div className="search-box">	
				<i className="fa fa-search" aria-hidden="true"/>
				<input 
					type="text" 
					placeholder="Search for easy dinners, fashion, etc."
					className="search-input"
				/>
			</div>
		</>
	);
};

const OptionsButton = () => (
	<i className=" fa fa-sort-desc" aria-hidden="true"/>
);

/* 
 ====
 Board Profile
 ====
*/

const BoardProfile = ({ boardProfile }) => (
	<div className="board-profile">
		<div className="board-header">
			<FollowButton />
		</div>
		<div className="board-center">
			<div className="board-left">
				<Logo logo={boardProfile.logo} />
			</div>
			<div className="board-right">
				<BoardCategory category={boardProfile.category} />
				<div className="board-details">
					<FollowersButton count={boardProfile.followers} />
					<FollowingButton count={boardProfile.following} />
					<ExternalLink link={boardProfile.link} />
				</div>
			</div>
		</div>
	</div>
);

const FollowButton = () => (
	<span className="follow-button">
		<button>Follow</button>
	</span>
);

const BoardCategory = ({ category }) => (
	<span className="board-category">
		<h1>{category}</h1>
	</span>
);

const FollowersButton = ({ count }) => (
	<span className="followers-button">
		{count > 0 &&
			<span className="followers-count">
				{count}
			</span>
		} Followers
	</span>
);

const FollowingButton = ({ count }) => (
	<span className="following-button">
		{count > 0 &&
			<span className="following-count">
				{count}
			</span>
		} Following
	</span>
);

const ExternalLink = ({ link }) => {
	const url = `http://${link}`; 
	return(
		<span className="external-link">
			<a href={url}>{link}</a>
		</span>
	);
}

/* 
 ====
 Board Grid
 ====
*/

const BoardGridHeader = ({header}) => (
	<div className="board-grid-header">
		<h1>{header} best boards</h1>
	</div>
);

const BoardGrid = ({ array }) => (
	<div className="board-grid">
		{array.map(item => (
			<span className="row-element" 
				key={item.id}><BoardCard card={item}/>
			</span>
		))}
	</div>
);

const BoardCard = ({card}) => (
	<div className="board-card">
		<a className="board-link-wrapper" href="google.com">
			<BoardArrayImage array={card.array}/>
			<BoardCardDetails details={card.details}/>
		</a>
	</div>
);

const BoardArrayImage = ({ array }) => (
	<div className="board-array-image">
		<div className="array-row">
			<BoardImage image={array[0]}/>	
			<BoardImage image={array[1]}/>	
		</div>
		<div className="array-row">
			<BoardImage image={array[2]}/>	
			<BoardImage image={array[3]}/>	
		</div>
	</div>
);

const BoardImage = ({image}) => (
	<img 
		src={image}
		className="board-image"
		alt="board-single" />
);

const BoardCardDetails = ({ details }) => (
	<div className="board-card-details">
		<div className="board-details-header">
			<h3>{details.header}</h3>
		</div>
		<div className="board-details-footer">
			<div className="board-category">
				{details.category}
			</div>
			<span> - </span>
			<div className="board-pins">
				<strong>{details.pins}</strong> Pins
			</div>
		</div>
	</div>
);

/* 
 ====
 Test Data 
 ====
*/

const websiteInfo = {
	logo: {
		src: './pinterest-logo.png',
		className: 'logo-nav'
	},
	name: 'Pinterest'
};

const login = {
	label: "Log in",
	url: "http://google.com",
	className: "login-button"
};

const signup = {
	label: "Sign up",
	url: "http://google.com",
	className: "signup-button"
};


const testBoardProfile = {
	logo: {
		src: './board-logo.png',
		className: 'logo-board'
	},
	category: "Aviation Explorer",
	followers: 9985,
	following: 1694,
	link: "removeandreplace.com"
};

const testArray = [
	{
		id: 1,
		array: ["https://i.pinimg.com/150x150/e4/7d/86/e47d86ea8b605a0b361306224da484dd.jpg", "https://i.pinimg.com/150x150/76/40/8a/76408ae44dcffbd4e08b726e4ad62d28.jpg", "https://i.pinimg.com/150x150/76/40/8a/76408ae44dcffbd4e08b726e4ad62d28.jpg", "https://i.pinimg.com/150x150/76/40/8a/76408ae44dcffbd4e08b726e4ad62d28.jpg"],
		category: "Aviation Explorer",
		details: {
			header: "Russian Airliner",
			category: "Aviation Explorer",
			pins: 19
		}
	},
	{
		id: 2,
		array: ["https://i.pinimg.com/150x150/a5/85/6a/a5856a532cf098dfd6fcc453f87554a7.jpg", "https://i.pinimg.com/150x150/76/40/8a/76408ae44dcffbd4e08b726e4ad62d28.jpg", "https://i.pinimg.com/150x150/76/40/8a/76408ae44dcffbd4e08b726e4ad62d28.jpg", "https://i.pinimg.com/150x150/76/40/8a/76408ae44dcffbd4e08b726e4ad62d28.jpg"],
		category: "Aviation Explorer",
		details: {
			header: "Russian Airliner",
			category: "Aviation Explorer",
			pins: 19
		}
	},
	{
		id: 3,
		array: ["https://i.pinimg.com/150x150/a5/85/6a/a5856a532cf098dfd6fcc453f87554a7.jpg", "https://i.pinimg.com/150x150/76/40/8a/76408ae44dcffbd4e08b726e4ad62d28.jpg", "https://i.pinimg.com/150x150/76/40/8a/76408ae44dcffbd4e08b726e4ad62d28.jpg", "https://i.pinimg.com/150x150/76/40/8a/76408ae44dcffbd4e08b726e4ad62d28.jpg"],
		category: "Aviation Explorer",
		details: {
			header: "Russian Airliner",
			category: "Aviation Explorer",
			pins: 19
		}
	},
	{
		id: 4,
		array: ["https://i.pinimg.com/150x150/a5/85/6a/a5856a532cf098dfd6fcc453f87554a7.jpg", "https://i.pinimg.com/150x150/76/40/8a/76408ae44dcffbd4e08b726e4ad62d28.jpg", "https://i.pinimg.com/150x150/76/40/8a/76408ae44dcffbd4e08b726e4ad62d28.jpg", "https://i.pinimg.com/150x150/76/40/8a/76408ae44dcffbd4e08b726e4ad62d28.jpg"],
		category: "Aviation Explorer",
		details: {
			header: "Russian Airliner",
			category: "Aviation Explorer",
			pins: 19
		}
	},
	{
		id: 5,
		array: ["https://i.pinimg.com/150x150/e4/7d/86/e47d86ea8b605a0b361306224da484dd.jpg", "https://i.pinimg.com/150x150/76/40/8a/76408ae44dcffbd4e08b726e4ad62d28.jpg", "https://i.pinimg.com/150x150/76/40/8a/76408ae44dcffbd4e08b726e4ad62d28.jpg", "https://i.pinimg.com/150x150/76/40/8a/76408ae44dcffbd4e08b726e4ad62d28.jpg"],
		category: "Aviation Explorer",
		details: {
			header: "Russian Airliner",
			category: "Aviation Explorer",
			pins: 19
		}
	},
	{
		id: 6,
		array: ["https://i.pinimg.com/150x150/e4/7d/86/e47d86ea8b605a0b361306224da484dd.jpg", "https://i.pinimg.com/150x150/76/40/8a/76408ae44dcffbd4e08b726e4ad62d28.jpg", "https://i.pinimg.com/150x150/76/40/8a/76408ae44dcffbd4e08b726e4ad62d28.jpg", "https://i.pinimg.com/150x150/76/40/8a/76408ae44dcffbd4e08b726e4ad62d28.jpg"],
		category: "Aviation Explorer",
		details: {
			header: "Russian Airliner",
			category: "Aviation Explorer",
			pins: 19
		}
	},
	{
		id: 7,
		array: ["https://i.pinimg.com/150x150/e4/7d/86/e47d86ea8b605a0b361306224da484dd.jpg", "https://i.pinimg.com/150x150/76/40/8a/76408ae44dcffbd4e08b726e4ad62d28.jpg", "https://i.pinimg.com/150x150/76/40/8a/76408ae44dcffbd4e08b726e4ad62d28.jpg", "https://i.pinimg.com/150x150/76/40/8a/76408ae44dcffbd4e08b726e4ad62d28.jpg"],
		category: "Aviation Explorer",
		details: {
			header: "Russian Airliner",
			category: "Aviation Explorer",
			pins: 19
		}
	},
	{
		id: 8,
		array: ["https://i.pinimg.com/150x150/e4/7d/86/e47d86ea8b605a0b361306224da484dd.jpg", "https://i.pinimg.com/150x150/76/40/8a/76408ae44dcffbd4e08b726e4ad62d28.jpg", "https://i.pinimg.com/150x150/76/40/8a/76408ae44dcffbd4e08b726e4ad62d28.jpg", "https://i.pinimg.com/150x150/76/40/8a/76408ae44dcffbd4e08b726e4ad62d28.jpg"],
		category: "Aviation Explorer",
		details: {
			header: "Russian Airliner",
			category: "Aviation Explorer",
			pins: 19
		}
	},
	{
		id: 9,
		array: ["https://i.pinimg.com/150x150/e4/7d/86/e47d86ea8b605a0b361306224da484dd.jpg", "https://i.pinimg.com/150x150/76/40/8a/76408ae44dcffbd4e08b726e4ad62d28.jpg", "https://i.pinimg.com/150x150/76/40/8a/76408ae44dcffbd4e08b726e4ad62d28.jpg", "https://i.pinimg.com/150x150/76/40/8a/76408ae44dcffbd4e08b726e4ad62d28.jpg"],
		category: "Aviation Explorer",
		details: {
			header: "Russian Airliner",
			category: "Aviation Explorer",
			pins: 19
		}
	},
	{
		id: 10,
		array: ["https://i.pinimg.com/150x150/e4/7d/86/e47d86ea8b605a0b361306224da484dd.jpg", "https://i.pinimg.com/150x150/76/40/8a/76408ae44dcffbd4e08b726e4ad62d28.jpg", "https://i.pinimg.com/150x150/76/40/8a/76408ae44dcffbd4e08b726e4ad62d28.jpg", "https://i.pinimg.com/150x150/76/40/8a/76408ae44dcffbd4e08b726e4ad62d28.jpg"],
		category: "Aviation Explorer",
		details: {
			header: "Russian Airliner",
			category: "Aviation Explorer",
			pins: 19
		}
	}
];

ReactDOM.render(<App />,
	document.querySelector('#root'));
