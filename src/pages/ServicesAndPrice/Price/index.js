import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Price = () => {
	return (
		<>
			<div className='price'>
				<div className='container'>
					<div className='flex items-center w-full justify-between mt-[160px]'>
						<h4 className=' text-5xl font-Mont font-bold uppercase text-gray'>
							Цены
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
						<PriceCard />
					</div>
					<div className=' w-full flex items-center justify-center mt-10'>
						<button className='text-sm font-bold font-CN text-center rounded-sm text-blackSecond uppercase bg-yellow py-[15px] px-[30px]'>
							Оставить заявку
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

const PriceCard = () => {
	const infoPriceTitles = [
		{
			id: 1,
			text: 'Инженерно-геологические изыскания',
			title1: 'Штамповые испытания грунтов',
			title2: 'Бурение инженерно-геологических скважин',
			title3: 'Статическое зондирование грунтов',
			title4: 'Прессиометрические испытания грунтов',
			title5: 'Горнопроходческие работы',
			title6: 'Расчеты размера возможного карстового провала',
			title7: 'Расчеты геологических опасностей и рисков',
			span1: 'От 18 000₽ / опыт',
			span2: 'От 600₽ / п. м.',
			span3: 'От 400₽ / п. м.',
			span4: 'От 10 000₽ / опыт',
			span5: 'От 3 500₽ / р. м.',
			span6: 'От 10 000₽',
			span7: 'От 10 000₽'
		},
		{
			id: 2,
			text: 'Инженерно-геодезические изыскания',
			title1: 'Штамповые испытания грунтов',
			title2: 'Бурение инженерно-геологических скважин',
			title3: 'Статическое зондирование грунтов',
			title4: 'Прессиометрические испытания грунтов',
			title5: 'Горнопроходческие работы',
			title6: 'Расчеты размера возможного карстового провала',
			title7: 'Расчеты геологических опасностей и рисков',
			span1: 'От 18 000₽ / опыт',
			span2: 'От 600₽ / п. м.',
			span3: 'От 400₽ / п. м.',
			span4: 'От 10 000₽ / опыт',
			span5: 'От 3 500₽ / р. м.',
			span6: 'От 10 000₽',
			span7: 'От 10 000₽'
		},
		{
			id: 3,
			text: 'Инженерно-экологические изыскания',
			title1: 'Штамповые испытания грунтов',
			title2: 'Бурение инженерно-геологических скважин',
			title3: 'Статическое зондирование грунтов',
			title4: 'Прессиометрические испытания грунтов',
			title5: 'Горнопроходческие работы',
			title6: 'Расчеты размера возможного карстового провала',
			title7: 'Расчеты геологических опасностей и рисков',
			span1: 'От 18 000₽ / опыт',
			span2: 'От 600₽ / п. м.',
			span3: 'От 400₽ / п. м.',
			span4: 'От 10 000₽ / опыт',
			span5: 'От 3 500₽ / р. м.',
			span6: 'От 10 000₽',
			span7: 'От 10 000₽'
		},
		{
			id: 4,
			text: 'Инженерно-метеорологические изыскания',
			title1: 'Штамповые испытания грунтов',
			title2: 'Бурение инженерно-геологических скважин',
			title3: 'Статическое зондирование грунтов',
			title4: 'Прессиометрические испытания грунтов',
			title5: 'Горнопроходческие работы',
			title6: 'Расчеты размера возможного карстового провала',
			title7: 'Расчеты геологических опасностей и рисков',
			span1: 'От 18 000₽ / опыт',
			span2: 'От 600₽ / п. м.',
			span3: 'От 400₽ / п. м.',
			span4: 'От 10 000₽ / опыт',
			span5: 'От 3 500₽ / р. м.',
			span6: 'От 10 000₽',
			span7: 'От 10 000₽'
		},
		{
			id: 5,
			text: 'Инженерно-геофизические исследования',
			title1: 'Штамповые испытания грунтов',
			title2: 'Бурение инженерно-геологических скважин',
			title3: 'Статическое зондирование грунтов',
			title4: 'Прессиометрические испытания грунтов',
			title5: 'Горнопроходческие работы',
			title6: 'Расчеты размера возможного карстового провала',
			title7: 'Расчеты геологических опасностей и рисков',
			span1: 'От 18 000₽ / опыт',
			span2: 'От 600₽ / п. м.',
			span3: 'От 400₽ / п. м.',
			span4: 'От 10 000₽ / опыт',
			span5: 'От 3 500₽ / р. м.',
			span6: 'От 10 000₽',
			span7: 'От 10 000₽'
		},
		{
			id: 6,
			text: 'Гидрогеологические исследования',
			title1: 'Штамповые испытания грунтов',
			title2: 'Бурение инженерно-геологических скважин',
			title3: 'Статическое зондирование грунтов',
			title4: 'Прессиометрические испытания грунтов',
			title5: 'Горнопроходческие работы',
			title6: 'Расчеты размера возможного карстового провала',
			title7: 'Расчеты геологических опасностей и рисков',
			span1: 'От 18 000₽ / опыт',
			span2: 'От 600₽ / п. м.',
			span3: 'От 400₽ / п. м.',
			span4: 'От 10 000₽ / опыт',
			span5: 'От 3 500₽ / р. м.',
			span6: 'От 10 000₽',
			span7: 'От 10 000₽'
		},
		{
			id: 7,
			text: 'Геотехнические изыскания',
			title1: 'Штамповые испытания грунтов',
			title2: 'Бурение инженерно-геологических скважин',
			title3: 'Статическое зондирование грунтов',
			title4: 'Прессиометрические испытания грунтов',
			title5: 'Горнопроходческие работы',
			title6: 'Расчеты размера возможного карстового провала',
			title7: 'Расчеты геологических опасностей и рисков',
			span1: 'От 18 000₽ / опыт',
			span2: 'От 600₽ / п. м.',
			span3: 'От 400₽ / п. м.',
			span4: 'От 10 000₽ / опыт',
			span5: 'От 3 500₽ / р. м.',
			span6: 'От 10 000₽',
			span7: 'От 10 000₽'
		},
		{
			id: 8,
			text: 'Геотехнические изыскания',
			title1: 'Штамповые испытания грунтов',
			title2: 'Бурение инженерно-геологических скважин',
			title3: 'Статическое зондирование грунтов',
			title4: 'Прессиометрические испытания грунтов',
			title5: 'Горнопроходческие работы',
			title6: 'Расчеты размера возможного карстового провала',
			title7: 'Расчеты геологических опасностей и рисков',
			span1: 'От 18 000₽ / опыт',
			span2: 'От 600₽ / п. м.',
			span3: 'От 400₽ / п. м.',
			span4: 'От 10 000₽ / опыт',
			span5: 'От 3 500₽ / р. м.',
			span6: 'От 10 000₽',
			span7: 'От 10 000₽'
		}
	]
	const [activeCard, setActiveCard] = useState(null)

	const handleCardClick = cardNumber => {
		if (cardNumber === activeCard) {
			setActiveCard(null)
		} else {
			setActiveCard(cardNumber)
		}
	}
	return (
		<>
			{infoPriceTitles.map((el, idx) => (
				<div
					key={idx}
					className='price-card'
					style={{
						height: activeCard ? 'auto' : '60px',
						width: '1200px',
						overflow: 'hidden',
						transition: 'all .55s var(--tr3)'
					}}
				>
					<div className='flex flex-col items-start'>
						<div className='flex items-center gap-6'>
							<button
								onClick={() => handleCardClick(el.id)}
								// isOpen={activeCard === el.id}
								className='relative w-4 h-4'
							>
								<span className='bg-white_20 w-4 h-[2px] absolute'></span>
								<span
									style={{
										transform: el.id === activeCard ? '' : 'rotate(90deg)',
										transition: 'all .55s var(--tr3)'
									}}
									className='bg-white_20 w-4 h-[2px] absolute'
								></span>
							</button>
							<h4 className='text-gray font-Mont text-2xl font-medium leading-8'>
								{el.text}
							</h4>
						</div>
						{el.id === activeCard && (
							<div className='flex my-[20px]'>
								<div className='flex flex-col items-start w-[1164px] pl-10 ml-[35px] border-l border-solid border-yellow py-5'>
									<div className='flex w-full items-center justify-between'>
										<h4 className='text-lg font-Mont font-medium leading-6 text-gray w-[360px]'>
											{el.title1}
										</h4>
										<span className='text-right text-gray font-medium font-Mont text-lg  leading-6'>
											{el.span1}
										</span>
									</div>
									<hr className=' w-full bg-white_20 h-[1px] my-5' />
									<div className='flex w-full items-center justify-between'>
										<h4 className='text-lg font-Mont font-medium leading-6 text-gray w-[360px]'>
											{el.title2}
										</h4>
										<span className='text-right text-gray font-medium font-Mont text-lg  leading-6'>
											{el.span2}
										</span>
									</div>
									<hr className=' w-full bg-white_20 h-[1px] my-5' />

									<div className='flex w-full items-center justify-between'>
										<h4 className='text-lg font-Mont font-medium leading-6 text-gray w-[360px]'>
											{el.title3}
										</h4>
										<span className='text-right text-gray font-medium font-Mont text-lg  leading-6'>
											{el.span3}
										</span>
									</div>
									<hr className=' w-full bg-white_20 h-[1px] my-5' />

									<div className='flex w-full items-center justify-between'>
										<h4 className='text-lg font-Mont font-medium leading-6 text-gray w-[360px]'>
											{el.title4}
										</h4>
										<span className='text-right text-gray font-medium font-Mont text-lg  leading-6'>
											{el.span4}
										</span>
									</div>
									<hr className=' w-full bg-white_20 h-[1px] my-5' />

									<div className='flex w-full items-center justify-between'>
										<h4 className='text-lg font-Mont font-medium leading-6 text-gray w-[360px]'>
											{el.title5}
										</h4>
										<span className='text-right text-gray font-medium font-Mont text-lg  leading-6'>
											{el.span5}
										</span>
									</div>
									<hr className=' w-full bg-white_20 h-[1px] my-5' />

									<div className='flex w-full items-center justify-between'>
										<h4 className='text-lg font-Mont font-medium leading-6 text-gray w-[360px]'>
											{el.title6}
										</h4>
										<span className='text-right text-gray font-medium font-Mont text-lg  leading-6'>
											{el.span6}
										</span>
									</div>
									<hr className=' w-full bg-white_20 h-[1px] my-5' />
									<div className='flex w-full items-center justify-between'>
										<h4 className='text-lg font-Mont font-medium leading-6 text-gray w-[360px]'>
											{el.title7}
										</h4>
										<span className='text-right text-gray font-medium font-Mont text-lg  leading-6'>
											{el.span7}
										</span>
									</div>
								</div>
							</div>
						)}
						<hr className=' w-full bg-white_20 h-[1px] my-5' />
					</div>
				</div>
			))}
		</>
	)
}

export default Price
