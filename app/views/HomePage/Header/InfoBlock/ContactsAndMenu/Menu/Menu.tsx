import $class from './Menu.module.sass'
import { ActiveLink } from '@/ui/ActiveLink/ActiveLink'

export const Menu = () => {
	const links = [
		{ href: '/', name: 'главная' },
		{ href: '/about', name: 'о нас' },
		{ href: '/services', name: 'услуги' },
		{ href: '/price-list', name: 'прайс-лист' },
		{ href: '/reviews', name: 'отзывы' },
		{ href: '/blog', name: 'блог' },
		{ href: '/contacts', name: 'контакты' },
	]

	return (
		<nav>
			<ul className={$class.navigation}>
				{links.map((link) => (
					<li key={link.href}>
						<ActiveLink href={link.href}>
							<a className={$class.menuText}>{link.name}</a>
						</ActiveLink>
					</li>
				))}
			</ul>
		</nav>
	)
}
