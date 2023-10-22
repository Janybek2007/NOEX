import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

import { bg1, bg2, bg3, bg4 } from '../../img'

const Hero = () => {
	return (
		<>
			<div className='hero h-[762px] w-full'>
				<HeroSliders />
			</div>
		</>
	)
}
const HeroSliders = () => {
	const sliderInfoTitle = [
		{
			id: 1,
			img: bg1,
			h4: 'Инженерные изыскания в строительстве',
			p: 'С равным успехом мы работаем на участках строительства технически сложных и ответственных объектов, и типовых сооружений. Все работы проходят государственную экспертизу.',
			btn_one: 'Посмотреть услуги',
			btn_two: 'Наши проекты',
			info: 'Выполняем инженерные изыскания в строительстве с 1988 года'
		},
		{
			id: 2,
			img: bg2,
			h4: 'Геологические изыскания',
			h5: 'Бурение инженерно-геологических скважин',
			h5_price: 'от 600₽ / п.м',
			h5_two: 'Штамповые испытания грунтов',
			h5_two_price: 'от 18 000₽ / опыт',
			h5_three:
				'Лабораторные испытания со скидкой от 50% (с понижающим коэффициентом от 0.5)',
			btn_one: 'Подробнее',
			btn_two: 'Заказать обратный звонок'
		},
		{
			id: 3,
			img: bg3,
			h4: 'экологические изыскания',
			h5: 'Комплекс инженерно-эколонических изысканий:',
			btn_two: 'Заказать обратный звонок',
			btn_one: 'Подробнее',
			flexs: {
				td: {
					span: '0.5 Га',
					spanPrice: 'от 50 000₽'
				},
				td2: {
					span: '1.0 Га',
					spanPrice: 'от 70 000₽'
				},
				td3: {
					span: '2.0 Га',
					spanPrice: 'от 90 000₽'
				},
				td4: {
					span: '3.0 Га',
					spanPrice: 'от 110 000₽'
				}
			}
		},
		{
			id: 4,
			img: bg4,
			h4: 'Геодезические изыскания',
			flex: {
				tr: {
					h4: 'Создание инженерно-топографических планов масштаба 1:500, рельеф 0.5 метра на незастроенной территории',
					h4_price: 'от 10 000₽ / Га'
				},
				tr2: {
					h4: 'Создание опорных геодезических сетей',
					h4_price: 'от 50 000₽ / пункт'
				},
				tr3: {
					h4: 'Дендрологические исследования',
					h4_price: 'от 40 000₽'
				}
			},
			btn_two: 'Заказать обратный звонок',
			btn_one: 'Подробнее'
		}
	]

	var settings = {
		focusOnSelect: true,
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		pauseOnHover: true
	}

	return (
		<Slider {...settings} className='flex flex-nowrap items-center gap-8'>
			{sliderInfoTitle.map((el, idx) => (
				<div
					key={idx}
					className='text-white slideSlick bg-cover bg-no-repeat w-full h-full'
				>
					<div
						style={{
							backgroundImage: `url(${el.img})`,
							width: '1900px',
							height: '762px'
						}}
						className={`${
							el.id === 1 ? 'pt-[138px] pb-[75px]' : 'pt-[120px] pb-[71px]'
						}`}
					>
						{el.id === 1 ? (
							<div className='container one flex flex-col items-start justify-between h-full'>
								<div className='top flex items-end'>
									<div className='title'>
										<h4>{el.h4}</h4>
										<p>{el.p}</p>
										<div className='flex items-center gap-3'>
											<Link to='/Service'>
												<button className='toService'>{el.btn_one}</button>
											</Link>
											<Link to='/Project'>
												<button className='toProject'>{el.btn_two}</button>
											</Link>
										</div>
									</div>
									<h1>{el.info}</h1>
								</div>
								<div className='bottom flex w-full items-center justify-between'>
									<div className='flex items-start justify-start gap-[10px]'>
										<div className='lines w-9 h-[3px] bg-white rounded-[100px]'></div>
										<div className='lines w-9 h-[3px] bg-grayDark rounded-[100px]'></div>
										<div className='lines w-9 h-[3px] bg-grayDark rounded-[100px]'></div>
										<div className='lines w-9 h-[3px] bg-grayDark rounded-[100px]'></div>
									</div>
									<div className='flex'>
										<span className=' text-grayLight text-2xl font-[400]'>
											01
										</span>
										<span className=' text-grayLight text-2xl font-[400] mx-2'>
											-
										</span>
										<span className=' text-grayLight text-2xl font-[400]'>
											04
										</span>
									</div>
								</div>
							</div>
						) : el.id === 2 ? (
							<div className='container two flex flex-col items-start justify-between h-full'>
								<div className='tTop w-[886px]'>
									<h4>{el.h4}</h4>
									<div className='flex flex-col items-start mt-[40px]'>
										<div className='flex items-center justify-between w-full'>
											<h5 className=' text-2xl font-bold leading-8 text-gray font-CN'>
												{el.h5}
											</h5>
											<span className='text-2xl font-bold text-yellow font-CN '>
												{el.h5_price}
											</span>
										</div>
										<hr className=' w-full h-[1px] bg-white_20 my-5' />
										<div className='flex  items-center justify-between w-full'>
											<h5 className=' text-2xl font-bold leading-8 text-gray font-CN'>
												{el.h5_two}
											</h5>
											<span className='text-2xl font-bold text-yellow font-CN '>
												{el.h5_two_price}
											</span>
										</div>
										<hr className=' w-full h-[1px] bg-white_20 my-5' />
										<div className='flex'>
											<h5 className=' w-[620px] text-2xl font-bold leading-8 text-gray font-CN'>
												{el.h5_three}
											</h5>
										</div>
										<hr className=' w-full h-[1px] bg-white_20 my-5' />
									</div>
									<div className='flex items-center gap-3 mt-[60px]'>
										<button className='px-[30px] py-[15px] bg-green text-black font-CN uppercase font-bold'>
											{el.btn_one}
										</button>
										<button className='px-[30px] py-[15px] bg-green text-blackSecond font-CN uppercase font-bold'>
											{el.btn_two}
										</button>
									</div>
								</div>
								<div className='bottom flex w-full items-center justify-between'>
									<div className='flex items-start justify-start gap-[10px]'>
										<div className='lines w-9 h-[3px] bg-grayDark rounded-[100px]'></div>
										<div className='lines w-9 h-[3px] bg-white rounded-[100px]'></div>
										<div className='lines w-9 h-[3px] bg-grayDark rounded-[100px]'></div>
										<div className='lines w-9 h-[3px] bg-grayDark rounded-[100px]'></div>
									</div>
									<div className='flex'>
										<span className=' text-grayLight text-2xl font-[400]'>
											02
										</span>
										<span className=' text-grayLight text-2xl font-[400] mx-2'>
											-
										</span>
										<span className=' text-grayLight text-2xl font-[400]'>
											04
										</span>
									</div>
								</div>
							</div>
						) : el.id === 3 ? (
							<div className='container three flex flex-col items-start justify-between h-full'>
								<div className='thTop w-[886px]'>
									<h4>{el.h4}</h4>
									<div className='flex flex-col items-start gap-2 w-full mt-[40px]'>
										<div className='flex w-full'>
											<div className='flex items-center justify-between w-full'>
												<span className=' text-gray text-2xl font-CN font-bold'>
													{el.flexs.td.span}
												</span>
												<hr className='line-dashed' />
												<span className=' text-yellow text-2xl font-CN font-bold'>
													{el.flexs.td.spanPrice}
												</span>
											</div>
											<hr className='w-[1px] h-[34px] bg-white_20 mx-6' />
											<div className='flex items-center justify-between w-full'>
												<span className=' text-gray text-2xl font-CN font-bold'>
													{el.flexs.td2.span}
												</span>
												<hr className='line-dashed' />
												<span className=' text-yellow text-2xl font-CN font-bold'>
													{el.flexs.td2.spanPrice}
												</span>
											</div>
										</div>
										<hr className='w-full h-[1px] bg-white_20 my-4' />
										<div className='flex w-full'>
											<div className='flex items-center justify-between w-full'>
												<span className=' text-gray text-2xl font-CN font-bold'>
													{el.flexs.td3.span}
												</span>
												<hr className='line-dashed' />
												<span className=' text-yellow text-2xl font-CN font-bold'>
													{el.flexs.td3.spanPrice}
												</span>
											</div>
											<hr className='w-[1px] h-[34px] bg-white_20 mx-6' />
											<div className='flex items-center justify-between w-full'>
												<span className=' text-gray text-2xl font-CN font-bold'>
													{el.flexs.td4.span}
												</span>
												<hr className='line-dashed' />
												<span className=' text-yellow text-2xl font-CN font-bold'>
													{el.flexs.td.spanPrice}
												</span>
											</div>
										</div>
									</div>
									<div className='flex items-center gap-3 mt-[60px]'>
										<button className='px-[30px] py-[15px] bg-green text-black font-CN uppercase font-bold'>
											{el.btn_one}
										</button>
										<button className='px-[30px] py-[15px] bg-green text-blackSecond font-CN uppercase font-bold'>
											{el.btn_two}
										</button>
									</div>
								</div>
								<div className='bottom flex w-full items-center justify-between'>
									<div className='flex items-start justify-start gap-[10px]'>
										<div className='lines w-9 h-[3px] bg-grayDark rounded-[100px]'></div>
										<div className='lines w-9 h-[3px] bg-grayDark rounded-[100px]'></div>
										<div className='lines w-9 h-[3px] bg-white rounded-[100px]'></div>
										<div className='lines w-9 h-[3px] bg-grayDark rounded-[100px]'></div>
									</div>
									<div className='flex'>
										<span className=' text-grayLight text-2xl font-[400]'>
											03
										</span>
										<span className=' text-grayLight text-2xl font-[400] mx-2'>
											-
										</span>
										<span className=' text-grayLight text-2xl font-[400]'>
											04
										</span>
									</div>
								</div>
							</div>
						) : el.id === 4 ? (
							<div className='container four h-full flex flex-col items-start justify-between'>
								<div className='fTop w-[886px]'>
									<h4>{el.h4}</h4>
									<div className='flex flex-col items-start w-full mt-[40px]'>
										<div className='flex w-full items-start justify-between'>
											<h5 className='w-[605px] text-2xl font-CN font-bold leading-[33px]'>
												{el.flex.tr.h4}
											</h5>
											<span className='text-2xl font-CN font-bold text-yellow '>
												{el.flex.tr.h4_price}
											</span>
										</div>
										<hr className=' w-full h-[1px] bg-white_20 my-5' />
										<div className='flex w-full items-start justify-between'>
											<h5 className='w-[605px] text-2xl font-CN font-bold leading-[33px]'>
												{el.flex.tr2.h4}
											</h5>
											<span className='text-2xl font-CN font-bold text-yellow '>
												{el.flex.tr2.h4_price}
											</span>
										</div>
										<hr className=' w-full h-[1px] bg-white_20 my-5' />
										<div className='flex w-full  items-start justify-between'>
											<h5 className='w-[605px] text-2xl font-CN font-bold leading-[33px]'>
												{el.flex.tr3.h4}
											</h5>
											<span className='text-2xl font-CN font-bold text-yellow '>
												{el.flex.tr3.h4_price}
											</span>
										</div>
										<hr className=' w-full h-[1px] bg-white_20 my-5' />
									</div>
									<div className='flex items-center gap-3 mt-[60px]'>
										<button className='px-[30px] py-[15px] bg-green text-black font-CN uppercase font-bold'>
											{el.btn_one}
										</button>
										<button className='px-[30px] py-[15px] bg-green text-blackSecond font-CN uppercase font-bold'>
											{el.btn_two}
										</button>
									</div>
								</div>
								<div className='bottom flex w-full items-center justify-between'>
									<div className='flex items-start justify-start gap-[10px]'>
										<div className='lines w-9 h-[3px] bg-grayDark rounded-[100px]'></div>
										<div className='lines w-9 h-[3px] bg-grayDark rounded-[100px]'></div>
										<div className='lines w-9 h-[3px] bg-grayDark rounded-[100px]'></div>
										<div className='lines w-9 h-[3px] bg-white  rounded-[100px]'></div>
									</div>
									<div className='flex'>
										<span className=' text-grayLight text-2xl font-[400]'>
											04
										</span>
										<span className=' text-grayLight text-2xl font-[400] mx-2'>
											-
										</span>
										<span className=' text-grayLight text-2xl font-[400]'>
											04
										</span>
									</div>
								</div>
							</div>
						) : (
							''
						)}
					</div>
				</div>
			))}
		</Slider>
	)
}

export default Hero
