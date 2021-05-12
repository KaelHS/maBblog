import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.section`

    /* height: 20rem; */
    z-index: 1;
    margin: 0;
    padding: 2rem;
    background: rgb(55,55,55, 0.9);
    align-items: center;

    @media (max-width: 720px) {
        grid-template-columns: 1fr 1fr;
    }

`;
export const TextSection = styled.section`
        background: rgb(55,55,55, 0.9);
        align-items: center;
        margin: 0;

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
    margin-top: -2.5rem;
`;


export const TechContainer = styled.div`
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
            width: 4rem;
            height: 4rem;
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
        text-shadow: 0 0 0.4em #00acee;
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

export const Techs = () => {
    return (
        <>
        <TextSection>
            <Title>Tecnologias</Title>
        </TextSection>
        <Container>
            <TechContainer>
                <div>
                    <ul>
                        <li>
                            <Image width={64} height={64} src="/HTML.png" alt="HTML"/>
                            <h2>HTML</h2>
                        </li>
                        <li>
                            <Image width={64} height={64} src="/react.svg" alt="React JS"/>
                            <h2>React JS</h2>
                        </li>
                        <li>
                            <Image width={64} height={64} src="/typescript.svg" alt="Typescript"/>
                            <h2>Typescript</h2>
                        </li>
                        <li>
                            <Image width={64} height={64}  src="/styled-components.png" alt="CSS in JS"/>
                            <h2>CSS in JS</h2>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <Image  width={64} height={64} src="/CSS.png" alt="CSS" />
                            <h2>CSS</h2>
                        </li>
                        <li>
                            <Image  width={64} height={64} src="/next-js.svg" alt="Next JS"/>
                            <h2>Next JS</h2>
                        </li>
                        <li>
                            <Image  width={64} height={64} src="/mongodb.svg" alt="Mongo DB" />
                            <h2>Mongo DB</h2> 
                        </li>
                        <li>
                            <Image  width={64} height={64} src="/sass.svg" alt="SASS" />
                            <h2>SASS</h2> 
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <Image  width={64} height={64} src="/javascript.png" alt="Javascript" />
                            <h2>Javascript</h2> 
                        </li>
                        <li>
                            <Image  width={64} height={64} src="/node-js.svg" alt="Node JS" />
                            <h2>Node JS</h2>    
                        </li>
                        <li>
                            <Image  width={64} height={64} src="/sql.svg" alt="SQL" />
                            <h2>SQL</h2> 
                        </li>
                    </ul>
                </div>
            </TechContainer>
        </Container>
        </>
    );
}