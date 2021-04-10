import React from 'react';
import Link from 'next/link'
import styled from 'styled-components';

const GestorMaxContainer = styled.body`
    position: fixed;
    height:100%;
    width: 100%;
    margin:0;
    padding:0;
    background: #373737;
`;

const GestorContainer = styled.div`
    margin: auto;
    align-items: center;
    align-content: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;


    padding: 0;
    max-width: 1000px;

    &::after, &::before {
        display: table;
        content:'';
        clear: both;
    }
`; 

const Button = styled.button`

    float: left;
    margin: 2rem;
    height: 10rem;
    width: 10rem;
    border: none;
    border-radius: 50%;
    align-content: center;
    font-family: monospace;
    font-size: 1.2em;
    color: #fff;

    &:hover {
        cursor: pointer;
        transition: 0.3s;
        -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.3);
    }

    &#create {
        background: green;
    }

    &#edit {
        background: yellow;
    }

    &#delete {
        background: red;
    }

`;


export default function Gestor() {
    return(
        <GestorMaxContainer>
            <GestorContainer>
                <Link href="/gestor/create"><a><Button id="create"><h2>Criar Post</h2></Button></a></Link>
                <Link href="#"><a><Button id="edit"><h2>Editar Post</h2></Button></a></Link>
                <Link href="#"><a><Button id="delete"><h2>Excluir Post</h2></Button></a></Link>
            </GestorContainer>
        </GestorMaxContainer>
    );
}