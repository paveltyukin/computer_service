import type { NextPage } from 'next'
import { HomePage } from '@/views/HomePage/HomePage'
import { DefaultLayout } from '@/layouts/DefaultLayout/DefaultLayout'

const Home: NextPage = () => {
	return (
		<DefaultLayout>
			<HomePage />
		</DefaultLayout>
	)
}

export default Home
