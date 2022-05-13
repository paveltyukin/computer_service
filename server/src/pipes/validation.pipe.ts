import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common'
import { validate } from 'class-validator'
import { ValidationException } from '../exceptions/validation.exception'
import { plainToInstance } from 'class-transformer'

@Injectable()
export class ValidationPipe implements PipeTransform {
	async transform(value: any, { metatype }: ArgumentMetadata): Promise<any> {
		if (!metatype || !ValidationPipe.toValidate(metatype)) {
			return value
		}

		const obj = plainToInstance(metatype, value)
		const errors = await validate(obj)

		if (errors.length) {
			const messages = {}

			errors.forEach((err) => {
				messages[err.property] = Object.values(err.constraints).join(', ')
			})

			throw new ValidationException({ message: messages })
		}

		return value
	}

	private static toValidate(metatype: Function): boolean {
		const types: Function[] = [String, Boolean, Number, Array, Object]
		return !types.includes(metatype)
	}
}
