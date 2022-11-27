import React from 'react'
import { technologies } from '../data/technology'
import TechnologyCard from '../technology/TechnologyCard'
import Error from '../common/Error'

const Technology = () => {
	return (
		<div className='container mt-5 mb-5'>
			<Section title='Backend' technologies={technologies.back} />
			<Section title='Language' technologies={technologies.language} />
			<Section title='DevOps' technologies={technologies.devops} />
			<Section title='Frontend' technologies={technologies.front} />
			<Section title='Tools' technologies={technologies.tools} />
			<Section title='Apps' technologies={technologies.apps} />
		</div>
	)
}

const Section = ({ title, technologies }) => {
	return (
		<div className='mb-5'>
			<h2>{title}</h2>

			<div className='row'>
				{technologies.length === 0 ? (
					<Error mainErrorMessage='' subErrorMessage={`${title}에 해당하는 보유기술이 없어요`} />
				) : (
					technologies.map((technology) => {
						return (
							<div className='col-xs-12 col-lg-4'>
								<TechnologyCard technology={technology} />
							</div>
						)
					})
				)}
			</div>
		</div>
	)
}

export default Technology
