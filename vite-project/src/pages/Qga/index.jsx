import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { questionsQga } from '../../components/Questions/indexQgaQuestions';
import GlobalStyle from '../../components/Colors';
import { Link } from 'react-router-dom';

const Body = styled.body`
  background-color: var(--third);
  width: 100%;
  height: 100vh;
`;

const QuizContainer = styled.div`
  background-color: var(--third);
  padding: 20px;
  width: 600px;
  margin: 0 auto;
  position: absolute;
  top: 55%;
  left: 55%;
  text-align: center;
  transform: translate(-50%, -50%);
  scale: 1.2;
`;

const QuestionHeader = styled.h2`
  font-size: 1.2rem;
  color: var(--primary);
  margin-bottom: 20px;
`;

const QuestionText = styled.div`
  font-size: 1.1rem;
  color: var(--primary);
  margin-bottom: 15px;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Option = styled.button`
  background-color: ${props => (props.selected ? '#FDFDFD' : '#1D1D20')};
  color: ${props => (props.selected ? '#1D1D20' : '#FDFDFD')};
  border: 2px solid ${props => (props.selected ? '#FDFDFD' : '#FDFDFD')};
  border-radius: 15px;
  padding: 15px 35px;
  margin: 8px 0;
  cursor: pointer;
  font-weight: 700;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  &:hover {
    background-color: #FDFDFD;
    color: #1D1D20;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--primary);
  position: absolute;
  top: 25px;
  left: 25px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin: 20px 0;
`;

const Qga = () => {
  const navigate = useNavigate(); // Hook para redirecionar
  const [progress, setProgress] = useState(() => {
    return parseInt(localStorage.getItem('progressQga')) || 0;
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [questions, setQuestions] = useState(questionsQga);
  const [incorrectQuestions, setIncorrectQuestions] = useState([]);

  useEffect(() => {
    const storedIncorrectQuestions = JSON.parse(localStorage.getItem('incorrectQuestionsQga')) || [];
    setIncorrectQuestions(storedIncorrectQuestions);
  }, []);

  const playSound = () => {
    const sound = new Audio('/level-up.mp3');
    sound.play();
  };

  const handleAnswer = (option) => {
    const question = questions[currentQuestion];
    if (option === question.answer) {
      setScore(prev => prev + 1);
    } else {
      setIncorrectQuestions(prev => [...prev, question]);
    }

    // Play sound
    playSound();

    // Move to the next question
    setSelectedOption(option);
    setTimeout(() => {
      setSelectedOption("");
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else {
        // Quiz complete
        localStorage.setItem('progressQga', Math.min((score + 1) * 10, 100));
        localStorage.setItem('incorrectQuestionsQga', JSON.stringify(incorrectQuestions));
        // Redireciona para a página inicial
        navigate("/");
      }
    }, 500);
  };

  const question = questions[currentQuestion];

  return (
    <Body>
      <StyledLink to="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
        </svg>
      </StyledLink>
      <GlobalStyle />
      <QuizContainer>
        {questions.length === 0 ? (
          <div>Nenhuma pergunta disponível.</div>
        ) : (
          <>
            <QuestionHeader>Question {currentQuestion + 1}/{questions.length}</QuestionHeader>
            <QuestionText>{question.question}</QuestionText>
            <OptionsContainer>
              {question.options.map(option => (
                <Option
                  key={option}
                  selected={selectedOption === option}
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </Option>
              ))}
            </OptionsContainer>
          </>
        )}
      </QuizContainer>
    </Body>
  );
};

export default Qga;
