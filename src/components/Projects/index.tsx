import React from 'react';
import Carousel from 'react-elastic-carousel';

import { Card } from './card';
import styles from './styles.module.scss';

export function Projects() {

  const imgStrings = [
    '/projectImages/dtMoney.jpg',
  ]

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 }
  ]

    return (
        <>
        <h1 className={styles.title}>Projetos</h1>
            <Carousel isRTL={false} breakPoints={breakPoints}>
                <div className={styles.item}><Card imgsrc="/projectImages/dtMoney.jpg" repolink="https://github.com/KaelHS/dt-money" title="DT Money"/></div>
                <div className={styles.item}><Card imgsrc="/projectImages/igNews.jpg" repolink="https://github.com/KaelHS/ignews" title="ig News" /></div>
                <div className={styles.item}><Card imgsrc="/projectImages/RocketShoes.jpg" repolink="https://github.com/KaelHS/desafioCarrinhoCompras" title="Rocket Shoes"/></div>
            </Carousel>
        </>
    )
}