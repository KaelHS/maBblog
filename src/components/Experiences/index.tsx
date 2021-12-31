import style from './styles.module.scss';

export function Experiences(){
    return(
        <div className={style.mainContainer}>
            <h1>Experiências</h1>
            <div className={style.jobContainer}>
                <img src="/consumerLogo.png" alt="Consumer" />
                <div>
                    <h2>Consumer <span>( 2020 - 2021 )</span></h2>
                    <p>Analista de Suporte</p>
                    <span>Realizar suporte técnico remotamente às ferramentas desenvolvidas pela empresa.</span>
                </div>
            </div>
            <div className={style.jobContainer}>
                <img src="/logoRissi.ico" alt="Rissi Contabilidade" width={120}/>
                <div>
                    <h2>Rissi Contabilidade Médica <span>( Atual )</span></h2>
                    <p>Desenvolvedor de Software FullStack</p>
                    <span>Projetar, mapear, corrigir e desenvolver aplicações WEB, visanboa boa UI e UX.</span>
                </div>
            </div>
        </div>
    );
}