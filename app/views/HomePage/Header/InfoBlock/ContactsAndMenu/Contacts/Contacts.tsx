import $class from './Contacts.module.sass'
import Link from 'next/link'
import classNames from 'classnames'

export const Contacts = () => {
	return (
		<div className={$class.contactsWrapper}>
			<Link href="tel:+7 (000) 000-00-00">
				<a className={$class.phone}>+7 (000) 000-00-00</a>
			</Link>
			<Link href="tel:+7 (000) 000-00-01">
				<a className={$class.phone}>+7 (000) 000-00-01</a>
			</Link>
			<Link href="#">
				<a className={classNames($class.social, $class.instagram)} />
			</Link>
			<Link href="#">
				<a className={classNames($class.social, $class.whatsapp)} />
			</Link>
			<Link href="#">
				<a className={classNames($class.social, $class.telegram)} />
			</Link>
		</div>
	)
}
