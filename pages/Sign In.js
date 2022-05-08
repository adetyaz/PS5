import { Heading, Box, Flex, Image, Text, Button } from '@chakra-ui/react'
import Card from '@components/Card'
import { useState } from 'react'

const SignIn = () => {
	const [show, setShow] = useState(false)
	const cardHover = (e) => {
		e.target.currentTarget
		console.log(e.target.currentTarget)
		setShow(true)
	}
	const leaveHover = () => setShow(false)

	return (
		<Box
			as='section'
			bgColor='#efefef47'
			bgImage={`url('/assets/png/DualSense.png')`}
			bgRepeat='no-repeat'
			bgSize='100%'
			bgPosition='center'
			p='6rem 4rem 4rem 4rem'
		>
			<Flex justifyContent='space-between'>
				<Image w='6%' src='/assets/svg/PS5 Logo Dark.svg' alt='logo' />
				<Text fontSize='2xl' fontWeight='500'>
					4:00PM
				</Text>
			</Flex>
			<Box as='div' py='5rem'>
				<Text textAlign='center' fontSize='4xl' fontWeight='400' w='84.7ch'>
					DualSense connected
				</Text>
				<Heading
					as='h2'
					textAlign='center'
					fontWeight='400'
					fontSize='7xl'
					letterSpacing='-.3rem'
				>
					Who is using the controller?
				</Heading>
			</Box>

			<Flex gap='3rem'>
				<Card color='white' height='26rem' padding='4rem'>
					<Image
						src='/assets/svg/add user icon.svg'
						alt='add user'
						w='55%'
						d='block'
						mx='auto'
						my='1rem'
					/>
					<Text fontSize='4xl' textAlign='center'>
						Create User
					</Text>
					<Text
						fontSize='2xl'
						color='gray.600'
						py='1rem'
						w='21ch'
						textAlign='center'
					>
						Add a user to this console
					</Text>
				</Card>
				<Card
					color={show ? 'linear-gradient(to top, #665A00, black)' : 'white'}
					height='26rem'
					_hover={{ transform: 'scale(1.1)', color: 'white' }}
					onMouseOver={cardHover}
					onMouseOut={leaveHover}
				>
					<Image
						src='/assets/png/user one.png'
						alt='add user'
						w='45%'
						d='block'
						mx='auto'
						mt='4rem'
						mb='1rem'
						transition='all 1.5s ease'
						{...(show && { transform: 'scale(1.1) translateY(-5rem)' })}
					/>
					<Flex
						gap='2rem'
						justifyContent='center'
						transition='all 1.8s ease'
						{...(show && { transform: 'translateY(-5rem)' })}
					>
						<Text fontSize='4xl' textAlign='center'>
							Jo-accord
						</Text>
						<Image src='/assets/svg/PS Plus.svg' alt='sony plus' w='8%' />
					</Flex>
					<Text
						fontSize='2xl'
						color='gray.600'
						textAlign='center'
						transition='all 1.9s ease'
						{...(show && { transform: 'translateY(-5rem)', color: 'white' })}
					>
						Last online 3 hours ago
					</Text>

					<Button
						rounded='full'
						bg='#276EE6'
						color='white'
						p='2rem 1rem 2rem .2rem'
						fontSize='1.3rem'
						fontWeight='400'
						d='flex'
						gap='1rem'
						mx='auto'
						my='.5rem'
						transition='all 2s ease'
						transform='translateY(-2rem) scale(0)'
						opacity='0'
						_hover={{ bg: '#276EE6' }}
						_active={{ bg: '#276EE6' }}
						_focus={{ bg: '#276EE6', outline: 'none' }}
						{...(show && {
							transform: 'translateY(-4rem) scale(1)',
							opacity: '1',
						})}
					>
						<Image
							src='/assets/svg/Control X.svg'
							alt='control x'
							w='25%'
							d='inline'
						/>
						Tap to sign in{' '}
					</Button>
				</Card>
				<Card
					color={show ? 'linear-gradient(to top, #004B66, black)' : 'white'}
					height='26rem'
					_hover={{ transform: 'scale(1.1)', color: 'white' }}
					onMouseOver={cardHover}
					onMouseOut={leaveHover}
				>
					<Image
						src='/assets/png/user two.png'
						alt='add user'
						w='45%'
						d='block'
						mx='auto'
						mt='4rem'
						mb='1rem'
						transition='all 1.5s ease'
						{...(show && { transform: 'scale(1.1) translateY(-5rem)' })}
					/>
					<Flex
						gap='2rem'
						justifyContent='center'
						transition='all 1.8s ease'
						{...(show && { transform: 'translateY(-5rem)' })}
					>
						<Text fontSize='4xl' textAlign='center'>
							evebanigo
						</Text>
						<Image src='/assets/svg/PS Plus.svg' alt='sony plus' w='8%' />
					</Flex>
					<Text
						fontSize='2xl'
						color='gray.600'
						textAlign='center'
						transition='all 1.9s ease'
						{...(show && { transform: 'translateY(-5rem)', color: 'white' })}
					>
						Last online yesterday
					</Text>

					<Button
						rounded='full'
						bg='#276EE6'
						color='white'
						p='2rem 1rem 2rem .2rem'
						fontSize='1.3rem'
						fontWeight='400'
						d='flex'
						gap='1rem'
						mx='auto'
						my='.5rem'
						transition='all 2s ease'
						transform='translateY(-2rem) scale(0)'
						opacity='0'
						_hover={{ bg: '#276EE6' }}
						_active={{ bg: '#276EE6' }}
						_focus={{ bg: '#276EE6', outline: 'none' }}
						{...(show && {
							transform: 'translateY(-4rem) scale(1)',
							opacity: '1',
						})}
					>
						<Image
							src='/assets/svg/Control X.svg'
							alt='control x'
							w='25%'
							d='inline'
						/>
						Tap to sign in{' '}
					</Button>
				</Card>
				<Card color='white' height='26rem' padding='4rem'>
					<Image
						src='/assets/svg/guest.svg'
						alt='add user'
						w='55%'
						d='block'
						mx='auto'
						my='1rem'
					/>
					<Text fontSize='4xl' textAlign='center'>
						Create User
					</Text>
					<Text
						fontSize='2xl'
						color='gray.600'
						py='1rem'
						w='21ch'
						textAlign='center'
					>
						Data will be deleted after you log out
					</Text>
				</Card>
			</Flex>
		</Box>
	)
}

export default SignIn
