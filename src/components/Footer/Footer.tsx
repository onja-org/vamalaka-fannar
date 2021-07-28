import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import { fonts } from '../../globalStyles/fonts'

export const FooterFonts = createGlobalStyle`
	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
			monospace;
	}
`

const DetailsStyles = styled.details`
  ${fonts}
  font-family: 'Futura Std', Arial, Helvetica, sans-serif;
  text-align: start;
  background-color: #041d42;
  color: #ffffff;
  padding: 21px;
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
    pointer-events: none;
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
      pointer-events: all;
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
  footerLink: {
    summary: string
    links: { linkContent: string; linkUrl: string }[]
    id: string
  }
}

export const LinkSection: React.FC<SectionLinkProps> = ({ footerLink }) => {
  return (
    <>
      <FooterFonts />
      {footerLink && (
        <DetailsStyles key={footerLink.id} open>
          <summary>{footerLink.summary}</summary>
          {footerLink.links.map((item, index) => (
            <Link to={`/${item.linkUrl}`} key={index}>
              {item.linkContent}
            </Link>
          ))}
        </DetailsStyles>
      )}
    </>
  )
}
