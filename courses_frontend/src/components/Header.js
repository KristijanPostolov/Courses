import React from "react";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import Logo from '../assets/20170919-kako-da-se-snajdete-na-finki-m.jpg';
import styled from 'styled-components';
import {Link, navigate} from "@reach/router";

const RoundedImage = styled.img`
&&{
 border-radius: 50px;
 cursor: pointer;
}
`;

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link to="/"><RoundedImage src={Logo} width={34} height={30} alt="logo"/> </Link>
            <Navbar.Brand style={{fontFamily:'arial', cursor:'pointer', paddingLeft: 5}} onClick={()=> navigate('/')}>
                COURSES
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="respon>
           av" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/"> Home </Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>

                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Link to='/login' className="nav-link"> Login</Link>
                    <Link to='/register' className="nav-link"> Register</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header