import Image from 'next/image';
import { 
    SiHtml5,
    SiCss3,
    SiJavascript, 
    SiReact, 
    SiNextDotJs,
    SiNodeDotJs,
    SiMongodb, 
    SiTypescript,
    SiSass,
    SiStyledComponents,
    SiLaravel } from 'react-icons/si';
import { AiOutlineConsoleSql } from 'react-icons/ai'

import styles from './styles.module.scss';
import React from 'react';

export function Skills() {

    return (
        <div className={ styles.container}>
            <h1>Tecnologias</h1>
            <section className={styles.gridSection}>
                <div><SiHtml5 size="2rem" color="#FF5722"/><p>HTML</p></div>
                <div><SiCss3 size="2rem" color="#379AD6"/><p>CSS</p></div>            
                <div><SiJavascript size="2rem" color="#EFD81D"/><p>Javascript</p></div>            
                <div><SiReact size="2rem" color="var(--cyan-500)"/><p>React JS</p></div>
                <div><SiNextDotJs size="2rem" color="var(--gray-800)"/><p>Next JS</p></div>
                <div><SiNodeDotJs size="2rem" color="#90C53F"/><p>Node JS</p></div>
                <div><SiTypescript size="2rem" color="#2F74C0"/><p>Typescript</p></div>
                <div><SiLaravel size="2rem" color="#e54"/><p>Laravel</p></div>
                <div><SiMongodb size="2rem" color="#13AA52"/><p>Mongo DB</p></div>
                <div><AiOutlineConsoleSql size="2rem" color="#13AA52"/><p>SQL</p></div>
                <div><SiStyledComponents size="2rem" color="#F2AF9B"/><p>CSS in JS</p></div>
                <div><SiSass size="2rem" color="#CC6699"/><p>SASS</p></div>
            </section>
        </div>
    );
}