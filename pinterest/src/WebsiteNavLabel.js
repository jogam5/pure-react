import React from 'react';
import PropTypes from 'prop-types';

const WebsiteNavLabel = ({ website }) => (
	<div className="website-nav-label">
		<Logo logo={website.logo}/>
		<WebsiteName name={website.name}/>
	</div>
);

WebsiteNavLabel.propTypes = {
	website: PropTypes.object.isRequired
};

const WebsiteName = ({ name }) => (
	<span className="website-name">
		<h3>{name}</h3>
	</span>
);

WebsiteName.propTypes = {
	name: PropTypes.string.isRequired
};

const Logo= ({ logo }) => (
	<img 
		src={logo.src}
		className={logo.className}
		alt="logo" />
);	

Logo.propTypes = {
	logo: PropTypes.object.isRequired
};

export default WebsiteNavLabel;

/* 
 * Suggested CSS:
 *
.website-nav-label {
	display: flex;
	align-items: center;
}
.logo-nav {
	width: 26px;
	vertical-align: middle;
}
.website-name {
	color: #E60323;
	font-size: 20px;
	font-weight: 700;
	box-sizing: border-box;
}
*/
