import React from 'react';
import Link from 'next/link'

import { Nav, NavContainer, BrandName, NavMenu } from './styles';

export const NavBar = () => {
    return(
        <Nav>
        <NavContainer>
            <BrandName> 
                <Link href="/"><a><h3><span>Kael </span>Silva</h3></a></Link>
            </BrandName>
            <NavMenu >
                <ul>
                    <Link href="/courses"><a><li>Cursos</li></a></Link>
                    {/* <Link href="/blog"><a><li>Blog</li></a></Link> */}
                    <Link href="/portfolio"><a><li>Projetos</li></a></Link>
                    {/* <a href="#contact"><li>Contato</li></a> */}
                </ul>
            </NavMenu>
        </NavContainer>
    </Nav>
    );
}