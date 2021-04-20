import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'

const Nav = styled.header`
    display: block;
    position: fixed;
    width: 100%;
    margin:0;
    background: #0e0b16;
`;

const NavContainer = styled.div`
    margin: 0.25rem 3rem;


    &::after, &::before {
        content: '';
        display: table;
        clear: both;

    }
`;

const BrandName = styled.div`
    padding: 1rem;
    float: left;

    & h3 {
        font-weight: none;
        padding: 0;
        font-size: 2.3em;
        color: #00acee;
    }
    
    & span {
        font-weight: bold;
    }
`;

const NavMenu = styled.div`
    float: right;

    & ul {
        margin-left: auto;
    }
    & li { 
        font-family: monospace;
        display: inline-block; 
        margin: 1rem;
        font-size: 2em;
        color: #fff;
        padding: 0;

        &:hover {
            color: #00acee;
        }
    }
`;

const NavBar = () => {
    return(
        <Nav>
                <NavContainer>
                    <BrandName> 
                        <Link href="/"><a><h3><span>Kael </span>Silva</h3></a></Link>
                    </BrandName>
                    <NavMenu >
                        <ul>
                            <Link href="/courses"><a><li>Cursos</li></a></Link>
                            <Link href="/blog"><a><li>Blog</li></a></Link>
                            <Link href="#"><a><li>Portifólio</li></a></Link>
                            <Link href="/contact"><a><li>Contato</li></a></Link>
                        </ul>
                    </NavMenu>
                </NavContainer>
            </Nav>
    );
}

export default NavBar;