import { useEffect, useState } from 'react';
import { Screen } from "../App";
import '../styles/Result.css';
import Confetti from 'react-confetti';

type Props = {
    score: number;
    setScreen: (screen: Screen) => void;
};

const Result = ({ score, setScreen }: Props) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [showConfetti, setShowConfetti] = useState(score >= 9); // só ativa se acertar 9+

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Timer para remover o confete após 5 segundos
        const timer = setTimeout(() => {
            setShowConfetti(false);
        }, 10000);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timer);
        };
    }, []);

    const renderMessage = () => {
        if (score >= 9) {
            return (
                <>
                    <h2 className="titulo">Uau! Você é minha alma gêmea 💘</h2>
                    <p>Acertou {score} de 10!</p>
                    <div className="love-note">
                        <h2>💖Nota de agradecimento💖</h2>
                        <p>
                            Amor, eu fiz esse quiz com muito carinho. Ver você acertando tanto só me faz te admirar ainda mais. Se você quiser, podemos fazer mais um quiz juntos, né? ❤️ espero que você nunca se canse de me conhecer mais e mais, eu sou um livro aberto é só perguntar, gosto e valorizo muito todas as linguagens de amor que eu uso para dizer que te amo sem usar as palavras. Eu amo você, meu amor! ❤️ E meu maior sonho é que possamos sempre conhecer algo novo juntos, e usar isso ao nosso favor para tornar tudo cada vez mais especial e único, estarei ao seu lado nos dias nublados e ensolarados, na tristeza e na alegria, e sempre irei te entregar tudo de mim, porque você é Minha Mulher e eu sou Seu Homem.
                            Obrigado por ser tão presente e por se importar comigo até nos pequenos detalhes.
                        </p>
                    </div>
                </>
            );
        } else if (score >= 6) {
            return (
                <>
                    <h2>Você me conhece bem, ein 😍</h2>
                    <p>Acertou {score} de 10!</p>
                </>
            );
        } else {
            return (
                <>
                    <h2>Acho que você precisa prestar mais atenção em mim, amor 😂</h2>
                    <p>Acertou só {score} de 10!</p>
                </>
            );
        }
    };

    return (
        <div className="result-card">
            {showConfetti && <Confetti width={windowWidth} height={windowHeight} />}
            {renderMessage()}
            <button className="menu" onClick={() => setScreen(Screen.HOME)}>Voltar à tela inicial</button>
        </div>
    );
};

export default Result;
