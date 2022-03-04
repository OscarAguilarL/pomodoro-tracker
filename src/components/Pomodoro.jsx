import { useState, useRef } from 'react';
import styled from '@emotion/styled';
import { ProgressBar } from './ProgressBar';

const Container = styled.main`
  inline-size: 21.25rem;
  block-size: 32.5rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  /* justify-content: space-around; */
  gap: 1.75rem;
  padding-top: 1.25rem;
  box-shadow: var(--boxShadow);
  font: var(--title);
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const Button = styled.button`
  display: block;
  border: none;
  padding: 0.75rem;
  inline-size: 75%;
  box-shadow: var(--boxShadow);
  font: var(--button);
  background-color: var(--Bg);
  color: var(${(props) => props.color});
  cursor: pointer;
  transition: transform 0.3s ease;
  border-radius: 8px;

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const POMODORO_SESSION = 25 * 60;
const POMODORO_BREAK = 5 * 60;

export const Pomodoro = () => {
  const [pomodoroSession, setPomodoroSession] = useState(POMODORO_SESSION);
  const [pomodoroBreak, setPomodoroBreak] = useState(POMODORO_BREAK);
  const [isRunning, setIsRunning] = useState(false);
  const interval = useRef(null);

  const handleStartPomodoro = () => {
    setIsRunning(true);
    interval.current = setInterval(() => {
      setPomodoroSession((prevState) => prevState - 1);
    }, 1000);
  };

  const handlePausePomodoro = () => {
    if (isRunning) {
      window.clearInterval(interval.current);
      setIsRunning(false);
    }
  };

  // useEffect(() => {}, []);

  return (
    <>
      <Container>
        <h1>Pomodoro Tracker</h1>
        <ProgressBar value={pomodoroSession} />
        <ButtonDiv>
          <Button
            color={`${isRunning ? '--trailColor' : '--white'}`}
            type="button"
            onClick={handleStartPomodoro}
            disabled={isRunning}
          >
            {isRunning ? 'Start' : 'Resume'}
            Pomodoro
          </Button>
          <Button
            color={`${isRunning ? '--red' : '--trailColor'}`}
            type="button"
            onClick={handlePausePomodoro}
            disabled={!isRunning}
          >
            {isRunning ? 'Pause' : 'Resume'}
            Pomodoro
          </Button>
        </ButtonDiv>
      </Container>
    </>
  );
};
