import React from 'react'
import $class from './Header.module.sass'
import { CallToAction } from '@/views/HomePage/Header/CallToAction/CallToAction'
import { InfoBlock } from '@/views/HomePage/Header/InfoBlock/InfoBlock'

export const Header = () => {
	return (
		<header className={$class.header}>
			<InfoBlock />
			<CallToAction />
		</header>
	)
}
