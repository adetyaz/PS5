import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Fonts from '@common/Font'

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Fonts />
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default MyApp
