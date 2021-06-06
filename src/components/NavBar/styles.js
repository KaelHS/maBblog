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

    @media (max-width: 720px) {
        padding: 0.25rem 2rem;
    }

    @media (max-width: 480px) {
        padding: 0.25rem 1rem;
    }
`;

export const BrandName = styled.div`
    padding: 1rem;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;

    & h3 {
        font-weight: none;
        padding: 0;
        font-size: 2.3rem;
        color: #00acee;
    }
    
    & span {
        font-weight: bold;
    }

    @media (max-width: 720px) {
        h3 {
            font-size: 2rem;
        }
    }

    @media (max-width: 480px) {
        h3 {
            font-size: 1.7rem;
        }
    }
`;

export const NavMenu = styled.div`
    float: right;

    & ul {
        margin-left: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    & li { 
        font-family: monospace;
        display: inline-block; 
        margin: 1rem;
        font-size: 2rem;
        color: #fff;
        padding: 0;

        &:hover {
            color: #00acee;
        }
    }

    @media (max-width: 720px) {
        li {
            margin: 0.8rem;
            font-size: 1.7rem;
        }
    }

    @media (max-width: 480px) {
        li {
            margin: 0.6rem;
            font-size: 1.4rem;
        }
    }
`;