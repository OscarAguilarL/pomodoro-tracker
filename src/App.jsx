import styled from '@emotion/styled';
import { Pomodoro } from './components/Pomodoro';
import { useWindowDimensions } from './hooks/useWindowDimensions';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  block-size: ${(props) => props.height}px;
`;

function App() {
  const { height } = useWindowDimensions();

  return (
    <Container height={height}>
      <Pomodoro />
    </Container>
  );
}

export default App;
