import Jogo from './components/Jogo';
import Letras from './components/Letras';
import Chute from './components/Chute';
import styled from 'styled-components';
import palavras from './palavras.js'
import { useState } from 'react';
import forca0 from "./assets/forca0.png"
// import forca1 from "./assets/forca1.png"
// import forca2 from "./assets/forca2.png"
// import forca3 from "./assets/forca3.png"
// import forca4 from "./assets/forca4.png"
// import forca5 from "./assets/forca5.png"
// import forca6 from "./assets/forca6.png"

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function App() {

  const [contagemErro, setcontagemErro] = useState(0);
  const [inputChute, setInputChute] = useState("");
  const [desabilitado, setdesabilitado] = useState(true)
  const [resposta, setResposta] = useState("");
  const [arrayPalavra, setArrayPalavra] = useState([])
  const [arrayRenderizado, setArrayRenderizado] = useState([])
  const [arrayResposta, setArrayResposta] = useState([])

  function contErro() {
    if (contagemErro > 5) {
      perdeu();
    }
  }

  function perdeu() {
    setcontagemErro(6);
    setArrayRenderizado(resposta);
    setdesabilitado(true);
  }

  
  function sortearPalavra() {
    let palavraSorteada = Math.floor(Math.random() * palavras.length);
    setResposta(palavras[palavraSorteada]);
    palavraOculta(palavras[palavraSorteada]);
    setArrayResposta(palavras[palavraSorteada].split(""));
    setdesabilitado(false);    
    setInputChute("");
    setcontagemErro(0);
  }

  function palavraOculta(palavra) {
    let arrayPalavra = [];
    for (let index = 0; index < palavra.length; index++) {
      arrayPalavra.push("_");
    }
    setArrayPalavra(arrayPalavra);
    setArrayRenderizado(arrayPalavra.toString().replaceAll(",", " "));
  }

  function letraSelecionada(clicado) {
    let novoArrayPalavra = [...arrayPalavra];

    if (arrayResposta.includes(clicado)) {
      for (let index = 0; index < resposta.length; index++) {
        if (clicado == resposta[index]) {
          
        }
        
      }
    }

  }


  return (
    <Container >
      <Jogo
        imagem={forca0}
        sortearPalavra={sortearPalavra}
        arrayRenderizado={arrayRenderizado}

      />

      <Letras 
        alfabeto={alfabeto}
        desabilitado={desabilitado}
        letraSelecionada={letraSelecionada}
      />

      <Chute
        inputChute={inputChute} 
        desabilitado={desabilitado}
      />
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