import styled from "styled-components";

export default function Letras(props){
    const alfabeto = props.alfabeto;
    

    return(
        <LetrasAlfabeto>
            {alfabeto.map((alfabeto) => (
                
                    <BotaoAlfabeto>
                        {alfabeto.toUpperCase()}
                    </BotaoAlfabeto>
                
            )

            )}
        </LetrasAlfabeto>
    );
}

const BotaoAlfabeto = styled.button`
    width: 40px;
    height: 40px;
    margin-right: 12px;
    margin-bottom: 15px;
    border-radius: 3px;
    border: 1px solid #7AA7C7;
    color: #3C76A1;
    background-color: #E1ECF4;
    font-size: 16px; 
`

const LetrasAlfabeto = styled.div`
    width: 685px;
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    bottom: 152px;
    left: 211px;    
`