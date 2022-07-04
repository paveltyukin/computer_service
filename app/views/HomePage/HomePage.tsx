import React, { FC } from 'react'
import { Header } from '@/views/HomePage/Header/Header'
import { Service } from '@/views/HomePage/Service/Service'
import { AppDialog } from '@/ui/AppDialog/AppDialog'

export const HomePage: FC = () => {
	return (
		<>
			<Header />
			<Service />
			<AppDialog />
		</>
	)
}
