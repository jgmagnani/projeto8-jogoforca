import Jogo from './components/Jogo';
import Letras from './components/Letras';
import Chute from './components/Chute';
import styled from 'styled-components';

function App() {
  return (
    <Container >
      <Jogo />
      <Letras />
      <Chute />
    </Container>
  );
}

export default App;


const Container = styled.div`
  width: 1025px;
  height: 840px;
  background-color: red;
  position: relative;
`