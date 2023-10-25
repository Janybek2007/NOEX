import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Rect } from '../../../img'

const ServicePage = () => {
	const textSerc = [
		{
			id: 1,
			title: 'Описание услуги'
		},
		{
			id: 22,
			title: 'Цели и задачи'
		},
		{
			id: 3,
			title: 'Типы скважин'
		},
		{
			id: 4,
			title: 'Преимущества'
		},
		{
			id: 5,
			title: 'Оставить заявку на услугу'
		}
	]
	const textSerc2 = [
		{
			id: 1,
			title: 'Описание услуги',
			p: `Прежде чем начинать строительство площадных объектов, к которым относят здания и сооружения вне зависимости от их назначения, или же линейных объектов (ЛЭП, автомобильных и железных дорог, трубопроводов) необходимо изучить территорию, предназначенную для будущего строительства. ${(
				<br />
			)}
            ${(<br />)}
            Наиболее детальную информацию о внутреннем строении участка специалисты получают, основываясь на данных бурения. Для более глубокого понимания обратимся к определению. Бурение для геологических изысканий — это процесс создания скважин различных параметров (диаметра и глубины), с целью изучения геологического, а так же гидрогеологического строения участка, знание которого является необходимым для проведения успешных и качественных инженерно геологических изысканий. Рассмотрим данную разновидность исследований более подробно.`
		},
		{
			id: 2,
			title: 'Цели и задачи',
			p: `
            Бурением различных типов инженерно геологических скважин решается множество задач. В первую очередь специалистами определяется не только геологическое строение территории, но и водные (гидрогеологические) условия участка. ${(
							<br />
						)}${(<br />)}
            В ходе бурения осуществляется отбор проб грунта для изучения литологического состава пород, их состояния, физических и механических свойств. Изучение свойств грунтов проводится в специализированных грунтовых лабораториях. Относительно принятых стандартов по отобранным образцам керна (цилиндрам выбуренной породы) определяются прочностные и деформационные свойства, пластичность, влажность, текучесть, а так же специальные параметры, используемые для создания расчетных моделей. На этих данных основываются рекомендации по возведению проектируемого сооружения.
            ${(<br />)}${(<br />)}
            Как часто требуется бурить скважины? Ответ на этот вопрос напрямую зависит от категории сложности геологических условий участка, а так же уровня ответственности сооружения или линейного объекта`
		},
		{
			id: 3,
			title: 'Типы скважин',
			h4: 'В зависимости от назначения, технологии и цели отбора выбуренного материала (керна), скважины подразделяются на следующие типы:',
			ul: {
				li_1: `Разведочные. Целью бурения скважин этого типа является детализированное изучение геологического разреза территории. На основании отбора керна определяют мощности отложений, состав грунтов и пород, их структурно-текстурные особенности.`,
				li_2: 'Технические. Представляют собой разновидность разведочных скважин. В ходе бурения отбираются пробы, естественное сложение которых не было нарушено. Далее лабораторно определяются их физические и механические свойства.',
				li_3: 'Гидрогеологические. Используются для проведения опытных испытаний фильтрационных характеристик отложений водоносного слоя.',
				li_4: `Специального назначения.`
			},
			p: `Отбор образцов производится согласно инструкции и принятых стандартов. Как правило, осуществляется сплошной отбор керна, но в некоторых ситуациях керн отбирают через определенные интервалы. По завершению работ скважины ликвидируются согласно инструкции о ликвидации и тампонаже скважин`
		},
		{
			id: 4,
			title: 'Преимущества',
			p: `
        Качественное проведение буровых работ — это необходимое условие получения подлинной информации о геологическом, а так же гидрогеологическом строении участка. Как следствие, бурение является основой надежного, качественного и оптимального проекта строительства. Именно поэтому обращаться нужно к опытным специалистам.
        ${(<br />)}${(<br />)}
        К списку наших преимуществ относится применение современных буровых технологий. Как следствие, качество отбираемых образцов заметно возрастает, что позволяет получить наиболее точные результаты в ходе лабораторных исследований.
        ${(<br />)}${(<br />)}
        За 30 лет работы нами не получено ни одно отрицательное заключение экспертизы и успешно завершено более 1000 проектов. Мы рады использовать накопленный в течение стольких лет опыт и профессиональные знания на благо вашего строительства! Команда специалистов обеспечит выполнение необходимого комплекса работ, соблюдение предварительно составленного плана и сроков по доступной для вас цене. Ознакомьтесь с нашими расценками в разделе прайс. Чтобы рассчитать точную стоимость работ, оставьте заявку, и наши менеджеры свяжутся с вами.`
		}
	]

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
			<div className='servicePage'>
				<div className='container'>
					<div className='flex items-center w-full justify-between mt-[160px]'>
						<h4 className=' text-5xl font-Mont font-bold uppercase text-gray'>
							Услуги
						</h4>
						<Link to='/Service'>
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
								К услугам и ценам
							</button>
						</Link>
					</div>
					<hr className='w-full h-[1px] bg-white_20 my-[60px]' />

					<div className='flex flex-col '>
						<div className='flex flex-col items-start gap-5 mb-10'>
							<h5 className=' text-grayLight font-Mont font-bold uppercase text-4xl'>
								Бурение инженерно-геологических скважин
							</h5>
							<span className=' text-lg font-medium font-Mont text-yellow'>
								От 18 000₽ / опыт
							</span>
						</div>
						<img src={Rect} alt='img' />
						<div className='flex items-start justify-between w-full gap-16 mt-[48px]'>
							<div className='flex flex-col items-start gap-[30px]'>
								{textSerc.map((el, idx) => (
									<>
										<button
											style={{
												color: el.id === 1 ? 'white' : 'var(-white-20)',
												borderLeft:
													el.id === 1 ? '1px solid var(--Yellow)' : '',
												transition:
													'all .55s var(--tr2),border-left 1ms,padding-left 1ms'
											}}
											className='pl-5 hover:pl-[18px] text-white_20 text-base font-CN font-bold hover:border-solid border-l border-yellow'
											key={el.id}
										>
											{el.title}
										</button>
									</>
								))}
							</div>
							<div className='flex  w-[780px] flex-col items-start'>
								{textSerc2.map((el, idx) =>
									el.id === 3 ? (
										<div className='flex flex-col items-start gap-5 mb-10'>
											<h4 className=' text-grayLight font-mono text-2xl font-bold'>
												{el.title}
												<h4 className=' w-full text-gray opacity-[.7] text-base font-normal leading-[22px] font-CN'>
													{el.h4}
												</h4>
												<ul className='my-4 flex flex-col items-start pl-10 gap-1 w-[700px]'>
													<li className=' list-disc w-full text-gray opacity-[.7] text-base font-normal leading-[22px] font-CN'>
														{el.ul.li_1}
													</li>
													<li className=' list-disc w-full text-gray opacity-[.7] text-base font-normal leading-[22px] font-CN'>
														{el.ul.li_2}
													</li>
													<li className=' list-disc w-full text-gray opacity-[.7] text-base font-normal leading-[22px] font-CN'>
														{el.ul.li_3}
													</li>
													<li className=' list-disc w-full text-gray opacity-[.7] text-base font-normal leading-[22px] font-CN'>
														{el.ul.li_4}
													</li>
												</ul>
												<p className=' w-full text-gray opacity-[.7] text-base font-normal leading-[22px] font-CN'>
													{el.p}
												</p>
											</h4>
										</div>
									) : (
										<div className='flex flex-col items-start gap-5 mb-10'>
											<h4 className=' text-grayLight font-mono text-2xl font-bold'>
												{el.title}
											</h4>
											<p className=' w-full text-gray opacity-[.7] text-base font-normal leading-[22px] font-CN'>
												{el.p}
											</p>
										</div>
									)
								)}
								<div className='flex'>
									<div className='flex items-start justify-end gap-[60px] w-full'>
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
												Напишите нам, если у Вас есть вопросы. Мы ответим Вам в
												самое ближайшее время (в течении 1 часа). Также вы
												можете описать в сообщении суть вопроса, это поможет нам
												более оперативно справиться с вашей проблемой
											</p>
											<p className='text-gray font-CN font-normal text-base leading-5 w-[350px]'>
												Нажимая на кнопку, Вы принимаете{' '}
												<span className=' text-yellow underline'>
													Положение
												</span>
												{' и '}
												<span className=' text-yellow underline'>
													Согласие
												</span>{' '}
												на обработку персональных данных
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ServicePage
