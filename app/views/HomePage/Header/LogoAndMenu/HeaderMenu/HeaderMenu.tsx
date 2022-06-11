import $class from './HeaderMenu.module.sass'
import Link from 'next/link'

// link => a

export const HeaderMenu = () => {
	return (
		<div>
			<div className={$class.contactsWrapper}>
				<div className={$class.phone}>+7 (000) 000-00-00</div>
				<div className={$class.phone}>+7 (000) 000-00-00</div>
				<div className={$class.instagram} />
				<div className={$class.whatsapp} />
				<div className={$class.telegram} />
			</div>
			<nav>
				<ul className={$class.navigation}>
					<li>
						<a href="@/views/HomePage/Header/LogoAndMenu/HeaderMenu/HeaderMenu#">
							главная
						</a>
					</li>
					<li>
						<a href="@/views/HomePage/Header/LogoAndMenu/HeaderMenu/HeaderMenu#">
							о нас
						</a>
					</li>
					<li>
						<a href="@/views/HomePage/Header/LogoAndMenu/HeaderMenu/HeaderMenu#">
							услуги
						</a>
					</li>
					<li>
						<a href="@/views/HomePage/Header/LogoAndMenu/HeaderMenu/HeaderMenu#">
							прайс-лист
						</a>
					</li>
					<li>
						<a href="@/views/HomePage/Header/LogoAndMenu/HeaderMenu/HeaderMenu#">
							отзывы
						</a>
					</li>
					<li>
						<a href="@/views/HomePage/Header/LogoAndMenu/HeaderMenu/HeaderMenu#">
							блог
						</a>
					</li>
					<li>
						<a href="@/views/HomePage/Header/LogoAndMenu/HeaderMenu/HeaderMenu#">
							контакты
						</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}
