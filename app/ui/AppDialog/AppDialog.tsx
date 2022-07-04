import $class from './AppDialog.module.sass'
import { AppInputText } from '@/ui/AppInputText/AppInputText'
import { useForm } from 'react-hook-form'

interface MainFormProps {
	device: string
}

export const AppDialog = () => {
	const { control, handleSubmit } = useForm<MainFormProps>({
		defaultValues: { device: '' },
		mode: 'onTouched',
	})

	const onSubmit = async (data: MainFormProps) => console.log(data)

	return (
		<div className={$class.wrapper}>
			<form
				className={$class.form}
				onSubmit={handleSubmit(onSubmit)}
				autoComplete="off"
			>
				<p>Вызвать мастера</p>
				<AppInputText
					name="device"
					control={control}
					labelText="Выберите устройство"
					showIcon={true}
				/>
			</form>
		</div>
	)
}
