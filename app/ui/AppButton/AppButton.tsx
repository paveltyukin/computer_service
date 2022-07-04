import React, { FC } from 'react'
import $class from './AppButton.module.sass'
import classNames from 'classnames'

interface AppButtonProps {
	children: React.ReactNode
	buttonClass: string
}

export const AppButton: FC<AppButtonProps> = ({ buttonClass, children }) => {
	return (
		<button className={classNames($class[buttonClass], $class.transform)}>
			{children}
		</button>
	)
}
