import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';


export function Header() {

    return(
        <header className={styles.header}>
            <ul>
                <li><Link href="#skills"><a>Habilidades</a></Link></li>
                <li><Link href="#projects"><a>Projetos</a></Link></li>
                <li><Link href="#experiences"><a>Experiência</a></Link></li>
                <li><Link href="#contact"><a>Contato</a></Link></li>
            </ul>
        </header>
    );
}