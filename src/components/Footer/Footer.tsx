import React from 'react'
import styled from 'styled-components'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import FuturaStd from '../../fonts/FuturaStdMedium.woff'

export const FooterFonts =  createGlobalStyle`
	@font-face {
		font-family: 'Futura Std';
		src: local('Futura Std'), local('FuturaStd'),
		url(${FuturaStd}) format('woff');
		font-weight: 400;
		font-style: normal;
	}

	details {
		font-family: "Futura Std";
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
			monospace;
	}
`

const DetailsStyles = styled.details`
	text-align: start;
	background-color: #041d42;
	color: #ffffff;
	padding: 21px;
	font-family: 'Futura Std';
	a {
		display: block;
		color: #ffffff;
		font-style: normal;
		font-weight: normal;
		font-size: 24px;
		line-height: 29px;
		text-decoration-line: underline;
		margin: 0 0 12px 0;
		text-transform: capitalize;
	}

	summary {
		list-style: none;
		font-style: normal;
		font-weight: normal;
		font-size: 30px;
		line-height: 36px;
		margin: 0 0 23px 0;
		pointer-events : none;
	}
	summary::-webkit-details-marker {
		display: none;
	}

	@media (max-width: 900px) {
		text-align: start;

		a {
				font-size: 18px;
				line-height: 22px;
		}

		summary {
			font-size: 25px;
			line-height: 30px;
			pointer-events : all;
			cursor: pointer;
		}

		summary:focus {
			outline: none;
		}

		summary::after {
			content: '';
			display: inline-block;
			width: 0px;
			height: 0px;
			border-top: 14px solid white;
			border-right: 11px solid transparent;
			border-bottom: 11px solid transparent;
			border-left: 11px solid transparent;
			transition: 0.2s;
			transform: translateY(50%);
			margin: 0 0 0 10px;
		}

		&[open] > summary::after {
			transform: rotate(180deg);
		}
	}
`

export interface SectionLinkProps {
	text: string[]
}

export const LinkSection: React.FC<SectionLinkProps> = ({ text }) => {
	return (
		<Router>
			<FooterFonts />
			<DetailsStyles open>
				<summary>Madamada</summary>
				{text.map((item, index) => (
					<Link to={`/${item}`} key={index}>
						{item}
					</Link>
				))}
			</DetailsStyles>
		</Router>
	)
}
