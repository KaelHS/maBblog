import { NavBar } from '../components/NavBar';
import { Presentation } from '../components/Presentation'; 
import { Techs } from '../components/Techs';
import { Contact } from '../components/Contact';

const Home = () => {
    return (
        <>
        <NavBar />
        <Presentation />
        <Techs />
        <Contact />
        </>
    );

}

export default Home;