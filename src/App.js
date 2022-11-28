import Jogo from './components/Jogo';
import Letras from './components/Letras';
import Chute from './components/Chute';
import styled from 'styled-components';
// import { useState } from 'react';

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function App() {

  // const [chute, setChute] = useState("");

  return (
    <Container >
      <Jogo />

      <Letras 
      alfabeto={alfabeto}
      />

      <Chute />
    </Container>
  );
}

export default App;


const Container = styled.div`
  width: 1025px;
  height: 840px;
  background-color: #FFFFFF;
  position: relative;
`