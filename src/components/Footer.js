import React from 'react'
import styled from 'styled-components/macro'

const StyledFooter = styled.footer`
	background-color: ${({ theme: { colors } }) => colors.pink};
	color: ${({ theme: { colors } }) => colors.white};
	padding: 40px;
	text-align: center;
	width: 100%;
`

const Footer = () => (
	<StyledFooter>
		© {new Date().getFullYear()}, Built with
		{` `}
		<a href="https://www.gatsbyjs.org">Gatsby</a>
	</StyledFooter>
)

export default Footer
