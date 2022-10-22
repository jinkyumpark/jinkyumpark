import React from "react";
// Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Topnav = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="/">서버 개발자 박진겸</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="/introduction">소개</Nav.Link>
						<Nav.Link href="/portfolio">포트폴리오</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};

export default Topnav;
