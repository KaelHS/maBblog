import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';


const Container = styled.body`
    box-sizing: border-box;
    position: fixed;
    width: 100%;
    height:100%;
    //background: #3e2093;
    background-color: #373737;
    margin:0px;
    padding:0px;

    &::before, &::after {
        display: table;
        content:'';
        clear: both;
    }
`;

const TextContainer = styled.div`
    margin: 100px 0 auto 30px;
    float: left;
    max-width: 400px;
    padding: 10px;

`;
const Title = styled.h1`
    color: #fff;
    font-size: 3em;
    margin-bottom: 20px;
`;

const Paragrafo = styled.p`
    color: #fff;
    margin-bottom: 10px;
`;

const ImgContainer = styled.div`
    width: 50%;
    margin: 50px 0 auto 150px;
    float: left;
    max-width: 600px;
    padding: 10px;

    img {
        display: block;
        filter: blur(1px);
        transform: rotate(360deg) infinite;
    }
`;

const HomeImage = styled.img`
    margin: 6rem auto;
    width:70px;
    height:70px;
    display: block;

`;

const About = () => {
    return (
        <Container>
            <TextContainer>
            <Title> Sobre mim...</Title>
            <Paragrafo>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</Paragrafo>
            <Link href="/"><a><HomeImage src="home-logo.png" /></a></Link>    
            </TextContainer>
            <ImgContainer>
                <img src="/ubuntu-me.png" />
            </ImgContainer>
        </Container>
    )
}

export default About
