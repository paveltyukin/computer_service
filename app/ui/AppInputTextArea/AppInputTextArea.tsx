import React, { FC } from 'react'
import $class from './AppInputTextArea.module.sass'

interface AppInputTextAreaProps {
	children: React.ReactNode
}

export const AppInputTextArea: FC<AppInputTextAreaProps> = ({ children }) => {
	return (
		<>
			<label className={$class.label}>{children}</label>
			<div className={$class.inputWrapper}>
				<textarea className={$class.textarea} rows={5} />
			</div>
		</>
	)
}
