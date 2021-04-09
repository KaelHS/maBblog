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
<<<<<<< HEAD
    margin: 50px auto 50px; 
=======
    margin:0 auto; 
>>>>>>> cad6fb189bc930a69411f2e6fe1634e3c4518ad0
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
<<<<<<< HEAD


`;

const SideNav = styled.div`
    margin-top: 5rem;
=======
`;

const SideNav = styled.div`
    margin-top: 50px;
>>>>>>> cad6fb189bc930a69411f2e6fe1634e3c4518ad0

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

<<<<<<< HEAD
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
=======
export default class Sidebar extends React.Component {
    render(){
>>>>>>> cad6fb189bc930a69411f2e6fe1634e3c4518ad0
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
                        <Link href="https://github.com/KaelHS"><a><IconLink><Image src="/logo-github.png" width={30} height={30}/></IconLink></a></Link>
                    </ContactContainer>
                    <SideNav>
                        <ul>
                            <li><Link href="/"><a>Home</a></Link></li>
                            <li><Link href="/contact"><a>Contato</a></Link></li>
                            <li><Link href="/about"><a>Sobre Mim</a></Link></li>              
                        </ul>
                    </SideNav>
<<<<<<< HEAD
                    <GestorConfigContainer>
                        <Link href="/gestor/create"><a><Image src="/config.png" width={30} height={30} /></a></Link>
                    </GestorConfigContainer>
                    </Container>
            </Bar>
        );
}

export default Sidebar;
=======
                    </Container>
            </Bar>
        );
    }
}
>>>>>>> cad6fb189bc930a69411f2e6fe1634e3c4518ad0
