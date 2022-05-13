import { FC } from 'react'
import $class from './Tooltip.module.sass'
import { gql, useQuery } from '@apollo/client'
import TooltipItem from '@/components/UI/Tooltip/TooltipItem/TooltipItem'

const GET_MY_TODOS = gql`
	query getMyTodos {
		todos(
			where: { is_public: { _eq: false } }
			order_by: { created_at: desc }
		) {
			id
			title
			created_at
			is_completed
		}
	}
`

interface TooltipProps {
	type: string
}

export const Tooltip: FC<TooltipProps> = ({ type }) => {
	const { loading, error, data } = useQuery(GET_MY_TODOS)

	if (loading) {
		return <div>Loading...</div>
	}

	if (error) {
		console.error(error)
		return <div>Error!</div>
	}

	return (
		<div className={$class.tooltip}>
			<TooltipItem data={data} />
		</div>
	)
}
