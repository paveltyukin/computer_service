import React from 'react'
import $class from './AppInputText.module.sass'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'
import classNames from 'classnames'
import Image from 'next/image'
import rightDownImage from '@/assets/images/icons/vector.svg'

interface AppInputTextProps {
	labelText?: string
	showIcon?: boolean
	hasTooltip?: boolean
}

export function AppInputText<T extends FieldValues>(
	props: UseControllerProps<T> & AppInputTextProps
) {
	const {
		field,
		fieldState: { error },
	} = useController<T>(props)

	const { labelText, showIcon } = props

	return (
		<>
			{labelText && <label className={$class.label}>{labelText}</label>}
			<div className={$class.inputWrapper}>
				<input
					{...field}
					placeholder={field.name}
					name={field.name}
					className={classNames($class.input, { [$class.error]: error })}
				/>
				{showIcon && (
					<div className={$class.icon}>
						<Image
							src={rightDownImage}
							width="21"
							height="25"
							alt="icon"
							draggable={false}
						/>
					</div>
				)}
			</div>
		</>
	)
}
