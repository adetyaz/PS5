import Head from 'next/head'
import SignIn from './Sign In'

export default function Home() {
	return (
		<>
			<Head>
				<title>PS5</title>
				<meta name='description' content='Ps5 Demo' />
				<link rel='icon' href='/assets/svg/PS5 Logo.svg' />
			</Head>
			<SignIn />
		</>
	)
}
