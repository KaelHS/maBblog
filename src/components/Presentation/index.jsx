import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {
    PresentationSection, 
    MainContainer, 
    BlockContainer, 
    ImageContainer, 
    ContactContainer,  
    IconLink,
    InfoContainer, 
    PresentationText } from './styles';

export const Presentation = () => {
    return (
        <PresentationSection >
            <MainContainer>
                <BlockContainer>
                    <ImageContainer>
                        <Image src="/me.png" width={200} height={200} />
                    </ImageContainer>
                    <ContactContainer>
                        <IconLink>
                            <Link href="https://www.linkedin.com/in/kaelhsilva/" ><a target="_blank"><Image src="/logo-linkedin.png" width={35} height={35}/></a></Link>
                        </IconLink>
                        <IconLink>
                            <Link href="https://www.instagram.com/kael_hs/"><a target="_blank"><Image src="/logo-instagram.png" width={35} height={35}/></a></Link>
                        </IconLink>
                        <IconLink>
                            <Link href="https://github.com/KaelHS"><a target="_blank"><Image src="/logo-github.png" width={35} height={35}/></a></Link>
                        </IconLink> 
                    </ContactContainer>
                </BlockContainer>
                <InfoContainer>
                    <PresentationText>
                        <h4>FullStack Developer</h4>
                        {/* <h2>Desenvolvedor de aplicações web performáticas, com foco na segurança e experiência de usuário</h2> */}
                        <h2> Projeto e desenvolvimento de aplicações WEB, com foco na acessibilidade, segurança e experiência do usuário </h2>
                    </PresentationText>
                    {/* <h3> Stack Utilizada: ReactJS, NodeJS, Material UI, MongoDB </h3> */}
                </InfoContainer >
            </MainContainer>
        </PresentationSection>
    );
}


