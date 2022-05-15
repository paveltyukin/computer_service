import { FC } from 'react'
import $class from './Tooltip.module.sass'
import { gql, useQuery } from '@apollo/client'
import TooltipItem from '@/components/UI/Tooltip/TooltipItem/TooltipItem'

const SEARCH_DATA = gql`
	query search($search: String!) {
		search(search: $search) {
			id
			title
			description
		}
	}
`

interface TooltipProps {
	type: string
	search: string
}

export const Tooltip: FC<TooltipProps> = ({ type, search }) => {
	const { loading, error, data } = useQuery(SEARCH_DATA, {
		variables: { search },
	})

	if (loading) {
		return <div>Loading...</div>
	}

	if (error) {
		console.error(error)
		return <div>Error!</div>
	}

	console.log(data)

	return (
		<div className={$class.tooltip}>
			<TooltipItem data={data} />
		</div>
	)
}
