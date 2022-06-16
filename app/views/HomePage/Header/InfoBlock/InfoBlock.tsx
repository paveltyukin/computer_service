import classNames from 'classnames'
import $class from './InfoBlock.module.sass'
import { ContactsAndMenu } from '@/views/HomePage/Header/InfoBlock/ContactsAndMenu/ContactsAndMenu'
import React from 'react'

export const InfoBlock = () => {
	return (
		<div className={classNames($class.headerWrapper, 'container')}>
			<div className={$class.logo} />
			<ContactsAndMenu />
		</div>
	)
}
