import styled from 'styled-components'
import SwitchButton from "../components/SwitchButton";
import URLTypeSection from "../sections/URLTypeSection";
import InstructionsSection from "../sections/InstructionsSection";
import SubmitURLInputSection from "../sections/SubmitURLInputSection";
import {useState} from "react";
import update from 'immutability-helper';
import DividersConfigurationSection from "../sections/DividersConfigurationSection";


const MainStyle = styled.div`
  background: #352C38;
  font-family: 'Roboto', sans-serif;
  color: #EBEBEA;
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 80vw;
  margin: auto;
  font-size: 22px;
  min-height: 100vh;

  & * {
    font-family: 'Roboto', sans-serif;
  }

  & > * {
    margin: 10px auto;
  }
`

const Spliters = styled.div`
  width: 200px;
  padding-left: 30px !important;
`

const CheckboxColumn = styled.div`
  display: flex;
  padding-left: 30px;
`

const QtdColumn = styled.div`
  text-align: end;
`
const MyTable = styled.div`
  transition: 1s;
  margin-top: 50px;

  & th {
    padding: 0 10px;
  }

  & td {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  & table {
    border-collapse: collapse;
  }

  & thead tr:first-child th {
    border-collapse: collapse;
    border-bottom: 1px solid white !important;
  }
`

export const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${props => props.color};
`
const Small = styled.div`
  width: 15px;
  height: 15px;
`

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
const RSPrefix = styled.div`
  position: relative;

  &::after {
    content: 'R$';
    position: absolute;
    display: flex;
    left: 15px;
    justify-content: center;
    align-items: center;
    top: 0;
    height: 100%;
    color: gray;
    font-size: 18px;
  }
`

const DividersPayout = styled.div`
  display: flex;
  justify-content: space-around;
`

const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  font-size: 14px;

  & a {
    color: white;
    margin-left: 4px;
  }
`

const Advertising = styled.div`
  background: #EBEBEA;
  width: 300px;
  height: 40px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
`

const colorsHexa = {
    blue: '#00ACE0',
    red: '#E54B4B',
    orange: '#F99F39',
    green: '#3D7068',
    purple: '#290052',
}

function Main() {
    const [colorsNames, setColorsNames] = useState([
        'blue',
        'red',
        'orange',
        'green',
        'purple',
    ])
    const [dividers, setDividers] = useState([
        {
            name: '',
            placeholder: 'ivan',
            color: colorsNames[0]
        },
        {
            name: '',
            placeholder: 'nicolas',
            color: colorsNames[1]
        }
    ])

    return (
        <MainStyle>
            <Advertising>Advertising</Advertising>

            <InstructionsSection/>

            <URLTypeSection/>

            <SubmitURLInputSection/>

            <DividersConfigurationSection
                dividers={dividers}
                setDividers={setDividers}
                colorsNames={colorsNames}
                setColorsNames={setColorsNames}
                colorsHexa={colorsHexa}
            />

        </MainStyle>
    );
}

export default Main;
