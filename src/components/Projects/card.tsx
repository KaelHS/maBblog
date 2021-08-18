import Link from "next/link";
import styles from './card.module.scss';

interface CardProps {
    imgsrc: string;
    repolink: string;
    title:string;
    description: string;
    appTechs: string[];
}

export function Card({imgsrc, repolink, title, description, appTechs} : CardProps) {

  return(
    <div className={styles.container}>
      <img src={imgsrc} alt="" />
            <h2>{title}</h2>
            <p>{description}</p>
            <ul>
              { appTechs.map( (tech, index) => (
                <li key={index}>{tech}</li>
              ))}
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