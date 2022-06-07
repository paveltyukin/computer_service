import classNames from 'classnames'
import React from 'react'
import $class from './Header.module.sass'
import { HeaderMenu } from '@/components/Home/Header/Menu/HeaderMenu'

export const Header = () => {
	return (
		<header className={$class.header}>
			<div className={$class.headerContainer}>
				<div className={$class.headerContent}>
					<div className={$class.headerContent__logo} />
					<HeaderMenu />
				</div>
			</div>
		</header>
	)
}
