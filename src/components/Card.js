import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { mbti } from "../data/types";

export default class Card extends Component {

  render() {
	  
	const pName = this.props.pName;
	const pType = this.props.pType;
	
	return (
	<>
		<div className='card-container'>
			{mbti.filter(mbti => mbti.type.includes(pType)).map(mbti => (
				<>
					<div className='grid-item grid-item-person'>{pName}</div>
					<div className='grid-item grid-item-type'>{pType}</div>
					<div className='grid-item grid-item-stack grid-item-hero'>{mbti.stack.hero}</div>
					<div className='grid-item grid-item-stack grid-item-parent'>{mbti.stack.parent}</div>
					<div className='grid-item grid-item-stack grid-item-child'>{mbti.stack.child}</div>
					<div className='grid-item grid-item-stack grid-item-inferior'>{mbti.stack.inferior}</div>
				</>
			))}
		</div>
	</>
	)
  }
}
Card.propTypes = {
	pName: PropTypes.string,
	pType: PropTypes.string
}
