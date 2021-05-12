import React from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useRouter } from 'next/router';


const Body = styled.body`
    box-sizing: border-box;
    position: fixed;
    height:100%;
    width: 100%;
    background: #373737;
    

`;

export const TitleContainer = styled.section`
        background: #373737;
        align-items: center;
        margin: 0;

`;

export const Title = styled.h1`
    
    text-shadow: 0 0 0.4em #00acee;
    font-family: monospace;
    color: #fff;
    padding-top: 0.5rem;
    text-align: center;
    font-size: 4rem;
    margin-top: -5rem;

`;

const Container = styled.section`
    position: fixed;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10rem;
    background: #373737;
    height: 500px;
    margin: 0;
    padding: 4rem;
    align-items: center;
`;

const Portfolio = () => {

    
    const router = useRouter();
    const customAlert = withReactContent(Swal);

    customAlert.fire({
        icon: 'warning',
        title: 'Em Construção...!!',
        text: 'Conteúdo em Breve!',
        showConfirmButton: false,
        timer: 1800,
        })
    
    React.useEffect(() => {
        setTimeout( () => {
            router.push('/')
        }, 1800);  
    }, [])
    return (
        <>
            {/* <TitleContainer>
                <Title>Projetos</Title>
            </TitleContainer> */}
            <Body />
        </>
    );

}

export default Portfolio;