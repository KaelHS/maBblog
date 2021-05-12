import Image from 'next/image';

import { TechSection , Container, TextSection, Title, TechContainer } from  './styles';

export const Techs = () => {
    return (
        <TechSection>
            <Container>
                <TextSection>
                    <Title>Tecnologias</Title>
                </TextSection>
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
        </TechSection>
    );
}