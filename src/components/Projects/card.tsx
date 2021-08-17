import Link from "next/link";
import styles from './card.module.scss';

interface CardProps {
    imgsrc: string;
    repolink: string;
    title:string;
}

export function Card({imgsrc, repolink, title} : CardProps) {

  return(
    <div className={styles.container}>
      <img src={imgsrc} alt="" />
            <h2>{title}</h2>
            <p> Aplicação de Controle de Gastos</p>
            <ul>
                <li>Typescript</li>
                <li>Stripe</li>
                <li>Prismic CMS</li>
            </ul>
            <Link href={repolink}>
                <a target="_blank">
                    <button type="button">
                                <p>Github</p>
                    </button>
                </a>
            </Link>

    </div>
  );
}