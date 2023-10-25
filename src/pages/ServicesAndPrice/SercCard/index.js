import React from 'react'

export const SercCard = ({ title, border, color }) => {
	const trans = {
		transition: 'color .55s var(--tr1),border 1ms',
		borderLeft: border,
		color: color
	}
	return (
		<>
			<button
				style={trans}
				className='text-left hover:border-l text-white_20 border-solid hover:border-yellow  hover:text-white hover:pl-[21px] pl-[22px] sercCard w-[360px] h-[50px]'
			>
				<div className='cursor-pointer  '>
					<h4 className='  font-bold font-CN leading-6 text-lg'>{title}</h4>
				</div>
			</button>
		</>
	)
}
