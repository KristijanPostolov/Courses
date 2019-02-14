import React from "react";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import Logo from '../assets/20170919-kako-da-se-snajdete-na-finki-m.jpg';
import styled from 'styled-components';
import {Link, navigate} from "@reach/router";
import {logout} from "../services/StudentApi";
import Account from "@material-ui/icons/AccountCircle";

const RoundedImage = styled.img`
&&{
 border-radius: 50px;
 cursor: pointer;
}
`;

function Header(props) {

    const userLogut = () => {
        logout().then(res => {
            props.logout(undefined);
            navigate('/');
        })
    };


    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link to="/"><RoundedImage src={Logo} width={34} height={30} alt="logo"/> </Link>
            <Navbar.Brand style={{fontFamily: 'arial', cursor: 'pointer', paddingLeft: 5}}
                          onClick={() => navigate('/')}>
                COURSES
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="respon>
           av"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/"> Home </Link>
                    <Link className="nav-link" to="/courses"> Courses </Link>


                    <NavDropdown title="Links" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="https://finki.ukim.mk/">Finki Site</NavDropdown.Item>
                        <NavDropdown.Item href="http://courses.finki.ukim.mk/">Finki Courses</NavDropdown.Item>
                        <NavDropdown.Item href="http://finki.iknow.ukim.edu.mk/">Finki Iknow</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="https://stackoverflow.com/">Stack Overflow</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    {props.value ? <>
                            <Nav.Link> <Account/><span
                                style={{paddingLeft: 3}}>{props.value.toUpperCase()}</span></Nav.Link>
                            <Nav.Link onClick={userLogut}> Logout </Nav.Link>
                        </> :
                        <>
                            <Link to='/login' className="nav-link"> Login</Link>
                            <Link to='/register' className="nav-link"> Register</Link>
                        </>}

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header