import Slider from "react-slick";
import Link from 'next/link';


import { Container } from './styles';

export function Carousel () {

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
    return (
      <Container>
        <h1>Portifólio</h1>
        <Slider {...settings} className="slider">
          <div className="card">
            <img src="/projectImages/dtMoney.jpg" alt="" />
            <h2> DT Money</h2>
            <p> Aplicação de Controle de Gastos</p>
            <ul>
                <li>Typescript</li>
                <li>Stripe</li>
                <li>Prismic CMS</li>
            </ul>
            <button type="button"> Github</button>
          </div>
          <div className="card"> 
            <img src="/projectImages/dtMoney.jpg" alt="" />
            <h2> DT Money</h2>
            <p> Aplicação de Controle de Gastos</p>
            <ul>
                <li>Typescript</li>
                <li>Stripe</li>
                <li>Prismic CMS</li>
            </ul>
            <button type="button"> Github</button>
          </div>
          <div className="card">
            <img src="/projectImages/dtMoney.jpg" alt="" />
            <h2> DT Money</h2>
            <p> Aplicação de Controle de Gastos</p>
            <ul>
                <li>Typescript</li>
                <li>Stripe</li>
                <li>Prismic CMS</li>
            </ul>
            <button type="button"> Github</button>
          </div>
          <div className="card">
            <img src="/projectImages/dtMoney.jpg" alt="" />
            <h2> DT Money</h2>
            <p> Aplicação de Controle de Gastos</p>
            <ul>
                <li>Typescript</li>
                <li>Stripe</li>
                <li>Prismic CMS</li>
            </ul>
            <button type="button"> Github</button>
          </div>
          <div className="card">
            <img src="/projectImages/dtMoney.jpg" alt="" />
            <h2> DT Money</h2>
            <p> Aplicação de Controle de Gastos</p>
            <ul>
                <li>Typescript</li>
                <li>Stripe</li>
                <li>Prismic CMS</li>
            </ul>
            <button type="button"> Github</button>
          </div>
        </Slider>
      </Container>
    );
}