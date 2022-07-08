import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { assignedTypes } from "../data/assigned-types";
import Card from './Card';

export default class CardList extends Component {
  render() {
	  
	return (
	  <>
		<div className={this.props.className}>
			<div className='card-list-labels'>
				<div className='labels-grid'>Name</div>
				<div className='labels-grid'>Type</div>
				<div className='labels-grid'>Ego Stack</div>
				<div className='labels-grid'>Shadow Stack</div>
				<div className='labels-grid'>Quadra</div>
			</div>
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
