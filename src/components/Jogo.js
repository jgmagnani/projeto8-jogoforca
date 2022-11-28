import styled from "styled-components"
import forca0 from "../assets/forca0.png"
// import forca1 from "../assets/forca1.png"
// import forca2 from "../assets/forca2.png"
// import forca3 from "../assets/forca3.png"
// import forca4 from "../assets/forca4.png"
// import forca5 from "../assets/forca5.png"
// import forca6 from "../assets/forca6.png"

export default function Jogo(){
   
    return (
        <>
          <ImagemForca src={forca0}/>
          <BotaoEscolherPalavra>Escolher Palavra</BotaoEscolherPalavra>
        </>
    );
}

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
;

`