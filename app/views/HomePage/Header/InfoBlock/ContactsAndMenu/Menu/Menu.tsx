import $class from './Menu.module.sass'
import { ActiveLink } from '@/ui/ActiveLink/ActiveLink'

export const Menu = () => {
	return (
		<nav>
			<ul className={$class.navigation}>
				<li>
					<ActiveLink href="/">
						<a>главная</a>
					</ActiveLink>
				</li>
				<li>
					<ActiveLink href="/about">
						<a>о нас</a>
					</ActiveLink>
				</li>
				<li>
					<ActiveLink href="/services">
						<a> услуги</a>
					</ActiveLink>
				</li>
				<li>
					<ActiveLink href="/price-list">
						<a>прайс-лист</a>
					</ActiveLink>
				</li>
				<li>
					<ActiveLink href="/reviews">
						<a>отзывы</a>
					</ActiveLink>
				</li>
				<li>
					<ActiveLink href="/blog">
						<a>блог</a>
					</ActiveLink>
				</li>
				<li>
					<ActiveLink href="/contacts">
						<a>контакты</a>
					</ActiveLink>
				</li>
			</ul>
		</nav>
	)
}
