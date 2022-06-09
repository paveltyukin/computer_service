import $class from '../Header.module.sass'

export const HeaderMenu = () => {
	return (
		<div>
			<div>
				<div className={$class.icon} />
				<div className={$class.phone}>+7 (000) 000-00-00</div>
				<div className={$class.icon} />
				<div className={$class.phone}>+7 (000) 000-00-00</div>
				<a className={$class.instagram}></a>
				<a className={$class.whatsapp}></a>
				<a className={$class.telegram}></a>
			</div>
			<nav>
				<ul>
					<li>
						<a href="#">главная</a>
					</li>
					<li>
						<a href="#">о нас</a>
					</li>
					<li>
						<a href="#">услуги</a>
					</li>
					<li>
						<a href="#">прайс-лист</a>
					</li>
					<li>
						<a href="#">отзывы</a>
					</li>
					<li>
						<a href="#">блог</a>
					</li>
					<li>
						<a href="#">контакты</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}
