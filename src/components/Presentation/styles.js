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

    @media (max-width:1000px) {
        max-width: 680px;
        top: 30%;
    }
    @media (max-width:480px) {
        max-width: 440px;
        top: 30%;
    }

 `;

export const BlockContainer = styled.div`
    float: left;

    @media (max-width:1000px) {
        float:none;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;

    }
    @media (max-width:480px) {
        float:none;
        display: flex;
        align-items: center;
        justify-content: center;
    }

`;

export const ImageContainer = styled.div`
    margin-bottom: 1rem;

    @media (max-width:1000px) {
        height: 180px;
        width: 180px;
        display: block;
        align-items: center;
        justify-content: center;
    }

`;


export const ContactContainer = styled.div`
    padding: 0.25rem;
    margin: 0 auto;


    &::after, &::before {
        display: table;
        content: '';
        clear: both;
    }
    img {
        margin: 4rem;
    }

    @media (max-width:1000px) {
        display: block;
        img {
            margin: 2.5rem;
        }

    }
    @media (max-width:480px) {
        display: block;

        img {
            margin: 1.5rem;
        }
    }
`;
export const IconLink = styled.div`
    /* display: inline-block; */
    margin: 0.8rem;
    float: left;

    @media (max-width:1000px) {
        margin: 0.4rem;
        height: 30px;
        width:30px;

        img {
            margin: 2.5rem;
        }

    }
    @media (max-width:480px) {
        margin: 0.4rem;

        img {
            margin: 1.5rem;
        }
    }
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

    @media (max-width:1000px
    ) {
        display: block;
        max-width: 550px;   
        margin-left: 1.8rem;

        & h3 {
        font-size: 1.25em;
    }

    }
    @media (max-width:480px) {
        margin: 0.4rem;

        img {
            margin: 1.5rem;
        }
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