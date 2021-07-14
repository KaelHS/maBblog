import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { Skills } from '../components/Skills';


import styles from './home.module.scss';

export default function Home() {

    return (
        <div className={styles.content}>
            
            <Skills />

            <ContactForm />
        
        </div>
    );
}


