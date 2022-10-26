import React, { useState } from 'react';
// Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Topnav = () => {
    const [currentUrl] = useState(window.location.pathname);

    return (
        <>
            <Navbar bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href='/'>서버 개발자 박진겸</Navbar.Brand>
                    <Nav className='me-auto'>
                        <Nav.Link
                            href='/resume'
                            active={currentUrl.startsWith('/resume')}
                        >
                            이력서
                        </Nav.Link>
                        <Nav.Link
                            href='/portfolio'
                            active={currentUrl.startsWith('/portfolio')}
                        >
                            포트폴리오
                        </Nav.Link>
                        <Nav.Link
                            href='/technology'
                            active={currentUrl.startsWith('/technology')}
                        >
                            기술
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Topnav;
