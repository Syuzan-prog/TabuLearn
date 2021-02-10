import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import styles from './index.module.scss';
import {containerTypes} from '../../../helpers/contstants';

export default function CustomContainer({ children, containerType }) {
	console.log(containerType)
	let containerClass;
	switch (containerType) {
	default:
	case containerTypes.page:
		containerClass = styles.pageContainer;
		break;
	case containerTypes.block:
		containerClass = styles.blockContainer;
		break;
	}
	return (
		<Container
			classes={{
				root: containerClass
			}}
			maxWidth={false}
		>
			{children}
		</Container>
	);
}
CustomContainer.propTypes = {
	children: PropTypes.element.isRequired,
	containerType: PropTypes.number
};
CustomContainer.defaultProps = {
	containerType: containerTypes.page
};