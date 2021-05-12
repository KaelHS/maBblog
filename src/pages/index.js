import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import Portfolio from './portfolio';
import { Techs } from '../components/Techs';
import Contact from '../components/Contact';


const Nav = styled.header`
    position: fixed;
    top:0;
    width: 100%;
    z-index: 2;
    margin:0;
    background: #0e0b16;
`;

const NavContainer = styled.div`
    margin: 0;
    padding: 0.25rem 3rem;


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


const MainContainer = styled.div`
    z-index: 1;
    max-width: 1100px;
    margin: auto;
    position: relative;
    top: 45%;
    padding: 0;

    &::after, &::before {
        content: '';
        display: table;
        clear: both;
    }
`;

const BlockContainer = styled.div`
    float: left;

`;

const ImageContainer = styled.div`
    margin-bottom: 1rem;

`;


const ContactContainer = styled.div`
    padding: 5px;
    margin: 0 auto;


    &::after, &::before {
        display: table;
        content: '';
        clear: both;
    }
    img {
        margin: 4rem;
    }
`;
const IconLink = styled.a`
    margin: 0.8rem;

`;

const InfoContainer = styled.div`
    max-width: 900px;
    float: left;
    margin-left: 3rem;

    & h3 {
        margin-top: 0.2rem;
        font-family: monospace;
        font-size: 1.75em;
        color: #00acee;
    }
`;

const Presentation = styled.div`
    margin-bottom: 1rem;

    & h4 {
        max-width:14rem;
        font-weight: none;
        background: #00acee ;
        border-radius: 5px;
        font-family: monospace;
        font-size: 1.5em;
        line-height: 1.5em;
        padding: 0.3rem;
        margin-bottom: 2rem;
    }

    & h2 {
        max-width: 48ch;
        font-size: 2.2em;
        color: #fff;
        line-height: 1.8em;
        font-family: monospace;
    }
`;

const Home = () => {
    return (
        <>
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
            <section style={{height: '100vh', background: '#373737', 'zIndex': '1'}}>
                <MainContainer>
                    <BlockContainer>
                        <ImageContainer>
                            <Image src="/me.png" width={200} height={200} />
                        </ImageContainer>
                        <ContactContainer>
                            <Link href="https://www.linkedin.com/in/kaelhsilva/" ><a target="_blank"><IconLink ><Image src="/logo-linkedin.png" width={35} height={35}/></IconLink></a></Link>
                            <Link href="https://www.instagram.com/kael_hs/"><a target="_blank"><IconLink ><Image src="/logo-instagram.png" width={35} height={35}/></IconLink></a></Link>
                            <Link href="https://github.com/KaelHS"><a target="_blank"><IconLink ><Image src="/logo-github.png" width={35} height={35}/></IconLink></a></Link>
                            
                        </ContactContainer>
                    </BlockContainer>
                    <InfoContainer>
                        <Presentation>
                            <h4>FullStack Developer</h4>
                            {/* <h2>Desenvolvedor de aplicações web performáticas, com foco na segurança e experiência de usuário</h2> */}
                            <h2> Projeto e desenvolvimento de aplicações WEB, com foco na acessibilidade, segurança e experiência do usuário </h2>
                        </Presentation>
                        {/* <h3> Stack Utilizada: ReactJS, NodeJS, Material UI, MongoDB </h3> */}
                    </InfoContainer >
                </MainContainer>
            </section>
            <Techs />
            {/* <Portfolio /> */}
            <Contact />

        </>
    );

}



export default Home;