import React from 'react'
import { Link } from 'react-router-dom'
import { city1, city2, city3, city4, city5, city6 } from '../../img'

const Projects = () => {
	return (
		<>
			<div className='projects my-[160px]'>
				<div className='container'>
					<div className='flex items-center w-full justify-between'>
						<h4 className=' text-5xl font-Mont font-bold uppercase text-gray'>
							ПРоекты
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
					<hr className='w-full h-[1px] bg-white_20 my-[60px]' />
					<div className='flex flex-col items-start'>
						<div className='flex'>
							<label
								className=' bg-grayDark rounded-sm text-gray font-CN font-bold text-lg text-center py-[10px] px-[20px]'
								htmlFor='radio1'
							>
								<input
									type='radio'
									name='radio'
									id='radio1'
									className='hidden'
								/>
								За все время
							</label>
							<label
								className='text-gray font-CN font-bold text-lg text-center py-[10px] px-[20px]'
								htmlFor='radio2'
							>
								<input
									type='radio'
									name='radio'
									id='radio2'
									className='hidden'
								/>
								2010-2020
							</label>
							<label
								className='text-gray font-CN font-bold text-lg text-center py-[10px] px-[20px]'
								htmlFor='radio3'
							>
								<input
									type='radio'
									name='radio'
									id='radio3'
									className='hidden'
								/>
								2000-2010
							</label>
							<label
								className='text-gray font-CN font-bold text-lg text-center py-[10px] px-[20px]'
								htmlFor='radio4'
							>
								<input
									type='radio'
									name='radio'
									id='radio4'
									className='hidden'
								/>
								1990-2000
							</label>
						</div>
						<div className='flex flex-col items-start mt-[60px]'>
							<City />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export const City = () => {
	const cityInfo = [
		{
			id: 1,
			year: '1993-2015',
			img: city1,
			cityName: 'Москва-Сити',
			cityTitle:
				'Оказание полного спектра услуг на двенадцати основных объектах комплекса «Москва сити',
			button: 'Подробнее'
		},
		{
			id: 2,
			year: '2013-2014',
			img: city2,
			cityName: 'АТК на Кутузовском',
			cityTitle:
				'Актуализация инженерно-геологических изысканий на участке строительства административно-торгового комплекса',
			button: 'Подробнее'
		},
		{
			id: 3,
			year: '2012',
			img: city3,
			cityName: 'Завод ЗИЛ',
			cityTitle:
				'Реконструкция легендарного автогиганта, завода «ЗИЛ» Бурение инженерно-геологических скеважин до глубины 70 м, геофизические исследования',
			button: 'Подробнее'
		},
		{
			id: 4,
			year: '2012-2013',
			img: city4,
			cityName: 'Станция Окская',
			cityTitle:
				'Бурение, геофизический каротаж, грунтовые и штамповые испытания, оборудование скважин, опытно-фильтрационные работы, лабораторные исследования, моделирование',
			button: 'Подробнее'
		},
		{
			id: 5,
			year: '2010-2011',
			img: city5,
			cityName: 'ТРК Авиапарк',
			cityTitle:
				'Бурение, испытания грунтов методами статического зондирования, штамповые испытания, лабораторные исследования',
			button: 'Подробнее'
		},
		{
			id: 6,
			year: '2007-2010',
			img: city6,
			cityName: 'Стадион Спартак',
			cityTitle:
				'Инженерно-геологические изыскания, в результате которых приняты и воплощаются в жизнь оригинальные архитектурные и инженерные решения',
			button: 'Подробнее'
		}
	]

	return (
		<>
			{cityInfo.map((el, idx) => (
				<>
					<div className='flex items-start justify-start' key={el.id}>
						<h4 className='text-lg font-bold font-CN text-gray'>{el.year}</h4>
						<img
							className={`${
								el.id === 3 ? ' ml-[148px]' : 'ml-[94px]'
							}   mr-[59px]`}
							src={el.img}
							alt='img'
						/>
						<div
							className='flex flex-col items-start justify-between h-[376px] gap-5 w-[570px]'
							key={idx}
						>
							<div className='flex flex-col items-start gap-5'>
								<h4 className=' text-2xl font-Mont font-bold text-gray'>
									{el.cityName}
								</h4>
								<p className='text-gray opacity-[.7] font-CN font-normal leading-7 w-[570px]'>
									{el.cityTitle}
								</p>
							</div>
							<Link to='/ProjectPage'>
								<button className=' text-yellow font-CN font-bold text-sm uppercase underline'>
									{el.button}
								</button>
							</Link>
						</div>
					</div>
					{el.id === 6 ? (
						''
					) : (
						<hr className=' w-full h-[1px] bg-white_20 my-[60px]' />
					)}
				</>
			))}
		</>
	)
}

export default Projects
