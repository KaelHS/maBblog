import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const ContactPageContainer = styled.section`

    margin: 0;
    //background: #3634a0;
    background: #373737;
    position: fixed;
    height: 100%;
    width: 100%;

    &::before, &::after {
        display: table;
        content:'';
        clear: both;
    }
`;

const InfoPageContainer = styled.div`
    margin: 50px;
    float:left;
    padding: 10px;
    max-width: 600px;
`;
const Title = styled.h1`
    font-size: 3.5em;
    color: #fff;
`;

const Subtitle = styled.h5`
    font-size: 1.25em;
    font-weight: normal;
    color: rgb(255,255,255, 0.7);
`;

const CardContactContainer = styled.div`

    margin-top: 100px;
`;

const CardContact = styled.div`
    width: 400px;
    margin-top: 15px;
    margin-bottom: 5px;
    padding: 15px;
    border-radius: 5px;
    border: 2px solid #373737;

    &::before, &::after {
        display: table;
        content:'';
        clear: both;
    }
    
    &:hover {
        background: rgb(255,255,255, 0.1);
        border: 2px solid #00acee;
        //#00acee ; antigo hover
        cursor: pointer;
    }
`;  
 
const ContactLink = styled.a`
    color: #fff;
    margin: auto;
    font-size: 0.977em;
    line-height: 1.25em;
`;

const Image = styled.img`

float:left;
    display: block;
    margin:5px;
    width: 20px;
    height: 20px;
`;

const Text = styled.p`
    font-size: 1.25em;
    float: left;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 20px;
    align-self: center;
`;

const HomeImage = styled.img`
    margin: 6rem auto;
    width:70px;
    height:70px;
    display: block;

`;

const FormPageContainer = styled.div`
    margin: 50px;
    float:left;
    padding: 10px;
    max-width: 600px;
    background: #0e0b16;
    border-radius: 14px;
`;  

const FormContact = styled.form`
    margin: 20px;
    color: #fff;
`;

const Label = styled.label`
    width: 100%;
    font-size: 1.825em;
    line-height: 2em;
    margin: 1px;
`;
  
const Input = styled.input`
    width: 100%;
    font-size: 1.5em;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 5px;
    border: 2px solid#00acee;
    border-radius: 7px;
`;  

const TextArea = styled.textarea.attrs(props => ({
    type: "text",
}))`
    width: 100%;
    font-size: 1.5em;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 2px solid#00acee;
    border-radius: 7px;
    height: 160px;
    background: #fffafa;
`;

const SubmitInput = styled.input.attrs(props => ({
    type: "submit",
}))`
    width: 300px;
    height: 40px;
    border-radius: 4px;
    border: 1px solid #00acee;
    align-items: center;

    &:hover {
    font-weight: bold;
    background: #00acee;
    color: #fff;
    transition: 0.5s;
    cursor: pointer;
    }
`;


const Contact = () => {

    const [ cname, setCname ] = React.useState('');
    const [ cemail, setCemail ] = React.useState('');
    const [ message, setMessage ] = React.useState('');

    const router = useRouter();
    const customAlert = withReactContent(Swal);

    function handleSubmit (event) {
        event.preventDefault();
        
        axios({
            method: 'post',
            url: '/api/contacts',
            data: {
                cname: cname,
                cemail: cemail,
                message: message   
            }
        });

        customAlert.fire({
            icon: 'success',
            title: 'Mensagem Enviada!!',
            text: 'Obrigado pelo contato =) ',
            showConfirmButton: false,
            timer: 5000,
            })

        setTimeout(() => {
            router.push('/');
        }, 5000);

    }
    
    return (
        <ContactPageContainer>
            <InfoPageContainer> 
                <Title>Entre em Contato!</Title>
                <Subtitle>Nos mande uma sugestão, uma dúvida ou um salve! =)</Subtitle> 
                <CardContactContainer>
                    <CardContact>
                        <Link href="#">
                            <ContactLink>
                                <Image src="/email.png" />
                                <Text>kael_hs@hotmail.com</Text>
                            </ContactLink>
                        </Link>
                    </CardContact>
                    <CardContact>
                        <Link href="#">
                            <ContactLink>
                                <Image src="/gps.png" />
                                <Text>São José do Rio Preto, São Paulo</Text>
                            </ContactLink>
                        </Link>
                    </CardContact>
                </CardContactContainer>
                <Link href="/"><a><HomeImage src="/home-logo.png"/></a></Link>
            </InfoPageContainer>
            <FormPageContainer>
                <FormContact onSubmit={handleSubmit}>
                    <Label htmlFor="name">Nome</Label>
                    <Input 
                        type="text" 
                        name="name"
                        value={cname} 
                        onChange={ ({ target }) => setCname(target.value) } />
                    <Label htmlFor="email">Email</Label>
                    <Input 
                        type="email" 
                        name="email" 
                        value={cemail} 
                        onChange={ ({ target }) => setCemail(target.value) } />
                    <Label htmlFor="message">Mensagem</Label>
                    <TextArea
                        type="text" 
                        name="message" 
                        value={message} 
                        onChange={ ({ target }) => setMessage( target.value ) } />
                    <SubmitInput value="Enviar" ></SubmitInput>
                </FormContact>
            </FormPageContainer>
        </ContactPageContainer>
    )
}

export default Contact;
