import React from 'react';
import LoginCard from '../../components/Login/LoginCard';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function LoginPage() {
    return (
        <>
            <Navbar className="navbar" bg="light">
                <Navbar.Brand href="/">
                    Kumi
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link className="navlink" href="/">For Students</Nav.Link>
                    <Nav.Link className="navlink" href="/">For Teachers</Nav.Link>
                    <Nav.Link className="navlink" href="/">For Administrators</Nav.Link>
                    <Nav.Link className="navlink" href="/">Contact Us</Nav.Link>
                </Nav>
            </Navbar>
            <LoginCard />
        </>
    );
}

export default LoginPage;