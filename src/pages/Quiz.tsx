import { useState, useEffect } from "react";
import { questions } from "../data/questions";
import { Screen } from "../App";
import '../styles/Quiz.css';

type Props = {
    setScreen: (screen: Screen) => void;
    setScore: (score: number) => void;
};

const Quiz = ({ setScreen, setScore }: Props) => {
    console.log("tela do quiz sendo renderizada");

    // Estado para armazenar a pergunta atual
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    
    // Estado para armazenar a opção selecionada
    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    // Embaralhando as perguntas
    const [shuffledQuestions, setShuffledQuestions] = useState([...questions]);

    useEffect(() => {
        // Embaralhar perguntas ao iniciar
        const shuffled = [...questions].sort(() => Math.random() - 0.5);
        setShuffledQuestions(shuffled);
    }, []);

    const current = shuffledQuestions[currentQuestionIndex];

    // Função para lidar com a escolha de uma opção
    const handleOptionClick = (index: number) => {
        if (selectedOption === null) {
            setSelectedOption(index);
            if (index === current.correctAnswer) {
                setScore((prev:number) => prev + 1);  // Passando diretamente o valor incrementado
            }
        }
    };
    

    // Função para passar para a próxima pergunta ou para o resultado
    const handleNext = () => {
        if (currentQuestionIndex + 1 < shuffledQuestions.length) {
            setCurrentQuestionIndex((prev) => prev + 1);
            setSelectedOption(null);  // Resetar a opção selecionada para a próxima pergunta
        } else {
            setScreen(Screen.RESULT);  // Vai para a tela de resultado quando terminar as perguntas
        }
    };

    return (
        <div className="quiz-card">
            <h2>{current.question}</h2>
            
            {/* Exibe a imagem, se houver */}
            {current.image && <img src={current.image} alt="ilustração" width="230" className="quiz-image" />}

            {/* Exibe as opções de resposta */}
            <div className="options">
                {current.options.map((option, index) => (
                    <button
                        key={index}
                        className={`option ${
                            selectedOption !== null
                                ? index === current.correctAnswer
                                    ? "correct"
                                    : index === selectedOption
                                    ? "incorrect"
                                    : ""
                                : ""
                        }`}
                        disabled={selectedOption !== null}  // Desabilita os botões depois que uma opção é selecionada
                        onClick={() => handleOptionClick(index)}  // Chama a função ao clicar na opção
                    >
                        {option}
                    </button>
                ))}
            </div>

            {/* Exibe o botão "Próxima" quando uma opção é selecionada */}
            {selectedOption !== null && (
                <button className="next-button" onClick={handleNext}>
                    Próxima
                </button>
            )}
        </div>
    );
};

export default Quiz;
