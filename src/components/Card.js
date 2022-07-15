import PropTypes from 'prop-types'
import React from 'react';
import '../components/Card.css'
import { mbti } from "../data/types";
import { useMediaQuery } from 'react-responsive'
import { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion"

const Card = (props) => {

	const pName = props.pName;
	const pType = props.pType;
	const isMobile = useMediaQuery({ query: '(max-width: 425px)' });
	const [isShown, setIsShown] = useState(false);

	const cardSummary = mbti.filter(mbti => mbti.type.includes(pType)).map(mbti => (
		<>
			<div className='grid-item grid-item-person'>{pName}</div>
			<div className='grid-item grid-item-type'>{pType}</div>
			<div className='grid-item grid-ego-stack'>
				<div className='grid-ego-item grid-item-hero'>{mbti.stack.hero}</div>
				<div className='grid-ego-item grid-item-parent'>{mbti.stack.parent}</div>
				<div className='grid-ego-item grid-item-child'>{mbti.stack.child}</div>
				<div className='grid-ego-item grid-item-inferior'>{mbti.stack.inferior}</div>
			</div>
		{!isMobile && 
			<div className='grid-item grid-shadow-stack'>
				<div className='grid-shadow-item grid-item-nemesis'>{mbti.stack.nemesis}</div>
				<div className='grid-shadow-item grid-item-critic'>{mbti.stack.critic}</div>
				<div className='grid-shadow-item grid-item-trickster'>{mbti.stack.trickster}</div>
				<div className='grid-shadow-item grid-item-demon'>{mbti.stack.demon}</div>
			</div>
		}
			<div className='grid-item grid-item-quadra'>{mbti.binaries.quadra}</div>
			
		</>
	));

	return (
	<>
		<motion.div className='card-container'
			initial={{ '--card-height': '5.45vh' }}
			whileHover={{ '--card-height': '9vh', scaleX: 1.03 }} 
			transition={{ duration: 0.05 }}
			onMouseEnter={() => setIsShown(true)}
			onMouseLeave={() => setIsShown(false)}>

			<div className='card-grid-summary'>
				{cardSummary}
			</div>

			<AnimatePresence>
				{(!isMobile && isShown) &&
					<motion.div className='card-items-hover'
						initial={{ y: -50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -20, opacity: 0, }}>

						{mbti.filter(mbti => mbti.type.includes(pType)).map(mbti => (
							<>
								asdf
							</>
						))}

					</motion.div>
				}
			</AnimatePresence>

			<div className='card-items-expanded'>
				{mbti.filter(mbti => mbti.type.includes(pType)).map(mbti => (
					<>

					</>
				))}
			</div>

		</motion.div>
	</>
	);
};
Card.propTypes = {
	pName: PropTypes.string,
	pType: PropTypes.string
}
export default Card;
