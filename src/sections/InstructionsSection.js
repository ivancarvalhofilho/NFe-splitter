import styled from "styled-components";

const InstructionsStyle = styled.div`
  min-height: 10px;
  width: 100%;
  max-width: 700px;
  margin: 42px auto;
`
function Instructions() {
  return (
      <InstructionsStyle>
          <div className="instructions-inner">
              <span> Instruções v </span>
          </div>
      </InstructionsStyle>
  );
}

export default Instructions;