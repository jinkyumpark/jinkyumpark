import React from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components';
import WebsiteLink from '../common/WebsiteLink';
import ReactIcons from '../common/ReactIcons';
import parse from 'html-react-parser'
import { MarginRow } from '../common/commonStyle';
import breakpoints from '../common/breakpoints';
import Portfolio from '../model/Portfolio';

interface Props {
    product: Portfolio
}

const ProductCard: React.FC<Props> = ({ product }) => {
	return (
		<CardContainer>
			<CardBody>
				<Row href={`/product/${product.name.english}`}>
					<div className='col-12 col-sm-3 col-md-2'>
						<Image src={product.icon} alt='' />
						<KoreanName>{product.name.korean}</KoreanName>
						<EnglishName>{product.name.english}</EnglishName>
					</div>

					<div className='col-12 col-sm-9 col-md-10 mt-2 mt-sm-0'>
						<Description>{product.description.short}</Description>
						<DescriptionDetail>{parse(product.description.medium)}</DescriptionDetail>

						<MarginRow />

						<WebsiteLinkContainer>
							{product.link.map((link) => {
								return <WebsiteLink link={link.link} icon={link.icon} border={link.border} />
							})}
						</WebsiteLinkContainer>
					</div>

					<RightArrowContainer>
						<RightArrow />
					</RightArrowContainer>
				</Row>
			</CardBody>
		</CardContainer>
	)
}

const CardContainer = styled(Card).attrs({
	className: `hover-effect`,
})`
	margin: 0px;
	padding: 0px;
	min-height: 250px;
`

const CardBody = styled(Card.Body).attrs({
	className: ``,
})`
	width: 100%;
    height: 100%;

	margin: 0px;
`

const Row = styled.a.attrs({
	className: `row`,
})`
	height: 100%;
	align-items: center;
	text-decoration: none;
	color: black;

    &:hover {
        color: black;
    }
`

const Image = styled.img.attrs({
	className: `img-fluid rounded`,
})`
	width: 100px;
	height: 100px;
`

const KoreanName = styled.div.attrs({
	className: `force-1-line`
})`
    margin-top: 10px;
    font-size: 22.5px;
`;

const EnglishName = styled.div.attrs({
	className: 'text-secondary',
})`
    font-size: 15px
`

const Description = styled.div.attrs({
	className: `force-1-line`,
})`
	font-size: 20px;

	@media screen and (min-width: ${breakpoints.md}) {
		font-size: 25px;
	}
`

const DescriptionDetail = styled.div.attrs({
	className: `text-secondary`,
})`
	font-size: 15px;
`

const WebsiteLinkContainer = styled.div.attrs({
	className: ``,
})`
    display: flex;
    justify-content: center;

    margin-right: 10px;
    margin-left: 10px;
`

const RightArrowContainer = styled.div.attrs({
	className: ``,
})`
justify-content: right;
position: absolute;
right: 10px;

display: none;
@media screen and (min-width: ${breakpoints.md}) {
		display: flex;
	}
`

const RightArrow = styled(ReactIcons.rightArrow).attrs({
	className: `h1`,
})``

export default ProductCard