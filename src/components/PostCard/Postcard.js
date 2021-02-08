import React from 'react';
import Link from 'next/link';

export default class PostCard extends React.Component {
    render() {
        return(
            <Link href="/about"><a>
            <div className="post-card" >
            <div className="img-card"></div>
            <div className="text-card">
                <h5 className="data">Dia 09 de Janeiro de 2021 - 5 minutos de leitura</h5>
                <h2 className="titulo">Titulo do Post</h2>
                <p>Adipisicing adipisicing sunt commodo quis in cillum mollit minim proident culpa duis.
                </p>
            </div>
        </div> 
        </a></Link>
        );
    }
}