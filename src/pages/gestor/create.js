import React from 'react'
import axios from 'axios';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useRouter } from 'next/router';
 
const FormPageContainer = styled.div`
    margin: auto;
    padding: 10px;
    max-width: 600px;
    background: #fff;
    border-radius: 14px;
    align-items: center;

`;  

const FormPost = styled.form`
    margin: 20px;
`;

const Label = styled.label`
    width: 100%;
    font-size: 1em;
    line-height: 2em;
    margin: 2px;
`;
  
const Input = styled.input`
    width: 100%;
    font-size: 1.2em;
    margin-top: 5px;
    margin-bottom: 10px;
    padding: 5px;
    border: 2px solid#00acee;
    border-radius: 7px;
`;  

const TextArea = styled.textarea.attrs(props => ({
    type: "text",
}))`
    width: 100%;
    font-size: 1.2em;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 2px solid#00acee;
    border-radius: 7px;
    height: 18rem;
    background: #fffafa;
`;

const SubmitInput = styled.input.attrs(props => ({
    type: "submit",
}))`
    width: 300px;
    height: 40px;
    border-radius: 4px;
    border: 1px solid #00acee;
    margin: auto;

    &:hover {
    font-weight: bold;
    background: #00acee;
    color: #fff;
    transition: 0.5s;
    cursor: pointer;
    }
`;


const create = () => {

    const router = useRouter();
    const customAlert = withReactContent(Swal);

    const [ title, setTitle ] = React.useState('');
    const [ author, setAuthor ] = React.useState('');
    const [ content, setContent ] = React.useState('');

    function handleSubmit (event) {
        event.preventDefault();
        
        axios({
            method: 'post',
            url: '/api/posts',
            data: {
                title: title,
                author: author,
                content: content   
            }
        });

        customAlert.fire({
        title: <p>Post Criado com Sucesso!!</p>,
        icon: 'success',
        showConfirmButton: false,
        timer: 5000,
        })
        
        setTimeout(() => {
            router.push('/');
        }, 5000);

    }

    return (
            <FormPageContainer>
                <FormPost onSubmit={handleSubmit}>
                    <Label htmlFor="title">Titulo</Label>
                    <Input 
                        type="text" 
                        id="title" 
                        name="title"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)} />
                    <Label htmlFor="author">Autor</Label>
                    <Input 
                        type="text" 
                        name="author" 
                        id="author"
                        value={author}
                        onChange={({target}) => setAuthor(target.value)} />
                    <Label htmlFor="content">Post</Label>
                    <TextArea 
                        type="text" 
                        name="content" 
                        id="content"
                        value={content}
                        onChange={({target}) => setContent(target.value)}/>
                    <SubmitInput type="submit" value="Postar"/>
                </FormPost>
            </FormPageContainer>
    )
}

export default create