import React, { useState } from 'react'
import Slider from 'react-slick'

const HowWeWork = () => {
	return (
		<div className='work my-64'>
			<div className='container'>
				<h4 className='text-grayLight text-4xl font-Mont font-bold uppercase leading-43'>
					Как мы работаем
				</h4>
				<WSlides />
			</div>
		</div>
	)
}

const WSlides = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const textTitle = [
		{
			number: 1,
			text: 'Подготовка',
			title:
				'В этот период происходит постановка задач инженерных изысканий, горячее обсуждение и утверждение необходимого технического задания, подготавливается договорная документация и проверяются исходные данные. После проработки этих важных моментов, заключается договор'
		},
		{
			number: 2,
			text: 'Организация',
			title:
				'В этот период происходит постановка задач инженерных изысканий, горячее обсуждение и утверждение необходимого технического задания, подготавливается договорная документация и проверяются исходные данные. После проработки этих важных моментов, заключается договор'
		},
		{
			number: 3,
			text: 'Проведение изысканий',
			title:
				'В этот период происходит постановка задач инженерных изысканий, горячее обсуждение и утверждение необходимого технического задания, подготавливается договорная документация и проверяются исходные данные. После проработки этих важных моментов, заключается договор'
		},
		{
			number: 4,
			text: 'Экспертиза',
			title:
				'В этот период происходит постановка задач инженерных изысканий, горячее обсуждение и утверждение необходимого технического задания, подготавливается договорная документация и проверяются исходные данные. После проработки этих важных моментов, заключается договор'
		}
	]
	var settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true,
		beforeChange: (current, next) => {
			setCurrentSlide(next)
		}
	}

	return (
		<div className='flex w-full items-start justify-between mt-[60px]'>
			<div className='fLeft w-302 flex-col flex items-start'>
				{textTitle.map((el, idx) => (
					<>
						<div className='card' key={idx}>
							<div
								className={`circ ${
									currentSlide === idx ? 'border-yellow' : 'border-white_20'
								}`}
							>
								<span
									className={
										currentSlide === idx ? 'text-yellow' : ' text-white_20'
									}
								>
									{el.number}
								</span>
							</div>
							<h4
								className={
									currentSlide === idx ? 'text-yellow' : 'text-white_20'
								}
							>
								{el.text}
							</h4>
						</div>
						{idx === 0 ? (
							<hr className='fLines' />
						) : idx === 1 ? (
							<hr className='fLines' />
						) : idx === 2 ? (
							<hr className='fLines' />
						) : (
							''
						)}
					</>
				))}
			</div>
			<hr className='h-[480px] w-[1px] bg-white_20' />
			<div className='fRight w-[488px]'>
				<Slider {...settings}>
					{textTitle.map((el, idx) => (
						<div className='wTitle' key={idx}>
							<h4 className='text-gray text-2xl font-medium font-Mont mb-[30px]'>
								{el.text}
							</h4>
							<p className=' text-gray opacity-[.7] text-lg font-normal font-CN w-[488px] leading-7'>
								{el.title}
							</p>
						</div>
					))}
				</Slider>
			</div>
		</div>
	)
}

export default HowWeWork
