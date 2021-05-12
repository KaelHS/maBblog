import styled from 'styled-components';

export const TechSection = styled.section`

    margin: 0;
    background: rgb(55,55,55, 0.9);
    z-index:1;

    &::before, &::after {
        display: table;
        content:'';
        clear: both;
    }
`;

export const Container = styled.div`

    margin: 0 auto;
    padding: 2rem;

    align-items: center;

    @media (max-width: 720px) {
        grid-template-columns: 1fr 1fr;
    }

`;
export const TextSection = styled.div`
        /* background: rgb(55,55,55, 0.9); */
        align-items: center;
        margin: 0 auto;

        &::after {
        content:'';
        display: block;
        width: 4rem;
        height:2px;
        background: #fff;
        margin: 2rem auto 0 auto;
        }

`;

export const Title = styled.h1`
    text-shadow: 0 0 0.4em #00acee;
    font-family: monospace;
    color: #fff;
    padding-top: 0.5rem;
    text-align: center;
    font-size: 4rem;
    margin-top: -4.5rem;
`;


export const TechContainer = styled.div`
    max-width:1300px;
    margin: 2rem auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding-bottom: 4.7rem;

    li {

        display: flex;
        padding: 0.5rem;
        text-align: center;
        border: solid 2px #373737;
        background: #373737;
        margin: 0 1.25rem;
        border-radius: 0.3rem;
        justify-content: left;
        
        & + li {
            margin-top: 1.25rem;
        }
        
        img {
            display: inline;
            margin: 0 2.5rem 0 1rem;
        }
        
        h2 {

            margin: 0 0 0 1.5rem;
            font-family: monospace;
            display: inline;
            color: #fff;
            line-height: 4rem;
            font-size: 2rem;

            
        }

        &:hover {
        /* background: rgb(255,255,255, 0.1); */
        text-shadow: 0 0 0.8em #00acee;
        border: 2px solid #00acee;
        transition: 0.5s;
        -webkit-transform: scale(1.1);
        -webkit-transition: 0.5s;
        -ms-transform: scale(0.8);
        transform: scale(1.1);
        cursor: default;
    }

    }
`;