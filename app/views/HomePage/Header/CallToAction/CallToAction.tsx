import React from 'react'
import $class from '@/views/HomePage/Header/Header.module.sass'
import classNames from 'classnames'
import { AppButton } from '@/ui/AppButton/AppButton'

export const CallToAction = () => {
	return (
		<div className={$class.customContainer}>
			<div
				className={classNames($class.containerBlock, $class.manWithCompMargin)}
			>
				<div className={$class.actions}>
					<div className={$class.title}>
						ОПЕРАТИВНАЯ
						<br />
						КОМПЬЮТЕРНАЯ
						<br />
						ПОМОЩЬ{' '}
					</div>
					<div className={$class.text}>
						Ремонт любой сложности ПК, ноутбуков
						<br />и техники Apple для дома и офиса
					</div>
					<div className={$class.offer}>Срочный выезд мастера </div>
					<AppButton buttonClass="main">вызвать мастера</AppButton>
				</div>
				<div className={$class.manWithComp}></div>
			</div>
		</div>
	)
}
