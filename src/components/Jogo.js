import styled from "styled-components"


export default function Jogo(props){
const {img, contagemErro, sortearPalavra, arrayRenderizado, resposta, acertou} = props;

   
    return (
        <Forca>
          <ImagemForca src={img[contagemErro]} alt="" data-test="game-image"/> 
          <BotaoEscolherPalavra onClick={sortearPalavra} data-test="choose-word">Escolher Palavra</BotaoEscolherPalavra>
          <PalavraRenderiazada data-answer={resposta} data-test="word" className={!acertou ? "" : "acertou"}>
            {arrayRenderizado}
          </PalavraRenderiazada>
        </Forca>        
    );
}

const Forca = styled.div`    
    .acertou{
        color:#27ae60;
    }
    
`;

const ImagemForca = styled.img`
    width: 400px;
    position: absolute;
    left: 38px;
    top: 59px;
`

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