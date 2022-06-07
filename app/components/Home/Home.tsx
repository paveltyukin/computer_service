import React, { FC } from 'react'
import $class from '@/components/Home/Home.module.sass'
import classNames from 'classnames'
import { AppButton } from '@/components/UI/AppButton/AppButton'
import Image from 'next/image'
import computerIcon from '@/assets/images/icons/computer.svg'
import checkIcon from '@/assets/images/icons/check.svg'
import notebookIcon from '@/assets/images/icons/notebook.svg'
import monoblockIcon from '@/assets/images/icons/monoblock.svg'
import appleIcon from '@/assets/images/icons/apple.svg'
import buildUpdateIcon from '@/assets/images/icons/build-update.svg'
import installProgramIcon from '@/assets/images/icons/install-program.svg'
import virusCleanIcon from '@/assets/images/icons/virus-clean.svg'
import internetIcon from '@/assets/images/icons/internet.svg'
import corporateClientIcon from '@/assets/images/icons/corporate.svg'
import handWithPhone from '@/assets/images/hand-with-phone.png'
import { MainForm } from '../../form/Main/MainForm'

export const Home: FC = () => {
	return (
		<>
			<section className={$class.headerSection}>
				<div className={$class.customContainer}>
					<div
						className={classNames(
							$class.containerBlock,
							$class.manWithCompMargin
						)}
					>
						<div className={$class.actions}>
							<div className={$class.title}>
								ОПЕРАТИВНАЯ
								<br />
								КОМПЬЮТЕРНАЯ
								<br />
								ПОМОЩЬ{' '}
							</div>
							<div className={$class.text}>
								Ремонт любой сложности ПК, ноутбуков
								<br />и техники Apple для дома и офиса
							</div>
							<div className={$class.offer}>Срочный выезд мастера </div>
							<AppButton buttonClass="main">вызвать мастера</AppButton>
						</div>
						<div className={$class.manWithComp}></div>
					</div>
				</div>
			</section>
			<section className={$class.serviceOffer}>
				<div className={$class.container}>
					<div className={$class.offerBlock}>
						<div className={$class.offerItem}>
							<div className={$class.offerItemBlock}>
								<Image width="344" height="95" src={computerIcon} />
								<div className={$class.offerItemTitle}>
									РЕМОНТ <br />
									КОМПЬЮТЕРОВ
								</div>
							</div>
							<div className={$class.offerItemList}>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Замена блока питания
								</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Замена материнской платы
								</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Замена жесткого диска
								</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Замена видеокарты
								</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Восстановление данных
								</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Чистка компьютера от пыли
								</div>
								<div />
								<div className={$class.offerItemListText}>и другое...</div>
							</div>
							<AppButton buttonClass="offer">подробности и цены</AppButton>
						</div>
						<div className={$class.offerItem}>
							<div className={$class.offerItemBlock}>
								<Image width="344" height="95" src={notebookIcon} />
								<div className={$class.offerItemTitle}>
									РЕМОНТ <br />
									ноутбуков
								</div>
							</div>
							<div className={$class.offerItemList}>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Ремонт залитого ноутбука
								</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Замена клавиатуры
								</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>Замена экрана</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Замена термопасты
								</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>Чистка от пыли</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Замена жесткого диска
								</div>
								<div />
								<div className={$class.offerItemListText}>и другое...</div>
							</div>
							<AppButton buttonClass="offer">подробности и цены</AppButton>
						</div>
						<div className={$class.offerItem}>
							<div className={$class.offerItemBlock}>
								<Image width="344" height="95" src={monoblockIcon} />
								<div className={$class.offerItemTitle}>
									РЕМОНТ <br />
									моноблоков
								</div>
							</div>
							<div className={$class.offerItemList}>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Ремонт материнской платы
								</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Замена комплектующих
								</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Замена видеокарты
								</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Замена DVD-привода
								</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Замена комплектующих
								</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Чистка моноблока от пыли
								</div>
								<div />
								<div className={$class.offerItemListText}>и другое...</div>
							</div>
							<AppButton buttonClass="offer">подробности и цены</AppButton>
						</div>
						<div className={$class.offerItem}>
							<div className={$class.offerItemBlock}>
								<Image width="344" height="95" src={appleIcon} />
								<div className={$class.offerItemTitle}>
									РЕМОНТ техники <br />
									Apple
								</div>
							</div>
							<div className={$class.offerItemList}>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>Ремонт MacPro</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>Ремонт iMac</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>Ремонт MacBook</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>Ремонт MacMini</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Ремонт материнской платы
								</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>Замена матрицы</div>
								<div />
								<div className={$class.offerItemListText}>и другое...</div>
							</div>
							<AppButton buttonClass="offer">подробности и цены</AppButton>
						</div>
						<div className={$class.offerItem}>
							<div className={$class.offerItemBlock}>
								<Image width="344" height="95" src={buildUpdateIcon} />
								<div className={$class.offerItemTitle}>
									сборка и апгрейд <br />
									компьютеров
								</div>
							</div>
							<div className={$class.offerItemList}>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Сборка компьютера под заказ
								</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Установка жесткого диска
								</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Замена оперативной памяти
								</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Замена материнской платы
								</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Замена звуковой карты
								</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Замена видеокарты
								</div>
								<div />
								<div className={$class.offerItemListText}>и другое...</div>
							</div>
							<AppButton buttonClass="offer">подробности и цены</AppButton>
						</div>
						<div className={$class.offerItem}>
							<div className={$class.offerItemBlock}>
								<Image width="344" height="95" src={installProgramIcon} />
								<div className={$class.offerItemTitle}>
									установка ос и <br />
									программ
								</div>
							</div>
							<div className={$class.offerItemList}>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Windows XP / 7 / 8 / 10
								</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>MacOS</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>Антивирус</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Офисные программы
								</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Графические программы
								</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Работа с ПО клиента
								</div>
								<div />
								<div className={$class.offerItemListText}>и другое...</div>
							</div>
							<AppButton buttonClass="offer">подробности и цены</AppButton>
						</div>
						<div className={$class.offerItem}>
							<div className={$class.offerItemBlock}>
								<Image width="344" height="95" src={virusCleanIcon} />
								<div className={$class.offerItemTitle}>
									удаление <br />
									вирусов
								</div>
							</div>
							<div className={$class.offerItemList}>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Чистка компьютера от вирусов
								</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Чистка ноутбука от вирусов
								</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Баннеры-вымогатели
								</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>Майнеры</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Всплывающая реклама
								</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Эротические баннеры
								</div>
								<div />
								<div className={$class.offerItemListText}>и другое...</div>
							</div>
							<AppButton buttonClass="offer">подробности и цены</AppButton>
						</div>
						<div className={$class.offerItem}>
							<div className={$class.offerItemBlock}>
								<Image width="344" height="95" src={internetIcon} />
								<div className={$class.offerItemTitle}>
									настройка
									<br /> интернета
								</div>
							</div>
							<div className={$class.offerItemList}>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Подключение проводного и
								</div>
								<div />
								<div className={$class.offerItemListText}>
									беспроводного интернета
								</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Прокладка интернет-кабелей
								</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Настройка роутера
								</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Настройка Wi-Fi адаптора
								</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Настройка ADSL интернета
								</div>
								<div />
								<div className={$class.offerItemListText}>и другое...</div>
							</div>
							<AppButton buttonClass="offer">подробности и цены</AppButton>
						</div>
						<div className={$class.offerItem}>
							<div className={$class.offerItemBlock}>
								<Image width="344" height="95" src={corporateClientIcon} />
								<div className={$class.offerItemTitle}>
									корпоративным <br />
									клиентам
								</div>
							</div>
							<div className={$class.offerItemList}>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Создание локальной сети
								</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Настройка облачных сервисов
								</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Настройка серверов
								</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Обслуживание серверов
								</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>
									Обслуживание компьютеров
								</div>
								<Image src={checkIcon} width="16" height="15" />
								<div className={$class.offerItemListText}>IT-поддержка</div>
								<div />
								<div className={$class.offerItemListText}>и другое...</div>
							</div>
							<AppButton buttonClass="offer">подробности и цены</AppButton>
						</div>
					</div>
				</div>
			</section>
			<section className={$class.problem}>
				<h2 className={$class.h2}>НЕ РАБОТАЕТ КОМПЬЮТЕР?</h2>
				<hr className={$class.hr} />
				<div className={$class.steps}>
					<div className={$class.phone}>
						<Image src={handWithPhone} height="625" width="555" />
					</div>
					<div />
				</div>
			</section>
			<section className={$class.masterCall}>
				<div className={$class.container}>
					<h2 className={$class.h2}>
						<span>НЕ РАБОТАЕТ КОМПЬЮТЕР?</span>
					</h2>
					<div className={$class.form}>
						<MainForm />
					</div>
				</div>
			</section>
		</>
	)
}
