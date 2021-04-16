import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'

const Nav = styled.section`
    width: 100%;
    position: fixed;
    top: 0;
    background: #373737;
`;

const NavContainer = styled.div`
    margin: 0.25rem 3rem;


    &::after, &::before {
        display: table;
        clear: both;
        content: '';
    }
`;

const BrandName = styled.div`
    padding: 0;
    float: left;

    & h3 {
        padding: 0;
        font-size: 2em;
        color: #fff;
    }
`;

const NavMenu = styled.div`
    float: right;

    & ul {
        margin-left: auto;
    }
    & li { 
        display: inline-block; 
        margin: 1rem;
        font-size: 1.75em;
        color: #fff;
        padding: 0;
    }
`;

const NavBar = () => {
    return(
        <Nav>
            <NavContainer>
                <BrandName> 
                    <Link href="#"><a><h3>Kael Silva</h3></a></Link>
                </BrandName>
                <NavMenu >
                    <ul>
                        <Link href="#"><a><li>Cursos</li></a></Link>
                        <Link href="#"><a><li>Blog</li></a></Link>
                        <Link href="#"><a><li>Portifólio</li></a></Link>
                        <Link href="#"><a><li>Contato</li></a></Link>
                    </ul>
                </NavMenu>
            </NavContainer>
        </Nav>
    );
}

export default NavBar;