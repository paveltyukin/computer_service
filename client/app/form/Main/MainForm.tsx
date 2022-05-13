import React, { FC } from 'react'
import { AppInputText } from '@/components/UI/AppInputText/AppInputText'
// import { AppInputMask } from '@/components/UI/AppInputMask/AppInputMask'
// import { AppInputTextArea } from '@/components/UI/AppInputTextArea/AppInputTextArea'
import { useForm } from 'react-hook-form'

interface MainFormProps {
	device: string
}

export const MainForm: FC = () => {
	const { control, handleSubmit } = useForm<MainFormProps>({
		defaultValues: { device: '' },
		mode: 'onTouched',
	})

	const onSubmit = async (data: MainFormProps) => console.log(data)

	return (
		<form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
			<AppInputText
				name="device"
				control={control}
				labelText="Выберите устройство"
				showIcon={true}
				tooltipType="device"
			/>
			{/*<AppInputText>Выберите производителя</AppInputText>*/}
			{/*<AppInputText>Ваше имя *</AppInputText>*/}
			{/*<AppInputMask>Ваш телефон *</AppInputMask>*/}
			{/*<AppInputTextArea>Опишите проблему</AppInputTextArea>*/}
		</form>
	)
}
