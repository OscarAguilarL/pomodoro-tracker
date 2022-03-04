import styled from '@emotion/styled';

const Container = styled.main`
  inline-size: 21.25rem;
  block-size: 32.5rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
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
  transition: transform .3s ease;

  &:active {
    transform: scale(0.95);
  }
`;

export const Pomodoro = () => {
  return (
    <Container>
      <h1>Pomodoro Tracker</h1>
      <div>grafica</div>
      <ButtonDiv>
        <Button color="--white" type="button">
          Start Break
        </Button>
        <Button color="--red" type="button">
          Resume Pomodoro
        </Button>
      </ButtonDiv>
    </Container>
  );
};
