import styled from "styled-components";
import SwitchButton from "../components/SwitchButton";



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

const Checkbox = styled.div`
  background-color: #fff;
  display: inline-block;
  height: 50px;
  margin: 0 0.25em;
  width: 50px;
  border-radius: 5px;
  transform: scale(0.65);
  background: ${props => props.color};
  & label {
    display: block;
    height: 50px;
    position: relative;
    width: 50px;
    border-radius: 5px;
    //background: #00ACE0;
    background: ${props => props.color};
  }
  & label:after {
    transform: scaleX(-1) rotate(135deg);
    transform-origin: left top;
    border-right: 4px solid #ffffff4d;
    border-top: 4px solid #ffffff4d;
    content: "";
    display: block;
    height: 20px;
    left: 14px;
    position: absolute;
    top: 26px;
    width: 10px;
  }
  &  label:hover:after {
    border-color: white;
  }
  & input {
    display: none;
  }
  & input:checked + label:after {
    animation: check 0.8s;
    border-color: white;
  }
`

const mock = [
    {nome: "FILE PEITO FGO SADIA 1kg PFFZP", qtd: "1.0000", unidade: "UN", valor: "R$ 12,99"},
    {nome: "CERVEJA PETRA 350ML PURO MALTE LATA", qtd: "1.0000", unidade: "CX", valor: "R$ 31,08"},
    {nome: "MORTADELA PERDIGAO kg OURO DEF", qtd: "0.7020", unidade: "KG", valor: "R$ 11,86"},
    {nome: "BATATA PRINGLES 112GR WAVY PIMENTA", qtd: "1.0000", unidade: "UN", valor: "R$ 14,90"},
    {nome: "BATATA PRINGLES 120GR QUEIJO", qtd: "1.0000", unidade: "UN", valor: "R$ 7,99"},
    {nome: "V.CHIL GATO NEGRO 750 MLTTO SC MERL", qtd: "1.0000", unidade: "GF", valor: "R$ 39,90"}
]

function FoodTableSection(props) {
  return (
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
          {mock.map((item, rowNumber) => <tr>
              <td>{item.nome}</td>
              <QtdColumn>{item.qtd}</QtdColumn>
              <td>{item.unidade}</td>
              <td>{item.valor}</td>
              <CheckboxColumn>
                  {props.dividers.map (divider =>
                      <Checkbox color={props.colorsHexa[divider.color]}>
                          <input type="checkbox" name={`check-${divider.color}-${rowNumber}`} id={`check-${divider.color}-${rowNumber}`}/>
                          <label htmlFor={`check-${divider.color}-${rowNumber}`}/>
                      </Checkbox>
                  )}
              </CheckboxColumn>
          </tr>)}
          </tbody>
      </MyTable>
  );
}

export default FoodTableSection;