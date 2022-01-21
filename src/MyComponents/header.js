import React from 'react';
import propTypes from 'prop-types';

export default function header(props) {
	return <h1>Header</h1>;
}

header.propTypes = {
	title: propTypes.string,
};

header.defaultProps = {
	title: 'FIXED TITLE',
};
