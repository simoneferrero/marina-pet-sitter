import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components/macro'

import Layout from '../components/Layout'
import SEO from '../components/Seo'

const StyledPage = styled.div`
	align-items: center;
	color: ${({ theme: { colors } }) => colors.darkBlue};
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: center;
	margin: 0 auto;
	max-width: ${({ theme: { maxWidth } }) => maxWidth}px;
	padding: 40px;
	padding-top: ${({ theme: { headerHeight } }) => headerHeight + 40}px;

	a {
		color: ${({ theme: { colors } }) => colors.darkBlue};
	}
`
const StyledImg = styled(Img)`
	margin: 40px 0;
`

const NotFoundPage = ({
	data: {
		file: {
			childImageSharp: { fixed },
		},
	},
}) => (
	<Layout>
		<SEO title="Pagina non trovata" />
		<StyledPage>
			<h1>Pagina non trovata</h1>
			<StyledImg fixed={fixed} />
			<p>
				Questa pagina non esiste! Clicca <Link to="/">QUI</Link> per tornare al
				sito.
			</p>
		</StyledPage>
	</Layout>
)

NotFoundPage.propTypes = {
	data: PropTypes.shape({
		file: PropTypes.shape({
			childImageSharp: PropTypes.shape({
				fixed: PropTypes.object.isRequired,
			}).isRequired,
		}).isRequired,
	}).isRequired,
}

export default NotFoundPage

export const query = graphql`
	query {
		file(relativePath: { eq: "services-litter.png" }) {
			childImageSharp {
				fixed(height: 250) {
					...GatsbyImageSharpFixed
				}
			}
		}
	}
`
