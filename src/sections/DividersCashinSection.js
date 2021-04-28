import styled from "styled-components";
import update from "immutability-helper";
import {Circle, RSPrefix} from "../screens/Main";
import {Radio} from "../components/Radio";
import BigRadio from "../components/Radio";

const DividersCashinParent = styled.div`
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
const DividersCashin = styled.div`
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

function DividersCashinSection(props) {
    return <DividersCashinParent>
        <span>Quem pagou a conta?</span>

        <div>
            {props.dividersWithName.map((divider, index) => <DividersCashin>
                <div>
                    <Circle small color={props.colorsHexa[divider.color]}/>
                    <span id={`cashin-span-${divider.color}`}>{divider.name}</span>
                </div>
                <div>
                    <Radio color={props.colorsHexa[divider.color]} onClick={() => props.updatePayer(index)} active={divider.payer}/>
                </div>
            </DividersCashin>)}
        </div>

    </DividersCashinParent>
}

export default DividersCashinSection;