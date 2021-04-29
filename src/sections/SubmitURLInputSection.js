import styled from "styled-components";
import {useState} from "react";

const SubmitURLInputStyle = styled.div`
  width: 30vw;
  display: flex;
  justify-content: center;

  & > div {
    position: relative;
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

function SubmitURLInputSection(props) {
	const [url, setUrl] = useState('');
	const [error, setError] = useState('');

	const placeholder = "Ex: https://nfce.fazenda.mg.gov.br/portalnfce/sistema/qrcode.xhtml?p=31200922069520001165651060000256509000256514|2|1|1|3D10506C54D840F9AA3D81EC7E30D993F20E9532";
	function isValidHttpUrl(string) {
		let url;

		try {
			url = new URL(string);
		} catch (_) {
			return false;
		}

		return url.protocol === "http:" || url.protocol === "https:";
	}
	return (
		<>
			<SubmitURLInputStyle>
				<div id="formGetNFe">
					<input
						type="text"
						name="NFe-URL"
						id="NFeURL"
						onChange={(e) => setUrl(e.target.value)}
						value={url}
						placeholder={placeholder}
					/>
					<GoInput onClick={() => {
						setError('Opa, carregando...')

						let myUrl = url
						if (!url) {
							setError('Deixou o campo em branco?')
							return;
						}
						if (!isValidHttpUrl(url)) {
							setError('Parece que isso não é uma URL válida')
							return;
						}
						if (!myUrl.includes("nfce.fazenda.mg.gov.br/portalnfce/sistema")) {
							setError('Só aceitamos notas fiscais de Minas Gerais :/\nSua URL precisa conter o site: nfce.fazenda.mg.gov.br')
							return;
						}

						myUrl = myUrl.replace('https', 'http');

						myUrl = 'https://misty-dream-bebe.ivanzinhocarvalho.workers.dev/?' + encodeURIComponent(myUrl);

						fetch(myUrl)
							.then(function (res) {
								return res.text()
							})
							.then(function (data) {
								var parser = new DOMParser();
								var doc = parser.parseFromString(data, "text/html");
								var json = doc.querySelectorAll("#myTable tr")
								if (!json.length) {
									setError('Ocorreu um erro com sua requisição para o servidor da Fazenda :(')
									return;
								}
								const newFoods = Object.keys(json).map(i => ({
									nome: json[i].querySelectorAll("td")[0].innerText.split('\n')[0].replace(" .", ""),
									qtd: json[i].querySelectorAll("td")[1].innerText.split(":")[1].trim(),
									unidade: json[i].querySelectorAll("td")[2].innerText.split(":")[1].trim(),
									valor: json[i].querySelectorAll("td")[3].innerText.split(":")[1].trim(),
									dividers: []
								}))
								props.updateFood(newFoods)
								setError('')
							})
							.catch((error) => {
								setError('Xi, parece que estouramos o limite de uso deste site por hoje, que tal tentar amanhã?\n(Isso aconteceu porque estamos usando um servidor grátis com limite de consultas por dia)')
								console.log(error)
							});
					}}>Buscar</GoInput>
				</div>

			</SubmitURLInputStyle>
			{error && <div>
				{error}
			</div>}
		</>
	);
}

export default SubmitURLInputSection;