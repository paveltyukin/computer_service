import { NextPage } from 'next'
import { DefaultLayout } from '@/layouts/DefaultLayout/DefaultLayout'
import { AboutPage } from '@/views/AboutPage/AboutPage'

const About: NextPage = () => {
	return (
		<DefaultLayout>
			<AboutPage />
		</DefaultLayout>
	)
}

export default About
