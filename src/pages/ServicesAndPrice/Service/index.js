import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SercCard } from '../SercCard'
import MovieSercCard from '../MovieSercCards'

const Service = () => {
	const [activeCard, setActiveCard] = useState(1)

	const handleCardClick = cardNumber => {
		setActiveCard(cardNumber)
	}

	return (
		<>
			<div className='service'>
				<div className='container'>
					<div className='flex items-center w-full justify-between mt-[160px]'>
						<h4 className=' text-5xl font-Mont font-bold uppercase text-gray'>
							Услуги
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
					<div className='flex items-start justify-between gap-[60px]'>
						<div className='flex flex-col items-start gap-[30px]'>
							<SercCard
								onClick={() => handleCardClick(1)}
								color={activeCard === 1 ? 'white' : 'var(--white-20)'}
								border={activeCard === 1 ? '1px solid var(--Yellow)' : ''}
								title={'Инженерно-геологические изыскания'}
							/>
							<SercCard
								onClick={() => handleCardClick(2)}
								title={'Инженерно-геодезические изыскания'}
							/>
							<SercCard
								onClick={() => handleCardClick(3)}
								title={'Инженерно-экологические изыскания'}
							/>
							<SercCard
								onClick={() => handleCardClick(4)}
								title={'Инженерно-гидрометеорологические изыскания'}
							/>
							<SercCard
								onClick={() => handleCardClick(5)}
								title={'Инженерно-геотехнический изыскания'}
							/>
						</div>
						<div className='flex flex-col items-start movieSercCards'>
							{/* {renderMovieSercCards()} */}
							{activeCard === 1 && <One />}
							{activeCard === 2 && <Two />}
							{activeCard === 3 && <Three />}
							{activeCard === 4 && <Four />}
							{activeCard === 5 && <Five />}
							<button className=' mt-[40px] bg-yellow py-[15px] px-[30px] text-blackSecond text-sm font-bold underline uppercase font-CN'>
								Оставить заявку
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

const One = () => {
	return (
		<>
			<MovieSercCard
				titles={'Штамповые испытания грунтов'}
				button={'Перейти'}
			/>
			<hr className='w-full h-[1px] bg-white_20 my-[30px]' />
			<MovieSercCard
				titles={'Бурение инженерно-геологических скважин'}
				button={'Подробнее'}
			/>
			<hr className='w-full h-[1px] bg-white_20 my-[30px]' />
			<MovieSercCard
				titles={'Прессиометрические испытания грунтов'}
				button={'Подробнее'}
			/>
			<hr className='w-full h-[1px] bg-white_20 my-[30px]' />
			<MovieSercCard titles={'Горнопроходческие работы'} button={'Подробнее'} />
			<hr className='w-full h-[1px] bg-white_20 my-[30px]' />
			<MovieSercCard
				titles={'Расчеты размера возможного карстового провала'}
				button={'Подробнее'}
			/>
			<hr className='w-full h-[1px] bg-white_20 my-[30px]' />
			<MovieSercCard
				titles={'Расчеты геологических опасностей и рисков'}
				button={'Подробнее'}
			/>
			<hr className='w-full h-[1px] bg-white_20 my-[30px]' />
		</>
	)
}
const Two = () => {
	return (
		<>
			<MovieSercCard
				titles={'Штамповые испытания грунтов2'}
				button={'Перейти'}
			/>
			<hr className=' w-full h-[1px] bg-white_20 my-[30px]' />

			<MovieSercCard
				titles={'Бурение инженерно-геологических скважин2'}
				button={'Подробнее'}
			/>
			<hr className=' w-full h-[1px] bg-white_20 my-[30px]' />

			<MovieSercCard
				titles={'Прессиометрические испытания грунтов2'}
				button={'Подробнее'}
			/>
			<hr className=' w-full h-[1px] bg-white_20 my-[30px]' />

			<MovieSercCard
				titles={'Горнопроходческие работы2'}
				button={'Подробнее'}
			/>
			<hr className=' w-full h-[1px] bg-white_20 my-[30px]' />

			<MovieSercCard
				titles={'Расчеты размера возможного карстового провала2'}
				button={'Подробнее'}
			/>
			<hr className=' w-full h-[1px] bg-white_20 my-[30px]' />

			<MovieSercCard
				titles={'Расчеты геологических опасностей и рисков2'}
				button={'Подробнее'}
			/>
			<hr className=' w-full h-[1px] bg-white_20 my-[30px]' />
		</>
	)
}
const Three = () => {
	return (
		<>
			<MovieSercCard
				titles={'Штамповые испытания грунтов3'}
				button={'Перейти'}
			/>
			<hr className=' w-full h-[1px] bg-white_20 my-[30px]' />

			<MovieSercCard
				titles={'Бурение инженерно-геологических скважин3'}
				button={'Подробнее'}
			/>
			<hr className=' w-full h-[1px] bg-white_20 my-[30px]' />

			<MovieSercCard
				titles={'Прессиометрические испытания грунтов3'}
				button={'Подробнее'}
			/>
			<hr className=' w-full h-[1px] bg-white_20 my-[30px]' />

			<MovieSercCard
				titles={'Горнопроходческие работы3'}
				button={'Подробнее'}
			/>
			<hr className=' w-full h-[1px] bg-white_20 my-[30px]' />

			<MovieSercCard
				titles={'Расчеты размера возможного карстового провала3'}
				button={'Подробнее'}
			/>
			<hr className=' w-full h-[1px] bg-white_20 my-[30px]' />

			<MovieSercCard
				titles={'Расчеты геологических опасностей и рисков3'}
				button={'Подробнее'}
			/>
			<hr className=' w-full h-[1px] bg-white_20 my-[30px]' />
		</>
	)
}
const Four = () => {
	return (
		<>
			<MovieSercCard
				titles={'Штамповые испытания грунтов4'}
				button={'Перейти'}
			/>
			<hr className=' w-full h-[1px] bg-white_20 my-[30px]' />

			<MovieSercCard
				titles={'Бурение инженерно-геологических скважин4'}
				button={'Подробнее'}
			/>
			<hr className=' w-full h-[1px] bg-white_20 my-[30px]' />

			<MovieSercCard
				titles={'Прессиометрические испытания грунтов4'}
				button={'Подробнее'}
			/>
			<hr className=' w-full h-[1px] bg-white_20 my-[30px]' />

			<MovieSercCard
				titles={'Горнопроходческие работы4'}
				button={'Подробнее'}
			/>
			<hr className=' w-full h-[1px] bg-white_20 my-[30px]' />

			<MovieSercCard
				titles={'Расчеты размера возможного карстового провала4'}
				button={'Подробнее'}
			/>
			<hr className=' w-full h-[1px] bg-white_20 my-[30px]' />

			<MovieSercCard
				titles={'Расчеты геологических опасностей и рисков4'}
				button={'Подробнее'}
			/>
			<hr className=' w-full h-[1px] bg-white_20 my-[30px]' />
		</>
	)
}
const Five = () => {
	return (
		<>
			<MovieSercCard
				titles={'Штамповые испытания грунтов5'}
				button={'Перейти'}
			/>
			<hr className=' w-full h-[1px] bg-white_20 my-[30px]' />

			<MovieSercCard
				titles={'Бурение инженерно-геологических скважин5'}
				button={'Подробнее'}
			/>
			<hr className=' w-full h-[1px] bg-white_20 my-[30px]' />

			<MovieSercCard
				titles={'Прессиометрические испытания грунтов5'}
				button={'Подробнее'}
			/>
			<hr className=' w-full h-[1px] bg-white_20 my-[30px]' />

			<MovieSercCard
				titles={'Горнопроходческие работы5'}
				button={'Подробнее'}
			/>
			<hr className=' w-full h-[1px] bg-white_20 my-[30px]' />

			<MovieSercCard
				titles={'Расчеты размера возможного карстового провала5'}
				button={'Подробнее'}
			/>
			<hr className=' w-full h-[1px] bg-white_20 my-[30px]' />

			<MovieSercCard
				titles={'Расчеты геологических опасностей и рисков5'}
				button={'Подробнее'}
			/>
			<hr className=' w-full h-[1px] bg-white_20 my-[30px]' />
		</>
	)
}

export default Service
