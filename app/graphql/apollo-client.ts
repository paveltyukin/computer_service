import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const link = new HttpLink({
	uri: `https://computer-service.dev.local/graphql`,
})

export const client = new ApolloClient({
	link,
	cache: new InMemoryCache(),
})
