import styled from 'styled-components'
import SwitchButton from "../components/SwitchButton";
import URLTypeSection from "../sections/URLTypeSection";
import Instructions from "../sections/InstructionsSection";

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
    font-family : 'Roboto', sans-serif;
  }
  & > * {
    margin: 10px auto;
  }
`


const InstructionsInner = styled.div`
  height: 0px;
  width: 80%;
  margin: auto;
  border: 1px solid #EBEBEA;
  border-radius: 4px;
  position: relative;
  
  & > span {
    padding: 10px;
    background: #352C38;
    position: absolute;
    left: 30px;
    top: -24px;
    font-size: 24px;
  }
`

const GoInput = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
  border-radius: 3em;
  border: 1px solid transparent;
  background: #4E434E;
  color: #EBEBEA;
  padding: 3px 10px;
  font-size: 20px;
  cursor: pointer;
`

const MyInput = styled.div`
  width: 30vw;
  display: flex;
  justify-content: center;
  & > form {
    position: relative;
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

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`
const Small = styled.div`
  width: 15px;
  height: 15px;
`

const DividersHeader = styled.div`
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
const DividersInputParent = styled.div`
  display: inline-flex;
  align-items: center;
  width: 100%;
  max-width: 375px;
  margin: auto;
  margin-bottom: 15px;
  position: relative;
  justify-content: center;
  
  & > input {
    width: 200px;
    margin-right: 20px;
  }
`


const DividersSetup = styled.div`
  display: flex;
  flex-flow: column;
`

const AddNewDivider = styled.div`
  background: transparent;
  border-radius: 3em;
  height: 25px;
  border: 2px solid white;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  padding: 10px 20px;
  cursor: pointer;
`

const RemoveSpan = styled.span`
  position: absolute;
  right: 55px;
  top: 5px;
  border-radius: 3em;
  border: 1px solid transparent;
  background: #4E434E;
  color: #EBEBEA;
  padding: 3px 10px;
  font-size: 20px;
  cursor: pointer;
  
  &:after{
    content: 'Remover';
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


function Main() {
  return (
    <MainStyle>
        <Advertising>Advertising</Advertising>

        <Instructions />

        <URLTypeSection/>

    </MainStyle>
  );
}

export default Main;
