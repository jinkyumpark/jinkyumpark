import React, { useEffect, useState } from 'react'
import { BiErrorCircle as ErrorIcon } from 'react-icons/bi'

const Error = ({ mainErrorMessage, subErrorMessage = '', subStyle = 'text-muted', delay = 500 }) => {
	const errorIconStyle = {
		width: '150px',
		height: '100px',
	}

	const [showing, setShowing] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setShowing(true)
		}, delay)
	}, [])

	return (
		<div className='text-center'>
			{showing && (
				<>
					<ErrorIcon className='text-danger' style={errorIconStyle} />
					<h1 className='mt-3'>{mainErrorMessage} </h1>
					<h3 className={subStyle}>{subErrorMessage}</h3>
				</>
			)}
		</div>
	)
}

export default Error
