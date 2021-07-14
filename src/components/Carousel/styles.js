import styled from 'styled-components';

export const Container = styled.section`
    margin: 0 ;
    padding: 3rem;
    background: #373737;

    h1 {
    text-shadow: 0 0 0.4em #00acee;
    font-family: monospace;
    color: #fff;
    padding-top: 0.5rem;
    text-align: center;
    font-size: 4rem;
    margin-top: -4.5rem;
    padding-bottom: 5.5rem;
    }

    .card {
        text-align: center;
        align-items: center;
        margin:0 ;
        padding:0;
        max-width: 350px;
        
        img {
            margin: 0 ;
            border-top-right-radius: 1rem;
            border-top-left-radius: 1rem;
            width: 350px;
            height: 160px;
            margin-bottom: 0.5rem;
        }

        h2 {
            display: block;
            margin: 0 auto;
            font-size: 2rem;
            font-family: monospace;
            color: #fff;
            margin-bottom: 0.5rem;
            background: #363636;

        }
        p {
            display: block;
            margin: 0 auto;
            font-size: 1.2rem;
            font-family: monospace;
            color: rgb(255,255,255, 0.8);
            margin-bottom: 0.5rem;
        }

        ul {
            display: flex;
            justify-content: center;
            list-style: none;
            margin-bottom: 0.8rem;

            li {
                color:rgb(255,255,255, 0.6);
                font-size: 1rem;
                font-family: monospace;
                margin: 0.5rem;
            }

        }

        button {
            width: 100%;
            height: 50px;
            border-bottom-left-radius: 1rem;
            border-bottom-right-radius: 1rem;
        }

        &:hover {
        /* background: rgb(255,255,255, 0.1); */
        text-shadow: 0 0 0.8em #00acee;
        transition: 0.5s;
        cursor: default;

        }
    }
`;