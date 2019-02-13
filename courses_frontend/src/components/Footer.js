import React from "react";
import {Navbar} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import styled from 'styled-components';



const StyledFooter = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
`;

const StyledNavbar = styled(Navbar)`
  && {
  height: 40px;
  background-color:red !important;
}
`

function Footer() {
    return (
        <StyledFooter>
            <StyledNavbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <h3>Tomislav</h3>
                    <h3>Kristijan</h3>
                </Nav>
                <div className="mr-2">
                    <a style={{paddingRight: '5px'}} href="/"><i className="fa fa-facebook-official fa-2x"/></a>
                    <a style={{paddingRight: '5px'}} href="/"><i className="fa fa-pinterest-p fa-2x"/></a>
                    <a style={{paddingRight: '5px'}} href="/"><i className="fa fa-twitter fa-2x"/></a>
                    <a style={{paddingRight: '5px'}} href="/"><i className="fa fa-flickr fa-2x"/></a>
                    <a style={{paddingRight: '5px'}} href="/"><i className="fa fa-linkedin fa-2x"/></a>
                </div>
            </StyledNavbar>
        </StyledFooter>
    )
}

export default Footer;