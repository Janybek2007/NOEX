import React, { useState } from 'react'
import { download } from '../../img'
import { AiOutlineDelete } from '../icons'
const Needs = () => {
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
			<div className='needs mb-[160px]'>
				<div className='container flex flex-col items-start'>
					<h1 className='text-4xl text-grayLight font-Mont font-bold uppercase w-[508px] leading-10'>
						НЕОБХОДИМО РАССЧИТАТЬ СМЕТУ?
					</h1>
					<div className='flex justify-between w-full items-start mt-[60px]'>
						<div className='nLeft flex flex-col items-start gap-[41px]'>
							<h4 className='text-lg font-Mont text-gray font-medium leading-6'>
								Номер телефона
							</h4>
							<h5 className='text-lg font-Mont text-gray font-medium leading-6 w-[304px]'>
								Загрузите техническое задание (если есть)
							</h5>
						</div>
						<div className='nRight flex flex-col items-end gap-[41px]'>
							<div className='flex w-[811px] items-center justify-center gap-[60px]'>
								<h4 className='text-gray font-Mont font-medium text-right text-lg'>
									Не заполненно
								</h4>
								<input
									onChange={handleTelChange}
									value={tel}
									className='text-gray font-Mont font-medium  text-lg'
									type='text'
									placeholder='+7 (---) --- -- --'
								/>
							</div>
							<div className='flex w-[781px] items-start justify-center gap-[60px]'>
								<h4 className='text-gray font-Mont font-medium text-right text-lg'>
									DOC, DOCX, TXT, OFC
								</h4>
								<div className='flex flex-col items-start'>
									<button className='download flex items-center gap-5 text-gray font-Mont font-medium text-right text-lg'>
										<img src={download} alt='img' />
										Загрузить файл
									</button>
									<div className='listItems flex flex-col items-end gap-1 mt-[20px] mb-[41px]'>
										<li className='w-[308px] flex items-center justify-between'>
											<h4 className='text-yellow text-base font-CN underline font-normal'>
												ТЗ_Технониколь.doc
											</h4>
											<button className='text-yellow'>
												<AiOutlineDelete />
											</button>
										</li>
										<li className='w-[308px] flex items-center justify-between'>
											<h4 className='text-yellow text-base font-CN underline font-normal'>
												ТЗ-2_Технониколь.doc
											</h4>
											<button className='text-yellow'>
												<AiOutlineDelete />
											</button>
										</li>
									</div>
									<button className='bg-yellow px-[30px] py-[15px] text-grayDark font-CN font-bold uppercase text-sm'>
										Рассчитать смету
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Needs
