import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { 
    ContactPageContainer,
    InfoPageContainer, 
    Title, Subtitle, 
    CardContactContainer, 
    CardContact, 
    ContactLink,
    Text,
    Image, 
    FormPageContainer, 
    FormContact, 
    Label, 
    Input, 
    TextArea, 
    SubmitInput } from './styles.js';

export const Contact = () => {

    const [ cname, setCname ] = React.useState('');
    const [ cemail, setCemail ] = React.useState('');
    const [ message, setMessage ] = React.useState('');

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
            timer: 2500,
            })

    }
    

    return (
        <ContactPageContainer>
            <InfoPageContainer> 
                <Title>Entre em Contato!</Title>
                <Subtitle>Nos mande uma sugestão, uma dúvida ou um olá! =)</Subtitle> 
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
                {/* <Link href="/"><a><HomeImage src="/home-logo.png"/></a></Link> */}
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
