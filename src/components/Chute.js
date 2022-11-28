import styled from "styled-components";

export default function Chute(){
    return(
        <DivChute>
            <input placeholder=""/>
            <button>Chutar</button>
        </DivChute>
    );
}


const DivChute = styled.div`
    position: absolute;
    right: 170px;
    bottom: 56px;

    input{
        height: 36px;
        width: 353px;    
        border-radius: 3px;
        margin-right: 15px;
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
    }
    
`