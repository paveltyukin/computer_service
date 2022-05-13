import { FC } from 'react'
import $class from './Tooltip.module.sass'

interface TooltipProps {
	type: string
}

export const Tooltip: FC<TooltipProps> = ({ type }) => {
	return <div className={$class.tooltip}></div>
}
