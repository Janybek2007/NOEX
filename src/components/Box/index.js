import React from 'react'
import { bgBoxes } from '../../img'

const style = {
	background: `url(${bgBoxes})`,
	backgroundSize: 'cover',
	backgroundReapeat: 'no-repat',
	height: '520px'
}
const Box = () => {
	return (
		<>
			<div className='box my-24'>
				<div className='container flex items-end justify-end' style={style}>
					<div className='boxes px-[50px] py-[40px] w-[676px] h-[220px] bg-blackSecond backdrop-blur-[25px]'>
						<p className='text-gray font-mono font-normal text-[20px] leading-7'>
							Для нас любой проект – это проработка всех возможных результатов,
							с целью принятия единственно верного решения. В среднем, сроки
							выполнения полного цикла работ по инженерным изысканиям занимают{' '}
							<span className='text-yellow font-bold'>1 месяц</span>
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Box
