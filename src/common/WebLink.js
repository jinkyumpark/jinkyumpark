import React from 'react'
import '../css/hover-effect.css'

const WebLink = ({ website, border = false }) => {
	return (
		<a target='_blank' rel='noreferrer' href={website.url} className='ms-3 me-3'>
			<img
				src={website.icon}
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
