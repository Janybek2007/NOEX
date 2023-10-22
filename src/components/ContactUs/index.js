import React, { useState } from 'react'

const ContactUs = () => {
	const [tel, setTel] = useState('')
	const handleTelChange = e => {
		const inputTel = e.target.value
		const formattedTel = inputTel
			.replace(/[^0-9]/g, '')
			.match(new RegExp('.{1,3}', 'g'))

		if (formattedTel) {
			const formatTel = formattedTel.join(' ')
			setTel(formatTel)
		} else {
			setTel('')
		}
	}
	return (
		<>
			<div className='use'>
				<div className='container'>
					<h1 className=' text-grayLight text-4xl font-bold font-Mont'>
						Связаться с нами
					</h1>
					<div className='flex items-start justify-end gap-[60px] w-full'>
						{/* <div></div> */}
						<div className='flex flex-col items-start gap-[40px] w-[360px]'>
							<div className='flex flex-col items-start gap-5'>
								<div className='inputBoxes flex flex-col items-start gap-[10px]'>
									<h4 className=' text-white_20 font-Mont text-base font-medium'>
										Имя
									</h4>
									<input
										className='text-gray text-lg font-Mont font-medium'
										type='text'
										placeholder='Введите имя'
									/>
									<hr className=' w-full h-[1px] bg-white_20' />
								</div>
								<div className='inputBoxes flex flex-col items-start gap-[10px]'>
									<h4 className=' text-white_20 font-Mont text-base font-medium'>
										Номер телефона
									</h4>
									<input
										onChange={handleTelChange}
										value={tel}
										className='text-gray text-lg font-Mont font-medium'
										type='text'
										placeholder='+7 (---) --- -- --'
									/>
									<hr className=' w-full h-[1px] bg-white_20' />
								</div>
								<div className='inputBoxes flex flex-col items-start gap-[10px]'>
									<h4 className=' text-white_20 font-Mont text-base font-medium'>
										Текст сообщения (необязательно)
									</h4>
									<input
										className='text-gray text-lg font-Mont font-medium'
										type='text'
										placeholder='Введите текст'
									/>
									<hr className=' w-full h-[1px] bg-white_20' />
								</div>
							</div>
							<button className=' text-grayDark font-bold font-CN text-sm py-[15px] px-[30px] bg-yellow'>
								Отправить
							</button>
						</div>
						<div className='flex flex-col items-start gap-[40px]'>
							<p className=' text-gray font-CN font-normal text-base leading-5 w-[350px]'>
								Напишите нам, если у Вас есть вопросы. Мы ответим Вам в самое
								ближайшее время (в течении 1 часа). Также вы можете описать в
								сообщении суть вопроса, это поможет нам более оперативно
								справиться с вашей проблемой
							</p>
							<p className='text-gray font-CN font-normal text-base leading-5 w-[350px]'>
								Нажимая на кнопку, Вы принимаете{' '}
								<span className=' text-yellow underline'>Положение</span>
								{' и '}
								<span className=' text-yellow underline'>Согласие</span> на
								обработку персональных данных
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ContactUs
