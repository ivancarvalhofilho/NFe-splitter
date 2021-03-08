import styled from "styled-components";
import update from "immutability-helper";
import {Circle} from "../screens/Main";

const DividersHeader = styled.span`
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

const AddNewDivider = styled.div`
  background: transparent;
  border-radius: 3em;
  height: 25px;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  padding: 10px 20px;
  cursor: pointer;
`

const DividersSetup = styled.div`
  display: flex;
  flex-flow: column;
`

const Remove = styled.div`
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

  &:after {
    content: 'Remover';
  }
`

function DividersConfigurationSection(props) {
    return (
        <>
            <DividersSetup>
                <DividersHeader>Divisores</DividersHeader>
                {props.dividers.map((divider, index) => (
                    <DividersInputParent>
                        <input
                            value={divider.name}
                            placeholder={divider.placeholder && `Ex: ${divider.placeholder}`}
                            onChange={(event) => {
                                props.setDividers(update(props.dividers, {
                                    [index]: {
                                        name: {$set: event.target.value}
                                    }
                                }))
                            }}
                        />
                        <Circle color={props.colorsHexa[divider.color]}/>
                        {index > 1 && <Remove onClick={() => {
                            props.setDividers(update(props.dividers, {
                                $splice: [[index, 1]]
                            }))
                            props.setColorsNames(update(props.colorsNames, {
                                $splice: [[index, 1]],
                                $push: [
                                    [props.colorsNames[index]]
                                ]
                            }))
                        }}/>}
                    </DividersInputParent>
                ))}
            </DividersSetup>

            {props.dividers.length < 5 && <AddNewDivider
                onClick={() => {
                    props.setDividers(update(props.dividers, {
                        $push: [{
                            name: '',
                            color: [props.colorsNames[props.dividers.length]]
                        }]
                    }))
                }}>
                Adicionar mais uma pessoa
            </AddNewDivider>}
        </>
    );
}

export default DividersConfigurationSection;