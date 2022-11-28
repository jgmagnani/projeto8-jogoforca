import Jogo from './components/Jogo';
import Letras from './components/Letras';
import Chute from './components/Chute';
import styled from 'styled-components';
import palavras from './palavras.js'
import { useState } from 'react';


const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const imagens = [
  "./assets/forca0.png",
  "./assets/forca1.png",
  "./assets/forca2.png",
  "./assets/forca3.png",
  "./assets/forca4.png",
  "./assets/forca5.png",
  "./assets/forca6.png"
];

function App() {

  

  const [contagemErro, setcontagemErro] = useState(0);
  const [desabilitado, setdesabilitado] = useState(true)
  const [resposta, setResposta] = useState("");
  const [arrayPalavra, setArrayPalavra] = useState([]);
  const [arrayRenderizado, setArrayRenderizado] = useState("");
  const [arrayResposta, setArrayResposta] = useState([]);
  const [acertou, setAcertou] = useState("");
  const [letrasSelecionadas, setLetrasSelecionadas] = useState([]);

  function contErro() {
    if (contagemErro >= 5) {
      perdeu();
    }else {
      setcontagemErro(contagemErro + 1);
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
    setLetrasSelecionadas([])
    setAcertou("");
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
        if (clicado === resposta[index]) {
          novoArrayPalavra.splice(index, 1, clicado);
        }        
      }
      setArrayPalavra(novoArrayPalavra)
      setArrayRenderizado(novoArrayPalavra.toString().replaceAll(",", " "));

    }else{
      contErro();
    }

    respostaCorreta(novoArrayPalavra.toString().replaceAll(",", ""));

  }

  function respostaCorreta(palavra) {
    if (palavra === resposta){
      parabens();
    }
  }

  function parabens() {
    setArrayRenderizado(resposta);
    setAcertou("acertou");
    setdesabilitado(true);
  }

  return (
    <Container >
      <Jogo
        img={imagens}
        contagemErro={contagemErro}
        sortearPalavra={sortearPalavra}
        arrayRenderizado={arrayRenderizado}
        resposta={resposta}
        acertou={acertou}
      />

      <Letras 
        alfabeto={alfabeto}
        desabilitado={desabilitado}
        letraSelecionada={letraSelecionada}
        setLetrasSelecionadas={setLetrasSelecionadas}
        letrasSelecionadas={letrasSelecionadas}
      />

      <Chute
        resposta={resposta} 
        desabilitado={desabilitado}
        parabens={parabens}
        perdeu={perdeu}
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