import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Contact = () => {
    return (
        <section className="contact-page-container">
            <div className="info-page-container"> 
                <h1>Entre em Contato!</h1>
                <h5>Nos mande uma sugestão, uma dúvida ou oferta de freela =)</h5> 
                <div className="card-contact-container" >
                    <div className="card-contact">
                        <Link href="#">
                            <a>
                                <img src="/email.png" />
                                <p>kael_hs@hotmail.com</p>
                            </a>
                        </Link>
                    </div>
                    <div className="card-contact">
                        <Link href="#">
                            <a>
                                <img src="/gps.png"></img>
                                <p>São José do Rio Preto, São Paulo</p>
                            </a>
                        </Link>
                    </div>
                </div>
                <Link href="/"><a><button type="button">Home</button></a></Link>
            </div>
            <div className="form-page-container">
                <form className="form-contact">
                    <label for="name">Nome</label>
                    <input type="text" name="name"></input>
                    <label for="email">Email</label>
                    <input type="email" name="email"></input>
                    <label for="message">Mensagem</label>
                    <textarea type="text" name="message"></textarea>
                    <input type="submit" value="Enviar"></input>
                </form>
            </div>
        </section>
    )
}

export default Contact