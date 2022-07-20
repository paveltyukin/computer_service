import classNames from 'classnames'
import $class from './Help.module.sass'

export const Help = () => {
	return (
		<section className={classNames($class.help)}>
			<div className="container">
				<h2 className={$class.title}>НЕ РАБОТАЕТ КОМПЬЮТЕР?</h2>
				<div className={$class.image}>
					<ul className={$class.listWrapper}>
						<li className={$class.list}>
							<span className={$class.circle}>1</span>
							<p className={$class.text}>
								Вызовите мастера для бесплатной диагностики в удобное для вас
								время
							</p>
						</li>
						<li className={$class.list}>
							<span className={$class.circle}>2</span>
							<p className={$class.text}>
								Узнайте причину неисправности, перечень необходимых работ и стоимость ремонта
							</p>
						</li>
						<li className={$class.list}>
							<span className={$class.circle}>3</span>
							<p className={$class.text}>
								Платите по окончанию выполнения ремонта и подписания договора
							</p>
						</li>
						<li className={$class.list}>
							<span className={$class.circle}>4</span>
							<p className={$class.text}>
								Получите гарантию 1 год на произведенные работы
							</p>
						</li>
					</ul>
				</div>
				<div className={$class.moreDetailsWrapperText}><span className={$class.moreDetailsText}>подробнее</span></div>
			</div>
		</section>
	)
}
