import styled from "styled-components";


const SwitchButtonStyle = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;

  & input:checked + .slider {
    background-color: #4E434E;
  }
  & input:focus + .slider {
    box-shadow: 0 0 1px #4E434E;
  }
  & input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
    border-radius: 50%;
  }
  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`
const SliderButton = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #4E434E;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
  
  &:before{
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: #EBEBEA;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }
`
function SwitchButton() {
  return (
    <SwitchButtonStyle>
        <input type="checkbox" disabled/>
        <SliderButton/>
    </SwitchButtonStyle>
  );
}

export default SwitchButton;
