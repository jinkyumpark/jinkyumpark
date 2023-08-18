import React from 'react'
import styled from 'styled-components';

interface Props {
    link: string
    icon: any
    border?: boolean
    margin?: number
}

const WebsiteLink: React.FC<Props> = ({ link, icon, border = false, margin = 5 }) => {
	return (
		<Link target='_blank' rel='noreferrer' href={link} margin={margin}>
			<Image src={icon} alt={`${link}-icon`} border={border} />
		</Link>
	)
}

interface LinkProps {
    margin: number
}

const Link = styled.a.attrs<LinkProps>({
	className: ``,
})`
	margin-left: ${(props) => props.margin}px;
	margin-right: ${(props) => props.margin}px;

    z-index: 5;
`

interface ImageProps {
    border: boolean
}

const Image = styled.img.attrs<ImageProps>({
	className: `img-responsive rounded-circle link-hover-effect`,
})`
    width: 40px;
    border-style: ${props => props.border && 'solid'};
    border-width: ${props => props.border && '0.1px'};
    border-color: ${props => props.border && 'rgb(200, 200, 200)'};
`

export default WebsiteLink