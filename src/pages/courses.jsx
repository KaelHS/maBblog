import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
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

const MainContainer = styled.div`
    max-width: 1100px;
    height: 200px;
    margin: auto;
    position: relative;
    top: 45%;
    padding: 0;
    text-align: center;
    align-items: center;

    & h1 {
        font-size: 5em;
        margin: auto;
        font-family: monospace;
        color: #fff;    
    }
`;

const Courses = () => {

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

    return(
        <Body>
            <MainContainer>
                
            </MainContainer>
        </Body>

    );

}

export default Courses;