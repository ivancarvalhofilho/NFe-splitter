import styled from "styled-components";
import update from "immutability-helper";
import {Circle, RSPrefix} from "../screens/Main";

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
    max-width: calc(100% - 30px);
    margin-left: 10px;
  }

  & input::-webkit-outer-spin-button,
  & input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  & > div:first-child {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 200px;
  }
`
function DividersCashinSection(props) {
    return <DividersCashinParent>
        <span>Quem pagou a conta?</span>

        <div>
            {props.dividersWithName.map(divider => <DividersCashin>
                <div>
                    <Circle small color={props.colorsHexa[divider.color]}/>
                    <span id={`cashin-span-${divider.color}`}>{divider.name}</span>
                </div>
                <RSPrefix>
                    <input type="number" id={`divider-${divider.color}`}
                           onBlur={`changeDividerCashout('${divider.color}', this.value)`}/>
                </RSPrefix>
            </DividersCashin>)}
        </div>

    </DividersCashinParent>
}

export default DividersCashinSection;