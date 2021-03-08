import styled from "styled-components";

const InstructionsStyle = styled.div`
  min-height: 10px;
  width: 100%;
  max-width: 700px;
  margin: 42px auto !important;
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
function InstructionsSection() {
  return (
      <InstructionsStyle>
          <InstructionsInner>
              <span> Instruções v </span>
          </InstructionsInner>
      </InstructionsStyle>
  );
}

export default InstructionsSection;