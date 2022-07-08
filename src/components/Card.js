import PropTypes from 'prop-types'
import React, { Component } from 'react'
import '../components/Card.css'
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
					<div className='grid-item grid-ego-stack'>						
						<div className='grid-ego-item grid-item-hero'>{mbti.stack.hero}</div>
						<div className='grid-ego-item grid-item-parent'>{mbti.stack.parent}</div>
						<div className='grid-ego-item grid-item-child'>{mbti.stack.child}</div>
						<div className='grid-ego-item grid-item-inferior'>{mbti.stack.inferior}</div>
					</div>
					<div className='grid-item grid-shadow-stack'>
						<div className='grid-shadow-item grid-item-nemesis'>{mbti.stack.nemesis}</div>
						<div className='grid-shadow-item grid-item-critic'>{mbti.stack.critic}</div>
						<div className='grid-shadow-item grid-item-trickster'>{mbti.stack.trickster}</div>
						<div className='grid-shadow-item grid-item-demon'>{mbti.stack.demon}</div>
					</div>
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
