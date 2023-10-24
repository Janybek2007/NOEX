import React from 'react'
import { Link } from 'react-router-dom'
import { notFounds } from '../../img'

const NotFound = () => {
	return (
		<>
			<div className='notFound'>
				<div className='container'>
					<div className='flex items-center w-full justify-between mt-[160px]'>
						<h4 className=' text-5xl font-Mont font-bold uppercase text-gray'>
							Страница не найдена
						</h4>
						<Link to='/'>
							<button className='flex items-center gap-[10px] justify-center text-center font-CN text-lg font-bold text-gray'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='55'
									height='12'
									viewBox='0 0 55 12'
									fill='none'
								>
									<path
										d='M54.0527 5.99999L0.999511 6M0.999511 6L6.60954 11.61M0.999511 6L6.60953 0.389974'
										stroke='#E5E5E5'
									/>
								</svg>
								На главную
							</button>
						</Link>
					</div>
					<hr className='w-full h-[1px] bg-white_20 mb-[33px] mt-[60px]' />
					<div className='flex h-[90vh] items-center justify-center text-center relative'>
						<img className=' absolute' src={notFounds} alt='img' />
						<div className='flex flex-col items-center justify-center'>
							<span className='text-[288px] uppercase text-gray font-bold font-Mont leading-[345px]'>
								404
							</span>
							<h4 className='text-4xl uppercase text-gray font-bold font-Mont'>
								Упс... страница не найдена
							</h4>
							<Link to='/'>
								<button className='mt-[60px] text-grayDark text-sm  font-CN font-bold uppercase leading-normal py-[15px] px-[30px] bg-yellow '>
									Перейти На главную
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default NotFound
