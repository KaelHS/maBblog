import styled from 'styled-components';

export const ContactPageSection = styled.section`

    margin: 0;
    z-index:1;

`;

export const ContactPageContainer = styled.div`

    margin: 0 auto;
    padding: 2rem;
    background: #373737;

    &::before, &::after {
            display: table;
            content:'';
            clear: both;
    }
`

export const InfoPageContainer = styled.div`
    margin: 50px;
    float:left;
    padding: 10px;
    max-width: 600px;
`;
export const Title = styled.h1`
    font-size: 3.5em;
    color: #fff;
`;

export const Subtitle = styled.h5`
    font-size: 1.25em;
    font-weight: normal;
    color: rgb(255,255,255, 0.7);
`;

export const CardContactContainer = styled.div`

    margin-top: 100px;
`;

export const CardContact = styled.div`
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
        text-shadow: 0 0 0.8em #00acee;
        border: 2px solid #00acee;
        transition: 0.5s;
        -webkit-transform: scale(1.1);
        -webkit-transition: 0.5s;
        -ms-transform: scale(0.8);
        transform: scale(1.1);
        cursor: default;
    }
`;  
 
export const ContactLink = styled.a`
    color: #fff;
    margin: auto;
    font-size: 0.977em;
    line-height: 1.25em;
`;

export const Image = styled.img`

float:left;
    display: block;
    margin:5px;
    width: 20px;
    height: 20px;
`;

export const Text = styled.p`
    font-size: 1.25em;
    float: left;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 20px;
    align-self: center;
`;

export const FormPageContainer = styled.div`
    margin: 50px;
    float:left;
    padding: 10px;
    max-width: 600px;
    background: #0e0b16;
    border-radius: 14px;
`;  

export const FormContact = styled.form`
    margin: 20px;
    color: #fff;
`;

export const Label = styled.label`
    width: 100%;
    font-size: 1.825em;
    line-height: 2em;
    margin: 1px;
`;
  
export const Input = styled.input`
    width: 100%;
    font-size: 1.5em;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 5px;
    border: 2px solid#00acee;
    border-radius: 7px;
`;  

export const TextArea = styled.textarea.attrs(props => ({
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

export const SubmitInput = styled.input.attrs(props => ({
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
