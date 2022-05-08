import { Box } from '@chakra-ui/react'

const Card = ({ color, height, children, shadow, padding, ...props }) => {
	return (
		<Box
			as='div'
			p={padding}
			bg={color}
			boxShadow={shadow}
			h={height}
			cursor='pointer'
			transition='all 1s ease'
			{...props}
		>
			{children}
		</Box>
	)
}

export default Card
