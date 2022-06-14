import $class from './HeaderMenu.module.sass'
import Link from 'next/link'
import { ActiveLink } from '@/ui/ActiveLink/ActiveLink'

export const HeaderMenu = () => {
	return (
		<div>
			<div className={$class.contactsWrapper}>
				<Link href="tel:+7 (000) 000-00-00">
					<a className={$class.phone}>+7 (000) 000-00-00</a>
				</Link>
				<Link href="tel:+7 (000) 000-00-01">
					<a className={$class.phone}>+7 (000) 000-00-01</a>
				</Link>
				<Link href="#">
					<a className={$class.instagram} />
				</Link>
				<Link href="#">
					<a className={$class.whatsapp} />
				</Link>
				<Link href="#">
					<a className={$class.telegram} />
				</Link>
			</div>
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
		</div>
	)
}
