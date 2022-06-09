import React, { FC } from 'react'
// import { AppInputText } from '@/components/../../ui/AppInputText/AppInputText'
// import { AppInputMask } from '@/components/ui/AppInputMask/AppInputMask'
// import { AppInputTextArea } from '@/components/ui/AppInputTextArea/AppInputTextArea'
import { useForm } from 'react-hook-form'

interface MainFormProps {
	device: string
	manufacturer: string
}

export const MainForm: FC = () => {
	const { control, handleSubmit } = useForm<MainFormProps>({
		defaultValues: { device: '', manufacturer: '' },
		mode: 'onTouched',
	})

	const onSubmit = async (data: MainFormProps) => console.log(data)

	return (
		<form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
			{/*<AppInputText*/}
			{/*	name="manufacturer"*/}
			{/*	control={control}*/}
			{/*	labelText="Выберите производителя"*/}
			{/*	showIcon={true}*/}
			{/*	hasTooltip={true}*/}
			{/*/>*/}
			{/*<AppInputText*/}
			{/*	name="device"*/}
			{/*	control={control}*/}
			{/*	labelText="Выберите устройство"*/}
			{/*	showIcon={true}*/}
			{/*	hasTooltip={true}*/}
			{/*/>*/}
			{/*<AppInputText>Выберите производителя</AppInputText>*/}
			{/*<AppInputText>Ваше имя *</AppInputText>*/}
			{/*<AppInputMask>Ваш телефон *</AppInputMask>*/}
			{/*<AppInputTextArea>Опишите проблему</AppInputTextArea>*/}
		</form>
	)
}
