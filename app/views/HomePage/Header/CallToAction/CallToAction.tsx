import React from 'react'
import $class from './CallToAction.module.sass'
import { AppButton } from '@/ui/AppButton/AppButton'

export const CallToAction = () => {
	return (
		<div className="container">
			<div className={$class.actions}>
				<h2 className={$class.title}>ОПЕРАТИВНАЯ КОМПЬЮТЕРНАЯ ПОМОЩЬ</h2>
				<p className={$class.text}>
					Ремонт любой сложности ПК, ноутбуков и техники Apple для дома и офиса
				</p>
				<p className={$class.offer}>Срочный выезд мастера </p>
				<AppButton buttonClass="main">вызвать мастера</AppButton>
			</div>
		</div>
	)
}
