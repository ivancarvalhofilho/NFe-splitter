import styled from 'styled-components'
import SwitchButton from "../components/SwitchButton";
import URLTypeSection from "../sections/URLTypeSection";
import InstructionsSection from "../sections/InstructionsSection";
import SubmitURLInputSection from "../sections/SubmitURLInputSection";
import React, {useEffect, useState} from "react";
import update from 'immutability-helper';
import DividersConfigurationSection from "../sections/DividersConfigurationSection";
import FoodTableSection from "../sections/FoodTableSection";
import DividersCashinSection from "../sections/DividersCashinSection";
import ResultSection from "../sections/ResultSection";
import DevSection from "../sections/DevSection";


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

export const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${props => props.color};
  ${props => props.small && `
      width: 15px;
      height: 15px;
  `}
`

export const RSPrefix = styled.div`
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
  height: 40px	;
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
	purple: '#62259e',
}

function Main() {
	// const [mock, setMock] = useState([
	// 	{dividers: [], nome: "FILE PEITO FGO SADIA 1kg PFFZP", qtd: "1.0000", unidade: "UN", valor: "R$ 12,99"},
	// 	{dividers: [], nome: "CERVEJA PETRA 350ML PURO MALTE LATA", qtd: "1.0000", unidade: "CX", valor: "R$ 31,08"},
	// 	{dividers: [], nome: "MORTADELA PERDIGAO kg OURO DEF", qtd: "0.7020", unidade: "KG", valor: "R$ 11,86"},
	// 	{dividers: [], nome: "BATATA PRINGLES 112GR WAVY PIMENTA", qtd: "1.0000", unidade: "UN", valor: "R$ 14,90"},
	// 	{dividers: [], nome: "BATATA PRINGLES 120GR QUEIJO", qtd: "1.0000", unidade: "UN", valor: "R$ 7,99"},
	// 	{dividers: [], nome: "V.CHIL GATO NEGRO 750 MLTTO SC MERL", qtd: "1.0000", unidade: "GF", valor: "R$ 39,90"}
	// ])
	const [foods, setFoods] = useState([])

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
			color: colorsNames[0],
			payer: true,
			valueToPay: 0,
		},
		{
			name: '',
			placeholder: 'nicolas',
			color: colorsNames[1],
			payer: false,
			valueToPay: 0,
		}
	])

	function updatePayer(index) {
		const clearedPayers = update(dividers, {
				$set: dividers.map((div) =>
					update(div, {
						payer: {$set: false}
					})
				)
			}
		)
		setDividers(update(clearedPayers, {
			[index]: {
				payer: {$set: true}
			}
		}))
	}

	useEffect(() => {
		let newDividers = dividers
		dividers.forEach((div, index) => {
			let totalToPay = 0
			foods.filter((food) => food.dividers.includes(div.color)).forEach(food => {
				let foodPrice = food.valor.replaceAll(/\./gm,'').replaceAll(/,/gm,'.').replaceAll('R$ ','')
				totalToPay += Number(foodPrice) / food.dividers.length
			})
			newDividers = update(newDividers, {
				[index]: {
					valueToPay: {$set: totalToPay}
				}
			})
		})
		setDividers(newDividers)
	},[foods])

	return (
		<MainStyle>
			<Advertising>Advertising</Advertising>

			{/*<InstructionsSection/>*/}

			{/*<URLTypeSection/>*/}

			<SubmitURLInputSection
				updateFood={setFoods}/>

			<DividersConfigurationSection
				dividers={dividers}
				setDividers={setDividers}
				colorsNames={colorsNames}
				setColorsNames={setColorsNames}
				colorsHexa={colorsHexa}
				foods={foods}
				updateFood={setFoods}
			/>
			{!!foods.length && (
				<>
					<FoodTableSection
						dividers={dividers}
						colorsHexa={colorsHexa}
						foods={foods}
						updateFood={setFoods}
					/>
					{dividers.length > 1 &&
					<DividersCashinSection
						updatePayer={updatePayer}
						dividersWithName={dividers}
						colorsHexa={colorsHexa}
					/>}

					{dividers.length > 1 &&
					<ResultSection
						updatePayer={updatePayer}
						dividersWithName={dividers}
						colorsHexa={colorsHexa}
					/>}
				</>
			)}

			<DevSection />

		</MainStyle>
	);
}

export default Main;
