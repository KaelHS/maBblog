import style from './styles.module.scss';

export function Experiences(){
    return(
        <div className={style.mainContainer}>
            <h1>Experiências</h1>
            <div className={style.jobContainer}>
                <img src="/consumerLogo.png" alt="Consumer" />
                <div>
                    <h2>Consumer</h2>
                    <p>Analista de Suporte</p>
                    <span>Realizar suporte técnico remotamente às ferramentas desenvolvidas pela empresa.</span>
                </div>
            </div>
        </div>
    );
}