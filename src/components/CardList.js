import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { assignedTypes } from "../data/assigned-types";
import Card from './Card';

export default class CardList extends Component {
  render() {
	  
	return (
	  <>
	  	{assignedTypes.sort((a, b) => a.name.localeCompare(b.name)).map(person => (
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
