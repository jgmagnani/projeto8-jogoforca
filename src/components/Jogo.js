import styled from "styled-components"


export default function Jogo(props){
const {imagem, sortearPalavra, arrayRenderizado} = props;
   
    return (
        <>
          <ImagemForca src={imagem}/>
          <BotaoEscolherPalavra onClick={sortearPalavra}>Escolher Palavra</BotaoEscolherPalavra>
          <PalavraRenderiazada>
            {arrayRenderizado}
          </PalavraRenderiazada>
        </>
    );
}

const ImagemForca = styled.img`
    width: 400px;
    position: absolute;
    left: 38px;
    top: 59px;
`;

const BotaoEscolherPalavra = styled.button`
    height: 60px;
    width: 200px;    
    border-radius: 8px;
    border-style: none;
    background-color: #27AE60;
    color: white;
    position: absolute;
    right: 53px;
    top: 89px;
    font-size: 20px;
    :hover{
        cursor: pointer;
        opacity: 0.9;
    }
`;

const PalavraRenderiazada = styled.div`
    font-size: 50px;
    position: absolute;
    right: 61px;
    bottom: 340px;
`