import $class from '@/components/Home/Header/Header.module.sass'
import React from 'react'

export const HeaderMenu = () => {
	return (
		<div className={$class.menu}>
			<div className={$class.contacts}>
				<div className={$class.icon} />
				<div className={$class.phone}>+7 (000) 000-00-00</div>
				<div className={$class.icon} />
				<div className={$class.phone}>+7 (000) 000-00-00</div>
				<div className={$class.instagram} />
				<div className={$class.whatsapp} />
				<div className={$class.telegram} />
			</div>
			<div className={$class.menu}>
				<div className={$class.menuText}>главная</div>
				<div className={$class.menuSeparator} />
				<div className={$class.menuText}>о нас</div>
				<div className={$class.menuSeparator} />
				<div className={$class.menuText}>услуги</div>
				<div className={$class.menuSeparator} />
				<div className={$class.menuText}>прайс-лист</div>
				<div className={$class.menuSeparator} />
				<div className={$class.menuText}>отзывы</div>
				<div className={$class.menuSeparator} />
				<div className={$class.menuText}>блог</div>
				<div className={$class.menuSeparator} />
				<div className={$class.menuText}>контакты</div>
			</div>
		</div>
	)
}
