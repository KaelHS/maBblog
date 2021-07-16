import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { FiLinkedin, FiInstagram } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import styles from './styles.module.scss';
import { description } from '../../helpers/contents';

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
                <article>{description}</article>
                
            </div>
        );
}
