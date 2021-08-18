import React from 'react';
import Carousel from 'react-elastic-carousel';

import { Card } from './card';
import styles from './styles.module.scss';

export function Projects() {


  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 }
  ]

    return (
        <>
        <h1 className={styles.title}>Projetos</h1>
            <Carousel isRTL={false} breakPoints={breakPoints} >
                <div className={styles.item}>
                      <Card 
                        imgsrc="/projectImages/portifolio.png" 
                        repolink="https://github.com/KaelHS/maBblog" 
                        title="Portifólio" 
                        description="Portifolio"
                        appTechs={['MongoDB/Mongoose, NodeJS, SASS, Typescript, SweetAlert']}/>
                </div>
                <div className={styles.item}>
                  <Card 
                    imgsrc="/projectImages/crypto-view.png" 
                    repolink="https://github.com/KaelHS/cryptoView" 
                    title="CryptoView" 
                    description="Dashboard para cryptomoedas"
                    appTechs={['Typescript, SASS, React Icons, Consumo de API externa']}/>
                </div>
                <div className={styles.item}>
                  <Card 
                    imgsrc="/projectImages/igNews.jpg" 
                    repolink="https://github.com/KaelHS/ignews" 
                    title="igNews" 
                    description="Assinatura de conteudo"
                    appTechs={['FaunaDB, Prismic CMS, Stripe, SASS, Typescript']}/>
                </div>
                <div className={styles.item}>
                  <Card 
                    imgsrc="/projectImages/dtMoney.jpg" 
                    repolink="https://github.com/KaelHS/dt-money" 
                    title="DT Money" 
                    description="Controle de gastos"
                    appTechs={['Typescript, MirageJS, Styled-Components']}/>
                </div>
                <div className={styles.item}>
                  <Card 
                    imgsrc="/projectImages/RocketShoes.jpg" 
                    repolink="https://github.com/KaelHS/desafioCarrinhoCompras" 
                    title="Rocket Shoes" 
                    description="e-commerce"
                    appTechs={['Toastify, React Icons, React Router, Styled-Components']}/>
                </div>

            </Carousel>
        </>
    )
}