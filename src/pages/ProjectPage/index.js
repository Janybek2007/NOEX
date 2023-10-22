import React from 'react'
import { Link } from 'react-router-dom'
import {
	down1,
	down2,
	down3,
	down4,
	down5,
	down6,
	down7,
	down8,
	down9
} from '../../img'
const ProjectPage = () => {
	return (
		<>
			<div className='projectPage my-[160px]'>
				<div className='container'>
					<div className='flex items-center w-full justify-between'>
						<h4 className=' text-5xl font-Mont font-bold uppercase text-gray'>
							Москва-Сити
						</h4>
						<Link to='/Project'>
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
								К проектам
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
								Все даты
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
							<Down />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export const Down = () => {
	const DownInfo = [
		{
			id: 1,
			year: '2013-2008',
			h5: 'Renaissance Moscow Towers',
			title:
				'Актуализация инженерно-геологических изысканий на уч. № 17-18 ММДЦ «Москва-Сити». Бурение инженерно-геологических скважин до глубины 100 м, прессиометрические испытания, лабораторные исследования, гидрогеологическое моделирование Результаты работ прошли государственную экспертизу, ведется строительство.',
			img: down1
		},
		{
			id: 2,
			year: '2007',
			h5: 'Башня «Россия»',
			title:
				'Башня «Россия» на уч. №17-18 ММДЦ «Москва-Сити». Бурение более 60 инженерно-геологических скважин глубиной до 100 м, геофизические исследования, межскважинное сейсмическое прозвучивание, прессиометрические испытания, опытно-фильтрационные работы, лабораторные исследования, гидрогеологическое и геомеханическое моделирование, и другие исследования для реализации этого уникального проекта',
			img: down2
		},
		{
			id: 3,
			h5: 'Башни «Око»',
			year: '2007',
			title:
				'Башня «Россия» на уч. №17-18 ММДЦ «Москва-Сити». Бурение более 60 инженерно-геологических скважин глубиной до 100 м, геофизические исследования, межскважинное сейсмическое прозвучивание, прессиометрические испытания, опытно-фильтрационные работы, лабораторные исследования, гидрогеологическое и геомеханическое моделирование, и другие исследования для реализации этого уникального проекта',
			img: down3
		},
		{
			id: 4,
			h5: 'Башня «Эволюция»',
			year: '2006',
			title:
				'Башня «Evolution» на уч. 2-3 ММДЦ «Москва-Сити» Бурение инженерно-геологических скважин до глубины 40-80 м, прессиометрические испытания грунтов, опытно-фильтрационные работы, лабораторные исследования, гидрогеологическое моделирование, оценка геологических рисков. Строительство завершено в 2014 году',
			img: down4
		},
		{
			id: 5,
			h5: 'Выставочно-деловой комплекс',
			year: '2013-2008',
			title:
				'Анализ геологических условий территории ММДЦ «Москва-Сити» в предпроектных предложениях. Анализ материалов изысканий на разных участках ММДЦ «Москва-Сити», гидрогеологическое и геомеханическое моделирование',
			img: down5
		},
		{
			id: 6,
			h5: 'Комплекс «Северная Башня»',
			year: '2004',
			title:
				'Комплекс «Северная башня» на уч. №19 ММДЦ «Москва-Сити». Дополнительные исследования для уточнения закарстованности массива» Бурение инженерно-геологических скважин глубиной до 20 м, лабораторные исследования. Сооружение построено в 2005 году',
			img: down6
		},
		{
			id: 7,
			h5: 'Комплекс «Федерация»',
			year: '2003-2004',
			title:
				'Комплекс «Федерация» на 13-м участке ММДЦ «Москва-Сити». Бурение инженерно-геологических скважин до глубины 50-100 м, проведение геофизического каротажа, опытно-фильтрационные работы, лабораторные исследования, электромагнитное обследование участка. Проект находится в завершающей стадии строительства',
			img: down7
		},
		{
			id: 8,
			year: '2001',
			title:
				'Высотное здание на уч. 4 ММДЦ «Москва-Сити». Бурение инженерно-геологических скважин, лабораторные исследования, опытно-фильтрационные работы. Проект реализован в 2011 г. в измененном виде',
			img: down8
		},
		{
			id: 9,
			year: '1996-2015',
			h5: 'Гидрогеологичес-кий мониторинг территории',
			title:
				'Высотное здание на уч. 4 ММДЦ «Москва-Сити». Бурение инженерно-геологических скважин, лабораторные исследования, опытно-фильтрационные работы. Проект реализован в 2011 г. в измененном виде',
			img: down9
		}
	]
	return (
		<>
			{DownInfo.map((el, idx) => (
				<>
					<div className='flex items-start gap-[60px] h-[588px]' key={el.id}>
						<div
							key={idx}
							className='start flex flex-col w-[255px] h-full items-start justify-between gap-3'
						>
							<h5 className='text-2xl font-Mont font-bold text-gray leading-8'>
								{el.h5}
							</h5>
							<span className='text-2xl font-Mont font-medium text-white_20'>
								{el.year}
							</span>
						</div>
						<div
							key={idx}
							className='end flex w-[885px] flex-col items-start gap-5'
						>
							<p className='text-gray font-CN font-normal text-lg leading-7 opacity-[.7]'>
								{el.title}
							</p>
							<img src={el.img} alt='img' />
						</div>
					</div>
					{el.id === 9 ? (
						''
					) : (
						<hr className=' w-full h-[1px] bg-white_20 my-[60px]' />
					)}
				</>
			))}
		</>
	)
}

export default ProjectPage
