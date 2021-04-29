import styled from "styled-components";
import update from "immutability-helper";
import {Circle, RSPrefix} from "../screens/Main";
import {Radio} from "../components/Radio";
import BigRadio from "../components/Radio";

const ResultParent = styled.div`
  & > span {
    display: flex;
    justify-content: center;
    font-size: 26px;
    font-weight: bold;
    border-bottom: 1px solid white;
    width: 80%;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    min-width: 25vw;
  }
`
const Result = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px 0;

  & span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & input::-webkit-outer-spin-button,
  & input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  & > div:first-child {
    display: flex;
    align-items: center;
    width: 200px;
    justify-content: flex-end;
    flex: 1;
    & > span {
      margin-left: 10px;
    }
  }
  & > div:last-child {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
    margin-left: 10px;
  }
`

function ResultSection(props) {
    return <ResultParent>
        <span>Resultado da divisão</span>

        <div>
            {props.dividersWithName.map((divider, index) => <Result key={'Result'+index}>
                <div>
                    <Circle small color={props.colorsHexa[divider.color]}/>
                    <span id={`cashin-span-${divider.color}`}>{divider.name || 'Sem nome'}</span>
                </div>
                {divider.payer && (<div> Pagou a conta </div>)}
                {!divider.payer && (<div style={{fontWeight: 600}}>R$ {divider.valueToPay && divider.valueToPay.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                }) || '0'} </div>)}
            </Result>)}
        </div>

    </ResultParent>
}

export default ResultSection;