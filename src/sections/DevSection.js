import styled from "styled-components";

const DevStyle = styled.div`
    .footer a {
        color: white;
        margin-left: 4px;
    }
    .footer {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 30px;
        font-size: 14px;
    }
`

function DevSection() {
	return <DevStyle>

		<div className="footer">
			Feito com ❤️ por <a href="https://ivancarvalho.dev"> ivancarvalho.dev</a>
		</div>

	</DevStyle>
}

export default DevSection;