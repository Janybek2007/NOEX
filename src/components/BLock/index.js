import React, { useState } from 'react'
import Slider from 'react-slick'

import { img1, img2, img3, img4, img5, img6, img7, img8, img9 } from '../../img'

const BLock = () => {
	const [color, setColor] = useState(false)

	const handleClick = () => {
		setColor(!color)
	}

	const settings = {
		// dots: false,
		infinite: true,
		slidesToShow: 3.5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1000,
		pauseOnHover: false
	}
	return (
		<>
			<div className='block'>
				<div className='container'>
					<div className='bTop mb-16 flex flex-col items-start gap-[90px] w-full'>
						<div className='flex items-start justify-between w-[80%]'>
							<h4 className='text-grayLight text-4xl font-Mont font-bold uppercase leading-[43px] w-[603px]'>
								Высокое качество работы в наших проектах
							</h4>
							<div className='flex flex-col items-start'>
								<h6 className='text-lg font-Roboto font-normal mb-[9px] text-white_20'>
									Более
								</h6>
								<span className='text-[96px] font-Mont font-bold text-grayLight leading-[90px]'>
									6
								</span>
								<h5 className='text-lg font-Roboto font-normal text-white_20 w-[124px] leading-6'>
									Крупных проектов
								</h5>
							</div>
						</div>
						<hr className=' w-full h-[2px] bg-white_20' />
					</div>
					<div className='bBottom flex flex-col items-start gap-[130px]'>
						<div className='clicks flex items-center justify-between w-full'>
							<label
								onClick={handleClick}
								className={`${setColor ? 'bg-blackSecond text-gray' : ''}`}
								htmlFor='label1'
							>
								<input type='radio' name='labels' id='label1' />
								Москва-Сити
							</label>
							<label
								onClick={handleClick}
								className={`${setColor ? '' : 'bg-blackSecond text-gray'}`}
								htmlFor='label2'
							>
								<input type='radio' name='labels' id='label2' />
								Стадион «Спартак»
							</label>
							<label
								onClick={handleClick}
								className={`${setColor ? '' : 'bg-blackSecond text-gray'}`}
								htmlFor='label3'
							>
								<input type='radio' name='labels' id='label3' />
								ТРК «Авиапарк»
							</label>
							<label
								onClick={handleClick}
								className={`${setColor ? '' : 'bg-blackSecond text-gray'}`}
								htmlFor='label4'
							>
								<input type='radio' name='labels' id='label4' />
								АТК на Кутузовском
							</label>
							<label
								onClick={handleClick}
								className={`${setColor ? '' : 'bg-blackSecond text-gray'}`}
								htmlFor='label5'
							>
								<input type='radio' name='labels' id='label5' />
								Завод «ЗИЛ»
							</label>
							<label
								onClick={handleClick}
								className={`${color ? 'bg-blackSecond text-gray' : ''}`}
								htmlFor='label6'
							>
								<input type='radio' name='labels' id='label6' />
								Станция «Окская»
							</label>
						</div>
						<div className='flex items-center'>
							<Slider {...settings}>
								<div className='slides'>
									<img src={img1} className=' w-full' alt='img' />
									<div className='slide-title w-full'>
										<h4>Renaissance Moscow Towers</h4>
										<h4 className='year'>2013</h4>
										<div className='flex flex-col items-start  mt-[10px]'>
											<hr />
											<button className='text-yellow text-sm font-CN font-bold  relative'>
												Подробнее
											</button>
										</div>
									</div>
								</div>
								<div className='slides'>
									<img src={img2} className=' w-full' alt='' />
									<div className='slide-title w-full'>
										<h4>Башня «Россия»</h4>
										<h4 className='year'>2007-2008</h4>
										<div className='flex flex-col items-start w-full'>
											<hr />
											<button className='text-yellow text-sm font-CN font-bold  relative'>
												Подробнее
											</button>
										</div>
									</div>
								</div>
								<div className='slides'>
									<img src={img3} className=' w-full' alt='' />
									<div className='slide-title'>
										<h4>Башни «Око»</h4>
										<h4 className='year'>2007</h4>
										<div className='flex flex-col items-start'>
											<hr />
											<button className='text-yellow text-sm font-CN font-bold  relative'>
												Подробнее
											</button>
										</div>
									</div>
								</div>
								<div className='slides'>
									<img src={img4} className=' w-full' alt='img' />
									<div className='slide-title w-full'>
										<h4>Башня «Эволюция»</h4>
										<h4 className='year'>2006</h4>
										<div className='flex flex-col items-start  mt-[10px]'>
											<hr />
											<button className='text-yellow text-sm font-CN font-bold  relative'>
												Подробнее
											</button>
										</div>
									</div>
								</div>
								<div className='slides'>
									<img src={img5} className=' w-full' alt='' />
									<div className='slide-title w-full'>
										<h4>Выставочно-деловой комплекс</h4>
										<h4 className='year'>2006</h4>
										<div className='flex flex-col items-start w-full'>
											<hr />
											<button className='text-yellow text-sm font-CN font-bold  relative'>
												Подробнее
											</button>
										</div>
									</div>
								</div>
								<div className='slides'>
									<img src={img6} className=' w-full' alt='' />
									<div className='slide-title'>
										<h4>Комплекс «Северная Башня»</h4>
										<h4 className='year'>2004</h4>
										<div className='flex flex-col items-start'>
											<hr />
											<button className='text-yellow text-sm font-CN font-bold  relative'>
												Подробнее
											</button>
										</div>
									</div>
								</div>
								<div className='slides'>
									<img src={img7} className=' w-full' alt='' />
									<div className='slide-title w-full'>
										<h4>Комплекс «Федерация»</h4>
										<h4 className='year'>2003-2004</h4>
										<div className='flex flex-col items-start w-full'>
											<hr />
											<button className='text-yellow text-sm font-CN font-bold  relative'>
												Подробнее
											</button>
										</div>
									</div>
								</div>
								<div className='slides'>
									<img src={img8} className=' w-full' alt='' />
									<div className='slide-title'>
										<h4>Башня «Империя»</h4>
										<h4 className='year'>2001</h4>
										<div className='flex flex-col items-start'>
											<hr />
											<button className='text-yellow text-sm font-CN font-bold  relative'>
												Подробнее
											</button>
										</div>
									</div>
								</div>
								<div className='slides'>
									<img src={img9} className=' w-full' alt='' />
									<div className='slide-title'>
										<h4>Гидрогеологический мониторинг территории</h4>
										<h4 className='year'>1996-2015</h4>
										<div className='flex flex-col items-start'>
											<hr />
											<button className='text-yellow text-sm font-CN font-bold  relative'>
												Подробнее
											</button>
										</div>
									</div>
								</div>
							</Slider>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default BLock
