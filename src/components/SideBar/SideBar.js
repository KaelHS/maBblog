import Link from 'next/link';
import Image from 'next/image';
import React from 'react';


export default class Sidebar extends React.Component {
    render(){
        return(
                <div className="sidebar">
                    <div className="sidebar-container">
                        <div className="welcome">
                            <Image src="/avatar.png" width={60} height={60}/>
                            <h2>Kael Silva</h2>
                            <h3>Full Stack Desenvolvedor</h3>
                        </div>
                    <section className="presentation">
                        <div className='presentation-container'>
                            <p>Compartilhar conhecimento é semear sabedoria</p> 
                            <p className="ubuntu">- UBUNTU -</p>   
                        </div> 
                    </section>
                    <div className="contact-container">
                        <Link href="https://www.linkedin.com/in/kaelhsilva/"><a className="logo-link"><Image src="/logo-linkedin.png" width={30} height={30}/></a></Link>
                        <Link href="https://github.com/KaelHS"><a className="logo-link"><Image src="/logo-github.png" width={30} height={30}/></a></Link>
                    </div>
                    <div className="sidenav">
                        <ul>
                            <li><Link href="/"><a>Home</a></Link></li>
                            <li><Link href="/contact"><a>Contato</a></Link></li>
                            <li><Link href="/about"><a>Sobre Mim</a></Link></li>              
                        </ul>
                    </div>
                    </div>
                </div>
        );
    }
}