import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import style from './SideBar.module.css';

export default class Sidebar extends React.Component {
    render(){
        return(
            <React.Fragment className={style}>
                <div className={style.sidebar}>
                    <div className={style.sidebar-container}>
                        <div className={style.welcome}>
                            <Image src="/avatar.png" width={60} height={60}/>
                            <h2>Kael Silva</h2>
                            <h3>Full Stack Desenvolvedor</h3>
                        </div>
                    <section className={style.presentation}>
                        <div className={style.presentation-container}>
                            <p>Compartilhar conhecimento é semear sabedoria</p> 
                            <p className={style.ubuntu}>- UBUNTU -</p>   
                        </div> 
                    </section>
                    <div className={style.contact-container}>
                        <Link href="https://www.linkedin.com/in/kaelhsilva/"><a className={style.logo-link}><Image src="/logo-linkedin.png" width={30} height={30}/></a></Link>
                        <Link href="https://github.com/KaelHS"><a className={style.logo-link}><Image src="/logo-github.png" width={30} height={30}/></a></Link>
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
            </React.Fragment>
        );
    }
}