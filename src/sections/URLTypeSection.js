import styled from "styled-components";
import SwitchButton from "../components/SwitchButton";

const InputType = styled.div`
  display: flex;
  width: 30vw;
  max-width: 300px;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px auto;
`
function URLTypeSection() {
  return (
    <InputType>
        <span>
            URL
        </span>

        <SwitchButton />

        <span>
        QRCode
        </span>
    </InputType>
  );
}

export default URLTypeSection;