import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { assignedTypes } from "../data/assigned-types";
import Card from './Card';

export default class CardList extends Component {
  render() {
	  
	return (
	  <>
		<div className={this.props.className}>

			<div className='card-list'>
				{assignedTypes.sort((a, b) => a.typedAs.localeCompare(b.typedAs)).map(person => (
					<Card pName={person.name} pType={person.typedAs} />
				))}
			</div>
			
		</div>
	  </>
	)
  }
}
CardList.propTypes = {
	pName: PropTypes.string,
	pType: PropTypes.string,
	className: PropTypes.string
}
