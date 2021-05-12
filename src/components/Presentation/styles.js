import styled from 'styled-components';

export const PresentationSection = styled.section`
    height: 100vh;
    background: #373737;
    z-index:1

`;

export const MainContainer = styled.div`
    max-width: 1100px;
    margin: auto;
    position: relative;
    top: 45%;
    padding: 0;

    &::after, &::before {
        content: '';
        display: table;
        clear: both;
    }
`;

export const BlockContainer = styled.div`
    float: left;

`;

export const ImageContainer = styled.div`
    margin-bottom: 1rem;

`;


export const ContactContainer = styled.div`
    padding: 5px;
    margin: 0 auto;


    &::after, &::before {
        display: table;
        content: '';
        clear: both;
    }
    img {
        margin: 4rem;
    }
`;
export const IconLink = styled.a`
    margin: 0.8rem;

`;

export const InfoContainer = styled.div`
    max-width: 900px;
    float: left;
    margin-left: 3rem;

    & h3 {
        margin-top: 0.2rem;
        font-family: monospace;
        font-size: 1.75em;
        color: #00acee;
    }
`;

export const PresentationText = styled.div`
    margin-bottom: 1rem;

    & h4 {
        max-width:14rem;
        font-weight: none;
        background: #00acee ;
        border-radius: 5px;
        font-family: monospace;
        font-size: 1.5em;
        line-height: 1.5em;
        padding: 0.3rem;
        margin-bottom: 2rem;
    }

    & h2 {
        max-width: 48ch;
        font-size: 2.2em;
        color: #fff;
        line-height: 1.8em;
        font-family: monospace;
    }
`;