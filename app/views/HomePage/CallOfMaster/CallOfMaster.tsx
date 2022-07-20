import React from 'react'
import classNames from 'classnames'
import $class from './CallOfMaster.module.sass'

export const CallOfMaster = () => {
	return (
		<section className={classNames($class.callOfMaster)}>
			<div className="container">
				<p className={$class.title}>ВЫЗВАТЬ МАСТЕРА</p>
			</div>
		</section>
	)
}
