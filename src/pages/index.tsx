import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';


import styles from './home.module.scss';

export default function Home() {

    return (
        <div className={styles.content}>
            
            <Skills />

            <Projects />

            <ContactForm />


        
        </div>
    );
}


