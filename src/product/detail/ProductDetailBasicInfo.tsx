import React from 'react'
import styled from 'styled-components';
import { FlexSpacer, MarginCol, MarginRow } from '../../common/commonStyle';
import WebsiteLink from '../../common/WebsiteLink';
import Portfolio from '../../model/Portfolio';
import breakpoints from '../../common/breakpoints';

interface Props {
    product: Portfolio
}

const ProductDetailBasicInfo: React.FC<Props> = ({ product }) => {
	return (
		<BasicInfoContainer>
			<Image src={product.icon} alt='' />

			<MarginCol />

			<DescriptionContainer>
				<NameContainer>
					<KoreanName>{product.name.korean}</KoreanName>
					<EnglishName>{product.name.english}</EnglishName>
				</NameContainer>

				<MarginRow m={10} />

				<Description>{product.description.short}</Description>
			</DescriptionContainer>

			<FlexSpacer />

			<WebsiteLinkContainer>
				{product.link.map((link) => {
					return <WebsiteLink link={link.link} icon={link.icon} />
				})}
			</WebsiteLinkContainer>
		</BasicInfoContainer>
	)
}

const Image = styled.img.attrs({
	className: `img-fluid rounded`,
})`
	width: 100px;
	height: 100px;
`

const BasicInfoContainer = styled.div`
	text-align: center;
	
	@media screen and (min-width: ${breakpoints.md}) {
		display: flex;
	}
	`;

const NameContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

const KoreanName = styled.div`
    font-size: 30px;
	margin-top: 20px;
	
	@media screen and (min-width: ${breakpoints.md}) {
		margin-top: 0px;
	}
`;

const EnglishName = styled.div.attrs({
    className: 'text-secondary'
})`
    font-size: 20px;
    align-items: end;
`;

const DescriptionContainer = styled.div`
	flex-wrap: wrap;
`

const Description = styled.div.attrs({
	className: `text-secondary`,
})``

const WebsiteLinkContainer = styled.div`
	justify-content: space-between;

	margin-top: 20px;
	@media screen and (min-width: ${breakpoints.md}) {
		margin-top: 0px;
	}
`

export default ProductDetailBasicInfo