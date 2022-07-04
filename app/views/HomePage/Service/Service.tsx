import $class from './Service.module.sass'
import classNames from 'classnames'
import { ServiceItem } from '@/views/HomePage/Service/ServiceItem/ServiceItem'

export const Service = () => {
	return (
		<div className={classNames($class.service, 'container')}>
			<ServiceItem
				title="Ремонт компьютеров"
				services={[
					{ title: 'Замена блока питания' },
					{ title: 'Замена материнской платы' },
					{ title: 'Замена жесткого диска' },
					{ title: 'Замена видеокарты' },
					{ title: 'Восстановление данных' },
					{ title: 'Чистка компьютера от пыли' },
				]}
				classIcon="computer"
			/>
			<ServiceItem
				title="РЕМОНТ ноутбуков"
				services={[
					{ title: 'Ремонт залитого ноутбука' },
					{ title: 'Замена клавиатуры' },
					{ title: 'Замена экрана' },
					{ title: 'Замена термопасты' },
					{ title: 'Чистка от пыли' },
					{ title: 'Замена жесткого диска' },
				]}
				classIcon="computer"
			/>
			<ServiceItem
				title="РЕМОНТ моноблоков"
				services={[
					{ title: 'Ремонт материнской платы' },
					{ title: 'Замена комплектующих' },
					{ title: 'Замена видеокарты' },
					{ title: 'Замена DVD-привода' },
					{ title: 'Замена комплектующих' },
					{ title: 'Чистка моноблока от пыли' },
				]}
				classIcon="computer"
			/>
			<ServiceItem
				title="РЕМОНТ техники Apple"
				services={[
					{ title: 'Ремонт MacPro' },
					{ title: 'Ремонт iMac' },
					{ title: 'Ремонт MacBook' },
					{ title: 'Ремонт MacMini' },
					{ title: 'Ремонт материнской платы' },
					{ title: 'Замена матрицы' },
				]}
				classIcon="computer"
			/>
			<ServiceItem
				title="сборка и апгрейд компьютеров"
				services={[
					{ title: 'Сборка компьютера под заказ' },
					{ title: 'Установка жесткого диска' },
					{ title: 'Замена оперативной памяти' },
					{ title: 'Замена материнской платы' },
					{ title: 'Замена звуковой карты' },
					{ title: 'Замена видеокарты' },
				]}
				classIcon="computer"
			/>
			<ServiceItem
				title="установка ос и программ"
				services={[
					{ title: 'Windows XP / 7 / 8 / 10' },
					{ title: 'MacOS' },
					{ title: 'Антивирус' },
					{ title: 'Офисные программы' },
					{ title: 'Графические программы' },
					{ title: 'Работа с ПО клиента' },
				]}
				classIcon="computer"
			/>
			<ServiceItem
				title="удаление вирусов"
				services={[
					{ title: 'Чистка компьютера от вирусов' },
					{ title: 'Чистка ноутбука от вирусов' },
					{ title: 'Баннеры-вымогатели' },
					{ title: 'Майнеры' },
					{ title: 'Всплывающая реклама' },
					{ title: 'Эротические баннеры' },
				]}
				classIcon="computer"
			/>
			<ServiceItem
				title="настройка интернета"
				services={[
					{ title: 'Подключение проводного и беспроводного интернета' },
					{ title: 'Прокладка интернет-кабелей' },
					{ title: 'Настройка роутера' },
					{ title: 'Настройка Wi-Fi адаптора' },
					{ title: 'Настройка ADSL интернета' },
				]}
				classIcon="computer"
			/>
			<ServiceItem
				title="корпоративным клиентам"
				services={[
					{ title: 'Создание локальной сети' },
					{ title: 'Настройка облачных сервисов' },
					{ title: 'Настройка серверов' },
					{ title: 'Обслуживание серверов' },
					{ title: 'Обслуживание компьютеров' },
					{ title: 'IT-поддержка' },
				]}
				classIcon="computer"
			/>
		</div>
	)
}
