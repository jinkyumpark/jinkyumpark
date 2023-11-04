import React, { useState } from 'react'
// Bootstrap
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Topnav = () => {
	const [currentUrl] = useState(window.location.pathname)

	// TODO : localized by getting language from url
	const title = "서버개발자 박진겸"
	const portfolio = "포트폴리오"
	const proudct = "제품"

	return (
		<>
			<Navbar bg='dark' variant='dark' fixed='top' className='p-1 m-0'>
				<Container>
					<Navbar.Brand href={`${process.env.PUBLIC_URL}/`}>{title}</Navbar.Brand>
					<Nav className='me-auto'>
						<Nav.Link href={`${process.env.PUBLIC_URL}/portfolio`} active={currentUrl.startsWith('/portfolio')}>
							{portfolio}
						</Nav.Link>

						<Nav.Link href={`${process.env.PUBLIC_URL}/product`} active={currentUrl.startsWith('/product')}>
							{proudct}
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	)
}

export default Topnav
