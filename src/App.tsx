import { useState } from "react";
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';

export enum Screen {
  HOME = 'home',
  QUIZ = 'quiz',
  RESULT = 'result'
}

function App() {
  const [screen, setScreen] = useState<Screen>(Screen.HOME);
  const [score, setScore] = useState<number>(0);

  // Coloque o handleStartQuiz dentro do componente App
  const handleStartQuiz = () => {
    setScore(0); // Resetar o score quando iniciar o quiz
    setScreen(Screen.QUIZ);
  };

  return (
    <>
      {screen === Screen.HOME && <Home setScreen={setScreen} setScore={setScore} handleStartQuiz={handleStartQuiz} />}
      {screen === Screen.QUIZ && <Quiz setScreen={setScreen} setScore={setScore} />}
      {screen === Screen.RESULT && <Result score={score} setScreen={setScreen} />}
    </>
  );
}

export default App;
