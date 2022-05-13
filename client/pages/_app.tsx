import '../styles/globals.sass'
import type { AppProps } from 'next/app'
import {
	ApolloClient,
	ApolloProvider,
	HttpLink,
	InMemoryCache,
} from '@apollo/client'

function createApolloClient() {
	const link = new HttpLink({
		uri: `${process.env.REACT_APP_GRAPHQL_API}/graphql`,
	})

	return new ApolloClient({
		link,
		cache: new InMemoryCache(),
	})
}

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={createApolloClient()}>
			<Component {...pageProps} />
		</ApolloProvider>
	)
}

export default MyApp
