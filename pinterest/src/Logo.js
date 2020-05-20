import React from 'react';
import PropTypes from 'prop-types';

const Logo= ({ logo }) => (
	<img 
		src={logo.src}
		className={logo.className}
		alt="logo" />
);	

Logo.propTypes = {
	logo: PropTypes.object.isRequired
};

export default Logo;
