import React from 'react'
import { Card } from 'react-bootstrap'
import { technologiesDetailUrl } from '../data/url'

import '../css/hover-effect.css'

const TechnologyCard = ({ technology }) => {
	const technologyDetailUrl = `${technologiesDetailUrl}/${technology.name.trim().replaceAll(' ', '').toLowerCase()}`

	return (
		<a href={technologyDetailUrl} className='text-decoration-none text-black'>
			<Card className='mt-3 mb-3 text-center hover-effect'>
				<div className='row justify-content-center'>
					<div className='col-6'>
						<img className='card-img-top img-fluid pt-4' src={technology.icon} alt={`${technology.name}-icon`} />
					</div>
				</div>

				<Card.Body>
					<div className='card-title'>
						<h4>{technology.name}</h4>
					</div>
				</Card.Body>

				<div className='list-group list-group-flush'>
					{technology.features.slice(0, 3).map((feature) => {
						return <li className='list-group-item'>{feature}</li>
					})}
				</div>
			</Card>
		</a>
	)
}

export default TechnologyCard
