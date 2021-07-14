import React from 'react';
import Link from 'next/link';

import styles from './styles.module.scss';

export function Header() {

    return(
        <header className={styles.header}>
            <ul>
                <li><Link href="#"><a>Habilidades</a></Link></li>
                <li><Link href="#"><a>Projetos</a></Link></li>
                <li><Link href="#"><a>Experiência</a></Link></li>
                <li><Link href="#"><a>Contato</a></Link></li>
            </ul>
        </header>
    );
}