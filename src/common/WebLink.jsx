import React from 'react'
import useDarkMode from './useDarkMode'
import WebsiteIcon from '../data/websiteIcon'

const WebLink = ({ website, border = false }) => {
	const isDark = useDarkMode()
	const icon = (isDark && website.icon === WebsiteIcon.github) ? WebsiteIcon.githubLight : website.icon

	return (
		<a target='_blank' rel='noreferrer' href={website.url} className='ms-3 me-3'>
			<img
				src={icon}
				alt={`${website.url}-icon`}
				className={`img-responsive rounded-circle link-hover-effect ${border ? 'border' : ''}`}
				style={{
					width: '40px',
				}}
			/>
		</a>
	)
}

export default WebLink
