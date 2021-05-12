import styled from 'styled-components';

export const Nav = styled.header`
    margin:0;
    padding:0;
    position: fixed;
    top:0;
    width: 100%;
    z-index: 2;
    background: #0e0b16;
`;

export const NavContainer = styled.div`
    margin: 0;
    padding: 0.25rem 3rem;


    &::after, &::before {
        content: '';
        display: table;
        clear: both;

    }
`;

export const BrandName = styled.div`
    padding: 1rem;
    float: left;

    & h3 {
        font-weight: none;
        padding: 0;
        font-size: 2.3em;
        color: #00acee;
    }
    
    & span {
        font-weight: bold;
    }
`;

export const NavMenu = styled.div`
    float: right;

    & ul {
        margin-left: auto;
    }
    & li { 
        font-family: monospace;
        display: inline-block; 
        margin: 1rem;
        font-size: 2em;
        color: #fff;
        padding: 0;

        &:hover {
            color: #00acee;
        }
    }
`;