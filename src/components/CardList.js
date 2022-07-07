import PropTypes from 'prop-types'
import React, { Component } from 'react'
// import { mbti } from "../data/types";
import { assignedTypes } from "../data/assigned-types";
import { mbti } from '../data/types';
import Card from './Card';

export default class CardList extends Component {
  render() {
	return (
	  <>
	  	{assignedTypes.map(person => (
			<Card pName={person.name} pType={person.typedAs} />
		  ))}
	  </>
	)
  }
}
CardList.propTypes = {
	pName: PropTypes.string,
	pType: PropTypes.string
}
