import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import ReactIcons from './ReactIcons';
import parse from 'html-react-parser'

interface Props {
	message: PropsMessage
	delay?: number
	mt?: number
}

interface PropsMessage {
	main: string
	sub?: string
}

const Error: React.FC<Props> = ({ message, delay = 500, mt = 20 }) => {
	const [showing, setShowing] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setShowing(true)
		}, delay)
	}, [])

	return (
		<Container mt={mt}>
			{showing && (
				<>
					<ErrorIcon />
					<h1 className='mt-3'>{message.main} </h1>
					<SubTitle>{parse(message.sub ?? '')}</SubTitle>
				</>
			)}
		</Container>
	)
}

interface ContainerProps {
	mt: number
}

const Container = styled.div.attrs<ContainerProps>({
	className: `text-center`,
})`
	margin-top: ${(props) => props.mt}px;
`

const ErrorIcon = styled(ReactIcons.error).attrs({
	className: `text-danger`,
})`
	width: 150px;
	height: 100px;
`

const SubTitle = styled.div.attrs({
	className: `text-muted`,
})`
	font-size: 17.5px;
	margin-top: 20px;
`

export default Error
