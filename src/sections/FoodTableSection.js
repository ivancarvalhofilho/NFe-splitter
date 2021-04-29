import styled from "styled-components";
import SwitchButton from "../components/SwitchButton";
import update from "immutability-helper";

const MyTable = styled.table`
  transition: 1s;
  margin-top: 50px;

  & th {
    padding: 0 10px;
  }

  & td {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  & tr td:nth-child(2) {
    font-size: 16px;
  }
  & tr td:nth-child(3) {
    font-size: 12px;
  }

  & table {
    border-collapse: collapse;
  }

  & thead tr:first-child th {
    border-collapse: collapse;
    border-bottom: 1px solid white !important;
  }
`

const QtdColumn = styled.td`
  text-align: end;
`

const CheckboxColumn = styled.td`
  display: flex;
  padding-left: 30px;
`

const Spliters = styled.th`
  width: 200px;
  padding-left: 30px !important;
`

const Checkbox = styled.label`
  display: inline-block;
  height: 30px;
  width: 30px;
  margin: 0 0.25em;
  border-radius: 5px;
  background: ${props => props.color};
  border: 4px solid ${props => props.color};
  cursor: pointer;
  
  & label {
    display: block;
    height: 30px;
    width: 30px;
    position: relative;
    border-radius: 5px;
    background: white;
    transition: 0.4s;
    cursor: pointer;
  }
  
  & label:after {
    transform: scaleX(-1) rotate(135deg);
    transform-origin: left top;
    border-right: 4px solid #ffffff4d;
    border-top: 4px solid #ffffff4d;
    content: "";
    display: block;
    height: 20px;
    left: 2px;
    position: absolute;
    top: 16px;
    width: 10px;
    border-color: ${props => props.color+"22"};
    transition: 0.2s;
  }
  & label:hover:after {
    border-color: ${props => props.color};
  }
  & input {
    display: none;
  }
  & input:checked + label {
    background: ${props => props.color};
  }
  & input:checked + label:after {
    animation: check 0.8s;
    border-color: white;
  }
`


function FoodTableSection(props) {
    function clearItemCost(item) {
        let value = /[\d,]+/g.exec(item.valor)[0]
        value = value.replace(',', '.')
        return Number(value);
    }

    return (
        <>
            <MyTable>
                <thead>
                <tr>
                    <th>Produto</th>
                    <th>Qtd</th>
                    <th>UN</th>
                    <th>Valor</th>
                    <Spliters>Dividindo</Spliters>
                </tr>
                </thead>
                <tbody>
                {props.foods.map((item, rowNumber) => <tr>
                    <td>{item.nome}</td>
                    <QtdColumn>{item.qtd}</QtdColumn>
                    <td>{item.unidade}</td>
                    <td>{item.valor}</td>
                    <CheckboxColumn>
                        {props.dividers.map (divider =>
                            <Checkbox color={props.colorsHexa[divider.color]} htmlFor={`check-${divider.color}-${rowNumber}`}>
                                <input
                                  onClick={(e) => {
                                      if(props.foods[rowNumber].dividers.includes(divider.color)){
                                          // remove
                                          props.updateFood(update(props.foods, {
                                              [rowNumber]: {
                                                  dividers: {$splice: [[props.foods[rowNumber].dividers.indexOf(divider.color),1]]}
                                              }
                                          }))
                                      } else {
                                          // add
                                          props.updateFood(update(props.foods, {
                                              [rowNumber]: {
                                                  dividers: {$push: [divider.color]}
                                              }
                                          }))
                                      }

                                  }}
                                  type="checkbox" name={`check-${divider.color}-${rowNumber}`} id={`check-${divider.color}-${rowNumber}`} checked={props.foods[rowNumber].dividers.includes(divider.color)}/>
                                <label htmlFor={`check-${divider.color}-${rowNumber}`}/>
                            </Checkbox>
                        )}
                    </CheckboxColumn>
                </tr>)}
                </tbody>
            </MyTable>

            <div className="nfe-total">
                Total da nota: <b>R$ {props.foods.map(item => clearItemCost(item)).reduce((previousValue, currentValue) => (previousValue + currentValue)).toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            })}</b>
            </div>
        </>
    );
}

export default FoodTableSection;