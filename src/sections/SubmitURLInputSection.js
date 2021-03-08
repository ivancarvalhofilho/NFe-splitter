import styled from "styled-components";

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

function SubmitURLInputSection() {
    const placeholder = "Ex: https://nfce.fazenda.mg.gov.br/portalnfce/sistema/qrcode.xhtml?p=31200922069520001165651060000256509000256514|2|1|1|3D10506C54D840F9AA3D81EC7E30D993F20E9532";
    return (
        <SubmitURLInputStyle>
            <div id="formGetNFe">
                <input
                    type="text"
                    name="NFe-URL"
                    id="NFeURL"
                    placeholder={placeholder}/>
                <GoInput type="submit" className="go-input">Buscar</GoInput>
            </div>
        </SubmitURLInputStyle>
    );
}

export default SubmitURLInputSection;