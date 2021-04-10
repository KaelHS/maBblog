import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';


const Bar = styled.div`
    width: 20%;
    background: #373737;
    position: fixed;
    margin: 0;
    padding: 0;
    height: 100%;

`;

const Container = styled.div`
    margin: 50px auto 50px; 
    text-align: center; 

`;

const Welcome = styled.div`

    font-family: monospace;
    color: #fff;

    h2 {
        margin-top: 2rem;
        margin-bottom: 0.825rem;
        font-size: 2em;
    }
    h3 {
        margin-bottom: 40px;
        font-size: 1.3em;
        font-weight:  none;
    }

`;

const Presentation = styled.section`
    font-family: monospace;
    color: #fff;
    font-size: 1em;
    padding: 0.825rem;
    margin: 0 auto;
    max-width: 300px;
    white-space: normal;

`;

const ContactContainer = styled.div`
    padding: 5px;
    margin: 30px auto;


    &::after, &::before {
        display: table;
        content: '';
        clear: both;
    }
    img {
        margin: 10px;
    }
`;

const IconLink = styled.a`
    margin: 6px;

`;

const SideNav = styled.div`
    margin-top: 5rem;

    a {
        text-decoration: none;
        font-size: 1.3em;
        font-family: monospace;
        color: #ccc;
    }
    a:hover {
        color: #e54;
        transition: 0.3s;
    }
    a:active {
        color: #e54;
    }

`;

const GestorConfigContainer = styled.section`
    padding: 5px;
    margin: 30px auto;
    bottom: 10px;


    &::after, &::before {
        display: table;
        content: '';
        clear: both;
    }
    img {
        margin: 10px;
    }

`;


const Sidebar = () => {
        return(
            <Bar>
                    <Container>
                        <Welcome>
                            <Image src="/avatar.png" width={60} height={60}/>
                            <h2>Kael Silva</h2>
                            <h3>Full Stack Developer</h3>
                        </Welcome>
                    <Presentation>
                        <div>
                            <p>Compartilhar conhecimento é semear sabedoria</p> 
                            <p>- UBUNTU -</p>   
                        </div> 
                    </Presentation>
                    <ContactContainer>
                        <Link href="https://www.linkedin.com/in/kaelhsilva/"><a><IconLink><Image src="/logo-linkedin.png" width={30} height={30}/></IconLink></a></Link>
                        <Link href="https://github.com/KaelHS"><a><IconLink><Image src="/logo-github.png" width={30} height={30}/></IconLink></a></Link>
                    </ContactContainer>
                    <SideNav>
                        <ul>
                            <li><Link href="/"><a>Home</a></Link></li>
                            <li><Link href="/contact"><a>Contato</a></Link></li>
                            <li><Link href="/about"><a>Sobre Mim</a></Link></li>              
                        </ul>
                    </SideNav>
                    <GestorConfigContainer>
                        <Link href="/gestor"><a><Image src="/config.png" width={30} height={30} /></a></Link>
                    </GestorConfigContainer>
                    </Container>
            </Bar>
        );
}

export default Sidebar;
