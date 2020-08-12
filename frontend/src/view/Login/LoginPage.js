import React from 'react';
import LoginCard from '../../components/Login/LoginCard';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    navbar: {
        backgroundColor: 'transparent !important'
    },
    navlinks: {
        fontSize: '12px',
        fontWeight: '700'
    },
}));

export default function LoginPage() {
    const classes = useStyles();
    
    return (
        <>
            <Navbar className={classes.navbar} bg="light">
                <Navbar.Brand href="/">
                    Kumi
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link className={classes.navlinks} href="/">For Students</Nav.Link>
                    <Nav.Link className={classes.navlinks} href="/">For Teachers</Nav.Link>
                    <Nav.Link className={classes.navlinks} href="/">For Administrators</Nav.Link>
                    <Nav.Link className={classes.navlinks} href="/">Contact Us</Nav.Link>
                </Nav>
            </Navbar>
            <LoginCard />
        </>
    );
}