import Head from 'next/head'
import React, { FC } from 'react'
import $class from './Layout.module.sass'
import classNames from 'classnames'
import { AppButton } from '@/components/UI/AppButton/AppButton'
// import background from '@/assets/images/background.svg'
import Image from 'next/image'
import computerIcon from '@/assets/images/icons/computer.svg'
import notebookIcon from '@/assets/images/icons/notebook.svg'
import monoblockIcon from '@/assets/images/icons/monoblock.svg'
import virusCleanIcon from '@/assets/images/icons/virus-clean.svg'
import internetIcon from '@/assets/images/icons/internet.svg'
import corporateClientIcon from '@/assets/images/icons/corporate.svg'
import appleIcon from '@/assets/images/icons/apple.svg'
import buildUpdateIcon from '@/assets/images/icons/build-update.svg'
import installProgramIcon from '@/assets/images/icons/install-program.svg'
import handWithPhone from '@/assets/images/hand-with-phone.png'
import checkIcon from '@/assets/images/icons/check.svg'
import { MainForm } from '../../form/Main/MainForm'
import { Home } from '@/components/Home/Home'

export const Layout: FC = () => {
	return (
		<>
			<Head>
				<title itemProp="headline">Компьютерная помощь</title>
				<meta itemProp="description" name="description" />
			</Head>
			<Home />
		</>
	)
}
