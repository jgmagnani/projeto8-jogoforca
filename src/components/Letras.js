import styled from "styled-components";

export default function Letras(props) {
    const {alfabeto, desabilitado, letraSelecionada, setLetrasSelecionadas, letrasSelecionadas} = props;

    function clicado(letra) {
        if (!letrasSelecionadas.includes(letra)) {
            setLetrasSelecionadas([...letrasSelecionadas, letra]);
            letraSelecionada(letra)
          }
    }

    return (
        <LetrasAlfabeto>
            {alfabeto.map((alfabeto) => (
                <button disabled={desabilitado} className={desabilitado ? "desabilitado" : ""} onClick={() => clicado(alfabeto)}>
                    {alfabeto.toUpperCase()}
                </button>
            )

            )}
        </LetrasAlfabeto>
    );
}


const LetrasAlfabeto = styled.div`
    width: 685px;
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    bottom: 152px;
    left: 211px;
    button{
        width: 40px;
        height: 40px;
        margin-right: 12px;
        margin-bottom: 15px;
        border-radius: 3px;
        border: 1px solid #7AA7C7;
        color: #3C76A1;
        background-color: #E1ECF4;
        font-size: 16px;
        :hover{
            cursor: pointer;
            opacity: 0.9;
        }
        
    }
    .desabilitado{
        background: #9FAAB5;
        :hover{
            cursor: default;
            opacity: 1;
        }
    }
`

