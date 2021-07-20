import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { Experiences } from '../components/Experiences';

import styles from './home.module.scss';

export default function Home() {

    return (
        <div className={styles.content}>
            <section id="skills"><Skills /></section>
            <section id="projects"><Projects /></section>
            <section id="experiences"><Experiences /></section>
            <section id="contact"><ContactForm /></section>
        </div>
    );
}


