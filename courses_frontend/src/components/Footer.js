import React from "react";
import {Navbar} from "react-bootstrap";
import styled from 'styled-components';
import Logo from '../assets/finki_52_1_2_1_62_0.png';


const StyledFooter = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
`;

const StyledNavbar = styled(Navbar)`
  && {
  height: 60px;
}
`

function Footer() {
    return (
        <StyledFooter>
            <StyledNavbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/" style={{paddingLeft:10, fontFamily:'arial'}}>Tomislav Anastasovski <br/> <span style={{textAlign:'center'}}>Kristijan Postolov</span></Navbar.Brand>
                <Navbar.Brand className="mx-auto" style={{paddingLeft:10}}>
                    <img src={Logo} height={140} width={220} alt="Finki"/>
                </Navbar.Brand>
                <div className="mr-2">
                    <a style={{paddingRight: '7px'}} href="/"><i className="fa fa-facebook-official fa-2x"/></a>
                    <a style={{paddingRight: '7px'}} href="/"><i className="fa fa-pinterest-p fa-2x"/></a>
                    <a style={{paddingRight: '7px'}} href="/"><i className="fa fa-twitter fa-2x"/></a>
                    <a style={{paddingRight: '7px'}} href="/"><i className="fa fa-flickr fa-2x"/></a>
                    <a style={{paddingRight: '7px'}} href="/"><i className="fa fa-linkedin fa-2x"/></a>
                </div>
            </StyledNavbar>
        </StyledFooter>
    )
}

export default Footer;