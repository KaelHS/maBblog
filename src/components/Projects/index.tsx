import React from 'react';
import Carousel from 'react-elastic-carousel';

import Item from './Item';
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
            <Carousel isRTL={false} breakPoints={breakPoints}>
                <Item><Card /></Item>
                <Item><Card /></Item>
                <Item><Card /></Item>
                <Item><Card /></Item>
                <Item><Card /></Item>
                <Item><Card /></Item>
                <Item><Card /></Item>
                <Item><Card /></Item>
                <Item><Card /></Item>
                <Item><Card /></Item>
            </Carousel>
        </>
    )
}