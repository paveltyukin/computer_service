import React, { FC } from 'react'
import { Header } from '@/views/HomePage/Header/Header'
import { Service } from '@/views/HomePage/Service/Service'
import { AppDialog } from '@/ui/AppDialog/AppDialog'
import { Help } from '@/views/HomePage/Help/Help'
import { CallOfMaster } from '@/views/HomePage/CallOfMaster/CallOfMaster'

export const HomePage: FC = () => {
	return (
		<>
			<Header />
			<Service />
			<Help />
			<CallOfMaster />
			<AppDialog />
		</>
	)
}
