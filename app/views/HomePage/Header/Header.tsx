import React from 'react'
import $class from './Header.module.sass'
import { CallToAction } from '@/views/HomePage/Header/CallToAction/CallToAction'
import { HeaderMenu } from '@/views/HomePage/Header/LogoAndMenu/HeaderMenu/HeaderMenu'
import logo from '@/assets/images/icons/logo.svg'
import classNames from 'classnames'

export const Header = () => {
	return (
		<header className={$class.header}>
			<div className={classNames($class.headerWrapper, 'container')}>
				<div className={$class.logo} />
				<div>
					<div className={$class.feedback}></div>
					<HeaderMenu />
				</div>
			</div>
			<CallToAction />
		</header>
	)
}
