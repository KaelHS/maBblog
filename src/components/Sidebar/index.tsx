import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { FiLinkedin, FiInstagram } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import styles from './styles.module.scss';

export const Sidebar = () => {
        return(
            <div className={styles.bar}>
                <div className={styles.sideHeader}>
                    <Image src="/me.png" width={200} height={200}  />
                    <h1>Kael Silva</h1>
                </div>
                <section>
                    <p>Compartilhar conhecimento é semear sabedoria</p> 
                    <p>- UBUNTU -</p>   
                </section> 
                    <div className={styles.contactIcons}>
                        <Link href="https://www.linkedin.com/in/kaelhsilva/">
                            <a target="_blank">
                                <FiLinkedin size="2.25rem"/>
                            </a>
                        </Link>
                        <Link href="https://github.com/KaelHS">
                            <a target="_blank">
                                <FaGithub size="2.25rem"/>
                            </a>
                        </Link>
                        <Link href="https://www.instagram.com/kael_hs/">
                            <a target="_blank">
                                <FiInstagram size="2.25rem"/>
                            </a>
                        </Link>
                    </div>
                <article>
                Tenho 18 anos, trabalho como front-end na Visualmix, utilizando React como ferramenta principal.

Estudei no instituto técnico de barueri, Brasílio Flores de azevedo, ensino médio com curso técnico de informática integrado.

Sou apaixonado pelo front-end, principalmente quando utilizado o React e o Next.js, tenho o objetivo de crescer, me especializar e me tornar conhecido na área. E acredito que a melhor maneira de fazer isso é correndo atrás de conhecimento.
                </article>
            </div>
        );
}
