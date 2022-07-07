import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { mbti } from "../data/types";

export default class Card extends Component {

  render() {
	  
	const pName = this.props.pName;
	const pType = this.props.pType;
	
	return (
	<>
		{mbti.filter(mbti => mbti.type.includes(pType)).map(mbti => (
			<div>{pName} - {pType} - {mbti.stack.hero} {mbti.stack.parent} {mbti.stack.child} {mbti.stack.inferior}</div>
		))}
	</>
	)
  }
}
Card.propTypes = {
	pName: PropTypes.string,
	pType: PropTypes.string
}
