import React from 'react';
import LoginCard from '../../components/Login/LoginCard';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    navbar: {
        backgroundColor: 'transparent !important',
        padding: '1.5rem 0 0 1.5rem'
    },
    navlinks: {
        fontSize: '15px',
        fontWeight: '600',
        marginBottom: '100px',
        color: "#000 !important"
    },
    kumiLogo: {
        width: '150px',
        height: '150px',
    }
}));

export default function LoginPage() {
    const classes = useStyles();
    
    return (
        <>
            <Navbar className={classes.navbar} bg="light">
                <Navbar.Brand href="/">
                <svg className={classes.kumiLogo} viewBox="0 0 218 330" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.07386 146H31.3295V111.341L39.4972 102.037L69.2557 146H104.696L62.1534 84.1392L102.636 36.9091H67.9062L32.9631 78.3153H31.3295V0.54545H1.07386V146Z" fill="#A463FF"/>
                    <path d="M187.438 99.5511C187.509 114.182 177.494 121.852 166.628 121.852C155.193 121.852 147.807 113.827 147.736 100.972V36.9091H117.48V106.369C117.551 131.866 132.466 147.42 154.412 147.42C170.818 147.42 182.608 138.969 187.509 126.185H188.645V146H217.693V36.9091H187.438V99.5511Z" fill="#FFB600"/>
                    <path d="M0.073864 330H30.3295V264.517C30.3295 252.443 38 244.418 48.0852 244.418C58.0284 244.418 64.7045 251.236 64.7045 261.96V330H94.0369V263.381C94.0369 252.088 100.5 244.418 111.509 244.418C121.168 244.418 128.412 250.455 128.412 262.599V330H158.597V256.634C158.597 232.983 144.534 219.489 124.222 219.489C108.241 219.489 95.8125 227.656 91.3381 240.156H90.2017C86.7216 227.514 75.571 219.489 60.5852 219.489C45.8835 219.489 34.733 227.301 30.1875 240.156H28.9091V220.909H0.073864V330Z" fill="#FE007A"/>
                    <path d="M182.496 330H212.751V220.909H182.496V330ZM197.695 206.847C206.714 206.847 214.101 199.957 214.101 191.506C214.101 183.125 206.714 176.236 197.695 176.236C188.746 176.236 181.359 183.125 181.359 191.506C181.359 199.957 188.746 206.847 197.695 206.847Z" fill="#00E19B"/>
                </svg>
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