import styled from "styled-components";
import React from "react";

const RadioStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: ${props => props.size}px;
	width: ${props => props.size}px;
	position: relative;
	cursor: pointer;
	
	& > span {
		position: absolute;
		border: 2px solid ${props => props.color};
		width: inherit;
		height: inherit;
		border-color: ${props => props.color};
		border-radius: 50%;
		transition: 0.15s;
		box-sizing: border-box;
	}
	
	&::before {
		content: '';
		position: absolute;
		background: ${props => props.color};
		border-radius: 50%;
		transition: 0.15s;
		height: 0;
		width: 0;
		${props => props.active && `
			height: ${props.size * 0.50}px;
			width: ${props.size * 0.50}px;
		`};
	}
`

export const Radio = props => (
	<RadioStyle color={props.color} size={24} onClick={props.onClick} active={props.active}>
		<span />
	</RadioStyle>
)