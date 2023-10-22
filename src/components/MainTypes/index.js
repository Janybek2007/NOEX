import React from 'react'
import { stone, tree, level } from '../../img'
const MainTypes = () => {
	return (
		<>
			<div className='mainTypes mb-[160px]'>
				<div className='container flex flex-col items-start gap-[90px]'>
					<h4 className='w-[603px] text-grayLight text-4xl font-Mont font-bold uppercase leading-[43px]'>
						Освновные виды инжерерных изысканий
					</h4>
					<div className='flex items-start w-full justify-between gap-2'>
						<h5 className='text-yellow text-sm font-CN font-bold w-[240px]'>
							Главные направления деятельности
						</h5>
						<RightTitles />
					</div>
				</div>
			</div>
		</>
	)
}

const RightTitles = () => {
	const tiltes = [
		{
			id: 1,
			img: stone,
			h2: 'Геологические',
			p: 'Получение востребованных материалов исследований для обоснования возможностей проектирования и стройки в существующей геологической ситуации',
			button: 'Подробнее'
		},
		{
			id: 2,
			img: level,
			h2: 'Геодезические',
			p: 'Комплексные мероприятия по изучению и анализу ситуационных данных о рельефе земельного участка, его гидросети, растительности, текущем использовании, наличии и расположении зданий и сооружений, линейных объектов, наземных и подземных коммуникаций',
			button: 'Подробнее'
		},
		{
			id: 3,
			img: tree,
			h2: 'Экологические',
			p: 'Мероприятия по изучению и мониторингу текущего состояния окружающей среды, прогнозирование вероятных негативных изменений экосистемы от социально-экономических факторов и техногенной нагрузки',
			button: 'Подробнее'
		}
	]
	return (
		<>
			<div className='flex flex-col items-start w-[782px]'>
				{tiltes.map((el, idx) => (
					<div className=''>
						<div className='flex items-center h-[235px] gap-[60px]' key={idx}>
							<img src={el.img} alt='ImageStone' />
							<div className='flexTitles flex flex-col items-start'>
								<h2 className='text-2xl text-grayLight font-Mont font-medium'>
									{el.h2}
								</h2>
								<p className='w-[658px] text-lg text-gray my-[30px] font-Mont font-normal'>
									{el.p}
								</p>
								<button className='tMore relative text-yellow text-sm font-CN font-bold '>
									{el.button}
								</button>
							</div>
						</div>
						<hr className='h-[1px] w-full bg-white_20 my-8' />
					</div>
				))}
			</div>
		</>
	)
}

export default MainTypes
