import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';


const Container = styled.div`

    float: right;
    height: 100%;
    right: 0;
    position: fixed;
    width: 80%;
    background: #0e0b16;
    border-left: 2px solid #fff;
    overflow-y: scroll;

`;

const Postcard = styled.div`
    border-bottom: 2px solid #fff;

    &::before {
        content: '';
        display: table;
        clear: both;
    }
    &::after {
        content: '';
        display: table;
        clear: both;
    }
    &:hover {
        cursor: pointer;
        background: #363636;
        transition: 0.2s;
    }
`;

const ImgCard = styled.div `
    width: 100px;
    height: 100px;
    background: #e54;
    margin:40px;
    border-radius: 50%;
    display: block;
    float: left;
`;

const TextCard = styled.div`
    float: left;
    margin-left: 30px;
    color: #fff;
`;
const Data = styled.h5`
    margin-top: 20px;
    margin-bottom: 10px;
`;

const Titulo = styled.h2`
        font-family: monospace;
        text-transform: uppercase;
        font-size: 2em;
        font-weight: bold;
        margin-bottom: 30px;

`;

const Texto = styled.p`
    font-size: 1.2em;
    font-family: Helvetica, Arial;
`;

export const PostCard = () => {
        return(
                <Link href="/about"><a>
                <Postcard >
                <ImgCard />
                <TextCard>
                    <Data>Dia 09 de Janeiro de 2021 - 5 minutos de leitura</Data>
                    <Titulo>Titulo do Post</Titulo>
                    <Texto>Adipisicing adipisicing sunt commodo quis in cillum mollit minim proident culpa duis.
                    </Texto>
                </TextCard> 
            </Postcard>
            </a></Link>
        );
    }

const  PostContainer = ( props ) =>{
        return(
                <Container>

                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
                </Container>

        );
}

export default PostContainer;