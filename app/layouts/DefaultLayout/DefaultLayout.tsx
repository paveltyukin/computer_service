import React from 'react'
import Head from 'next/head'

interface DefaultLayoutProps {
	children: JSX.Element
}

export const DefaultLayout = ({
	children,
}: DefaultLayoutProps): JSX.Element => {
	return (
		<>
			<Head>
				<title itemProp="headline">Компьютерная помощь</title>
				<meta itemProp="description" name="description" />
				<link href="/reset.scss" />
			</Head>
			{children}
		</>
	)
}
