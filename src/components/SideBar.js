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
    margin:0 auto; 
    text-align: center; 

`;

const Welcome = styled.div`

    h2 {
        margin-bottom: 5px;
        font-size: 1.625em;
    }
    h3 {
        margin-bottom: 40px;
        font-size: 1.1875em;
        font-weight:  none;
    }

`;

const Presentation = styled.section`
    padding: 5px;
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
    margin-top: 50px;

    a {
        text-decoration: none;
        font-size: 1.1875em;
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

export default class Sidebar extends React.Component {
    render(){
        return(
            <Bar>
                    <Container>
                        <Welcome>
                            <Image src="/avatar.png" width={60} height={60}/>
                            <h2>Kael Silva</h2>
                            <h3>Full Stack Desenvolvedor</h3>
                        </Welcome>
                    <Presentation>
                        <div>
                            <p>Compartilhar conhecimento é semear sabedoria</p> 
                            <p>- UBUNTU -</p>   
                        </div> 
                    </Presentation>
                    <ContactContainer>
                        <Link href="https://www.linkedin.com/in/kaelhsilva/"><a><IconLink><Image src="/logo-linkedin.png" width={30} height={30}/></IconLink></a></Link>
                        <Link href="https://github.com/KaelHS"><IconLink><Image src="/logo-github.png" width={30} height={30}/></IconLink></Link>
                    </ContactContainer>
                    <SideNav>
                        <ul>
                            <li><Link href="/"><a>Home</a></Link></li>
                            <li><Link href="/contact"><a>Contato</a></Link></li>
                            <li><Link href="/about"><a>Sobre Mim</a></Link></li>              
                        </ul>
                    </SideNav>
                    </Container>
            </Bar>
        );
    }
}