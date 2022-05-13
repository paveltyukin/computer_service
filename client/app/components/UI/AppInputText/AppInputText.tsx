import React from 'react'
import $class from './AppInputText.module.sass'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'
import classNames from 'classnames'
import Image from 'next/image'
import icon from '@/assets/images/icons/input.svg'
import { Tooltip } from '@/components/UI/Tooltip/Tooltip'

interface AppInputTextProps {
	labelText?: string
	showIcon?: boolean
	tooltipType?: string
}

export function AppInputText<T extends FieldValues>(
	props: UseControllerProps<T> & AppInputTextProps,
) {
	const {
		field,
		fieldState: { error },
	} = useController<T>(props)

	const { labelText, showIcon, tooltipType } = props

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
						<Image src={icon} width="21" height="25" />
					</div>
				)}
				{tooltipType && <Tooltip type={tooltipType} />}
			</div>
		</>
	)
}
