import $class from './Menu.module.sass'
import { ActiveLink } from '@/ui/ActiveLink/ActiveLink'

export const Menu = () => {
	const links = [
		{ href: '/', name: 'главная' },
		{ href: '/about', name: 'о нас' },
		{
			href: '/services',
			name: 'услуги',
			subLinks: [
				{ name: 'Ремонт компьютера', href: '/....' },
				{ name: 'Ремонт ноутбуков', href: '/....' },
				{ name: 'Ремонт моноблоков', href: '/....' },
				{ name: 'Ремонт техники Apple', href: '/....' },
				{ name: 'Сборка и апгрейд компьютеров', href: '/....' },
				{ name: 'Установка ОС и программ', href: '/....' },
				{ name: 'Удаление вирусов', href: '/....' },
				{ name: 'Настройка интернета', href: '/....' },
				{ name: 'Корпоративным клиентам', href: '/....' },
			],
		},
		{ href: '/price-list', name: 'прайс-лист' },
		{ href: '/reviews', name: 'отзывы' },
		{ href: '/blog', name: 'блог' },
		{ href: '/contacts', name: 'контакты' },
	]

	return (
		<nav>
			<ul className={$class.navigation}>
				{links.map((link) => (
					<li className={$class.link} key={link.href}>
						<ActiveLink href={link.href}>
							<a className={$class.menuText}>{link.name}</a>
						</ActiveLink>
						{link.subLinks && (
							<ul className={$class.subLink}>
								{link.subLinks.map((subLink) => (
									<li key={subLink.name}>
										<ActiveLink href={subLink.href}>
											<a>{subLink.name}</a>
										</ActiveLink>
									</li>
								))}
							</ul>
						)}
					</li>
				))}
			</ul>
		</nav>
	)
}
