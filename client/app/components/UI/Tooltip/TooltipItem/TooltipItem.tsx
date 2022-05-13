import React, { FC } from 'react'

interface TooltipItemProps {
	data: any
}

const TooltipItem: FC<TooltipItemProps> = ({ data }) => {
	return <div>{data.map((item: any) => item.name)}</div>
}

export default TooltipItem
