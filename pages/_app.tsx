import '~/public/reset.scss'
import '~/styles/globals.scss'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { client } from '~/app/graphql/apollo-client'
import { Provider } from 'react-redux'
import { store } from '~/store'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<ApolloProvider client={client}>
				<Component {...pageProps} />
			</ApolloProvider>
		</Provider>
	)
}

export default MyApp
