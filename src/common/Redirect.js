import React from 'react'

const Redirect = ({ url }) => {
	React.useEffect(() => {
		window.location.href = url
	}, [url])

	return <h1 className='text-center mt-5'>이동중이에요...</h1>
}

export default Redirect