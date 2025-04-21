import { Screen } from "../App";
import '../styles/Home.css';
import him from '../images/him.jpg';
import her from '../images/her.jpg';

type Props = {
    setScreen: (screen: Screen) => void;
    setScore: (score: number) => void;
    handleStartQuiz: () => void;
};

const Home = ({ setScreen, setScore }: Props) => {
    const startQuiz = () => {
        setScore(0); // Resetando o score ao iniciar o quiz
        setScreen(Screen.QUIZ); // Muda para a tela do quiz
    };

    return (
        <div className="home-card">
            <h1>Bem vinda ao Quiz sobre mim Amor!💖</h1>
            <div className="flex-imagens">
                <img src={him} alt="foto-Fellipe" />
                <img src={her} alt="foto-Barbara" />
            </div>
            <p>Será que você me conhece mesmo?</p>
            <p>Fiz este quiz para descontrair um pouco amor para você jogar no momento de call comigo, eu me diverti programando ele, espero que você também se divirta jogando.</p>

            <div className="home-buttons">
                <button onClick={startQuiz}>Iniciar Quiz</button>
                <button onClick={() => alert("Histórico só depois de jogar - eu ainda não consegui desenvolver essa parte ☺️")}>Histórico de partidas</button>
            </div>
        </div>
    );
};

export default Home;
