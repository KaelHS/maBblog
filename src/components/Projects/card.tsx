import styled from "styled-components";

const Container =  styled.div`
        text-align: center;
        align-items: center;
        margin:0 ;
        padding:0;
        max-width: 350px;
        background: var(--gray-900);
        border-radius: 1rem;

  img {
            margin: 0 ;
            border-top-right-radius: 1rem;
            border-top-left-radius: 1rem;
            width: 350px;
            height: 160px;
            margin-bottom: 0.5rem;
        }

        h2 {
            display: block;
            margin: 0 auto;
            font-size: 2rem;
            font-family: monospace;
            color: var(--white);
            margin-bottom: 0.5rem;

        }
        p {
            display: block;
            margin: 0 auto;
            font-size: 1.2rem;
            font-family: monospace;
            color: rgb(255,255,255, 0.8);
            margin-bottom: 0.5rem;
        }

        ul {
            display: flex;
            justify-content: center;
            list-style: none;
            margin-bottom: 0.8rem;

            li {
                color:rgb(255,255,255, 0.6);
                font-size: 1rem;
                font-family: monospace;
                margin: 0.5rem;
            }

        }

        button {
            width: 100%;
            height: 3rem;
            border-bottom-left-radius: 1rem;
            border-bottom-right-radius: 1rem;
        }
`;

export function Card() {

  return(
    <Container>
      <img src="/projectImages/dtMoney.jpg" alt="" />
            <h2> DT Money</h2>
            <p> Aplicação de Controle de Gastos</p>
            <ul>
                <li>Typescript</li>
                <li>Stripe</li>
                <li>Prismic CMS</li>
            </ul>
            <button type="button"> Github</button>
    </Container>
  );
}