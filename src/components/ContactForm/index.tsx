import React, { useState } from 'react';
import { useRouter } from 'next/router'
import axios from "axios";
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import Link from 'next/link';


import { FiMail, FiMapPin, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { FaGithub } from "react-icons/fa";

import styles from './styles.module.scss';


type ContactFormData = {
    cname: string;
    cemail: string;
    message: string;
}



export function ContactForm() {

    const [ cname, setCname ] = useState('');
    const [ cemail, setCemail ] = useState('');
    const [ message, setMessage ] = useState('');


    const router = useRouter();


    const customAlert = withReactContent(Swal);

    function handleSubmit (event) {
        event.preventDefault();
        
        axios({
            method: 'post',
            url: '/api/contacts',
            data: {
                cname: cname,
                cemail: cemail,
                message: message   
            }
        });

        customAlert.fire({
            icon: 'success',
            title: 'Mensagem Enviada!!',
            text: 'Obrigado pelo contato =) ',
            showConfirmButton: false,
            timer: 2500,
            })


            router.push('/');
    }
      
    return(
        <>
        <div className={styles.contactContainer}>
            <div className={styles.infoContainer}> 
                <h1>Entre em Contato!</h1>
                <h5>Nos mande uma sugestão, uma dúvida ou um olá! =)</h5> 
                <div className={styles.cardContactContainer}>
                    <div className={styles.cardContact}>
                        <FiMail size="1.5rem"/>
                        <Link href="#">
                            <a>
                                <p>kael_hs@hotmail.com</p>
                            </a>
                        </Link>
                    </div>
                    <div className={styles.cardContact}>
                        <FiMapPin size="1.5rem"/>
                        <Link href="#">
                            <a>
                                <p>São José do Rio Preto, São Paulo</p>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.socialCards}>
                <ul>
                    <li>
                        <FiLinkedin size="2.5rem" color="var(--blue-500)"/>
                        <p>LinkedIn</p>
                    </li>
                    <li>
                        <FaGithub size="2.5rem" color="var(--blue-500)"/>
                        <p>Github</p>
                    </li>
                    <li>
                        <FiInstagram size="2.5rem" color="var(--blue-500)"/>
                        <p>Instagram</p>
                    </li>
                </ul>

            </div>
        </div>
        <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Nome</label>
                    <input 
                        type="text" 
                        name="name"
                        value={cname} 
                        onChange={ ({ target }) => setCname(target.value) } />
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={cemail} 
                        onChange={ ({ target }) => setCemail(target.value) } />
                    <label htmlFor="message">Mensagem</label>
                    <textarea 
                        name="message" 
                        value={message} 
                        onChange={ ({ target }) => setMessage( target.value ) } />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </>
    );
}