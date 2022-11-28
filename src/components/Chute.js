import { useState } from "react";
import styled from "styled-components";

export default function Chute(props){
    const {resposta, desabilitado, parabens, perdeu} = props;
    const {chute, setChute} = useState("");

    function tentativa(){
        let impute = chute.toLowerCase()
        if (impute === resposta){
            parabens()
        } else{
            perdeu()
        }
        setChute("")
    }


    return(
        <DivChute>
            <h2>Já sei a palavra!</h2>
            <input 
                disabled={desabilitado}                
                className={desabilitado ? "desabilitado" : ""}
                onChange={(e)=>setChute(e.target.value)}
                value={chute}
            />
            <button className={desabilitado ? "desabilitado" : ""} onClick={tentativa}>
                Chutar
            </button>
        </DivChute>
    );
}


const DivChute = styled.div`
    position: absolute;
    align-items: center;
    display: flex;
    right: 170px;
    bottom: 56px;

    h2{
        font-size: 20px;        
    }

    input{
        height: 36px;
        width: 353px;    
        border-radius: 3px;
        margin-right: 15px;
        margin-left: 20px;
        border: 1px solid #CCCCCC;
        box-shadow: 2px 2px 5px 0px #00000040;

    }

    button{
        height: 40px;
        width: 100px;    
        border-radius: 3px;
        background-color: #E1ECF4;
        border: 1px solid #7AA7C7;
        color: #3C76A1;
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