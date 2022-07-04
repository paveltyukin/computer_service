import $class from './ServiceItem.module.sass'
import classNames from 'classnames'
import { AppButton } from '@/ui/AppButton/AppButton'

interface Services {
	title: string
}

interface ServiceItemProps {
	classIcon: string
	services: Services[]
	title: string
}

export const ServiceItem = ({
	classIcon,
	title,
	services,
}: ServiceItemProps) => {
	return (
		<div className={$class.item}>
			<div className={classNames($class.icon, $class[classIcon])}></div>
			<h3 className={$class.title}>{title}</h3>
			<ul className={$class.ul}>
				{services.map((service) => (
					<li
						className={$class.li}
						key={
							service.title +
							Date.now().toString(36) +
							Math.random().toString(36)
						}
					>
						<div
							className={classNames($class.checkBackground, $class.check)}
						></div>
						<p className={$class.text}>{service.title}</p>
					</li>
				))}
				<li className={$class.li}>
					<div className={$class.checkBackground}></div>
					<p className={$class.text}>и другое...</p>
				</li>
			</ul>
			<AppButton buttonClass="offer">Подробности и цены</AppButton>
		</div>
	)
}
