import React, { useState } from 'react'
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
	const [isShow, showResults] = useState(false)
	const [inputValue, setInputValue] = useState('')

	const showHideResults = (show: boolean) => {
		showResults(show)
	}

	const setInputValueFromButton = (value: string) => {
		setInputValue(value)
		showHideResults(false)
	}

	const lists = [
		{ key: 1, value: 'Элемент 1' },
		{ key: 2, value: 'Элемент 2' },
		{ key: 3, value: 'Элемент 3' },
		{ key: 4, value: 'Элемент 4' },
		{ key: 5, value: 'Элемент 5' },
	]

	return (
		<>
			<label className={$class.label}>{labelText}</label>
			<div className={$class.inputWrapper}>
				<input
					{...field}
					value={inputValue}
					placeholder={field.name}
					name={field.name}
					className={classNames($class.input, { [$class.error]: error })}
					onFocus={() => showHideResults(true)}
					onBlur={() => showHideResults(false)}
				/>
				{showIcon && (
					<div className={$class.icon}>
						<Image
							src={rightDownImage}
							width="21"
							height="25"
							alt="icon"
							draggable={false}
							onClick={() => showHideResults(!isShow)}
						/>
					</div>
				)}
				<div
					className={classNames($class.resultBlock, { [$class.show]: isShow })}
				>
					<ul>
						{lists.map((list) => (
							<li key={list.key}>
								<button
									onClick={() => setInputValueFromButton(list.value)}
									className={$class.buttonFromList}
								>
									{list.value}
								</button>
							</li>
						))}
						<li>1 Элемент</li>
					</ul>
				</div>
			</div>
			<input />
		</>
	)
}
