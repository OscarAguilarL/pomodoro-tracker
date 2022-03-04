import styled from '@emotion/styled';
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
      <h1>Desde app</h1>
    </Container>
  );
}

export default App;
