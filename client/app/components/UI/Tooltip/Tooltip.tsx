import { FC } from 'react'
import $class from './Tooltip.module.sass'
import { gql, useQuery } from '@apollo/client'
import { TooltipItem } from '@/components/UI/Tooltip/TooltipItem/TooltipItem'

const getSearchQuery = (data: string) => {
	if (data === 'manufacturer') {
		return gql`
			query search($search: String!) {
				getManufacturersBySearch(search: $search) {
					id
					title
					description
				}
			}
		`
	}

	return gql`
		query search($search: String!, $manufacturerId: Float) {
			getDevicesBySearch(search: $search, manufacturerId: $manufacturerId) {
				id
				title
				description
			}
		}
	`
}

interface TooltipProps {
	type: 'manufacturer' | 'device'
	search: string
	manufacturerId?: number
}

export const Tooltip: FC<TooltipProps> = ({ type, search, manufacturerId }) => {
	const { loading, error, data } = useQuery(getSearchQuery(type), {
		variables: { search, manufacturerId },
	})

	if (loading) {
		return <div>Loading...</div>
	}

	if (error) {
		console.error(error)
		return <div>Error!</div>
	}

	return (
		<div className={$class.tooltip}>
			{type === 'device' && data.getDevicesBySearch && (
				<TooltipItem data={data.getDevicesBySearch} />
			)}
			{type === 'manufacturer' && data.getManufacturersBySearch && (
				<TooltipItem data={data.getManufacturersBySearch} />
			)}
		</div>
	)
}
