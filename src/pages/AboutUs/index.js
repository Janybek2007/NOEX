import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { flex1, flex2, sertificate } from '../../img'
const AboutUs = () => {
	return (
		<>
			<div className='aboutUs mt-[160px] mb-[160px]'>
				<div className='container'>
					<div className='flex items-center w-full justify-between'>
						<h4 className=' text-5xl font-Mont font-bold uppercase text-gray'>
							О нас
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
					<div className=''>
						<div className='flex items-start justify-between gap-[60px] mb-[179px]'>
							<h4 className=' text-yellow text-lg font-bold font-CN leading-6 w-[255px]'>
								Мы обеспечиваем качество реализации проекта
							</h4>
							<div className='flex flex-col items-start w-[885px] gap-[60px]'>
								<p className=' text-gray text-2xl font-bold font-Mont leading-8'>
									Для реализации Вашего проекта, будь то строительство коттеджа
									или масштабного архитектурного сооружения, необходимы
									качественные инженерные изыскания. Геологические,
									экологические и климатические условия уникальны для каждой
									местности. Они способны повлиять на Ваш проект. Для изучения
									этих условий и прогноза возможных последствий необходимо
									изучить и предвидеть все возможные факторы.
								</p>
								<div className='flex w-full items-start justify-between'>
									<img src={flex1} alt='img' />
									<img src={flex2} alt='img' />
								</div>
							</div>
						</div>
						<div className='flex items-start justify-between mb-[160px] gap-[60px]'>
							<h4 className='w-[255px] text-yellow font-bold font-CN text-lg leading-6'>
								Инженерные изыскания
							</h4>
							<div className='flex flex-col items-start w-[885px]'>
								<h3 className='text-gray font-Mont font-bold leading-[43px] text-4xl'>
									Мы знаем об этом все!
								</h3>
								<p className='w-[716px] mt-[40px] mb-[60px] text-gray font-CN font-normal leading-7 text-lg'>
									Мы стоим за крупнейшими и самыми сложными проектами столицы:
									все высотные здания комплекса «Москва сити», Стадион «Спартак
									Арена», станция метро «Окская», и многие другие работы.
								</p>
								<div className='flex flex-wrap items-start'>
									<div className='flex items-start relative'>
										<div className='flex flex-col items-start gap-4'>
											<Boxes
												span={'0'}
												title={'Отрицательных заключений экспертизы'}
											/>
											<hr className=' w-full h-[1px] bg-white_20' />
											<Boxes
												span={'1000'}
												title={'Более 1000 крупных объектов'}
											/>
										</div>
										<hr className='absolute right-0 w-[1px] h-[292px] bg-white_20 ' />
									</div>
									<div className='flex justify-start items-start relative '>
										<div className='flex flex-col items-start gap-4 w-[340px] '>
											<Boxes
												span={'100%'}
												title={'Соблюдения сроков договоров'}
												pl={'49px'}
												w={'255px'}
											/>
											<hr className=' w-full h-[1px] bg-white_20' />
											<Boxes
												span={'100'}
												title={'Более 100 уникальных объектов'}
												pl={'49px'}
											/>
										</div>
										<hr className='w-[1px] h-[292px] bg-white_20 absolute right-0' />
									</div>
									<div className='flex flex-col gap-4'>
										<Boxes
											pl={'49px'}
											span={'2.5'}
											title={'Тонны и терабайты архивной информации'}
										/>
										<hr className=' w-full h-[1px] bg-white_20' />
									</div>
								</div>
							</div>
						</div>
						<div className='flex items-start justify-between gap-[60px] mb-[160px] '>
							<h4 className='w-[255px] text-yellow font-bold font-CN text-lg leading-6'>
								Как мы работаем
							</h4>
							<div className='flex w-[778px] flex-col items-start gap-[60px]'>
								<h1 className=' w-[640px] text-grayLight text-4xl font-Mont font-bold uppercase leading-[43px] '>
									Мы предпочитаем работать по понятной схеме
								</h1>
								<div className='flex flex-col'>
									<Works
										text={'Подготовка'}
										title={
											'В этот период происходит постановка задач инженерных изысканий, горячее обсуждение и утверждение необходимого технического задания, подготавливается договорная документация и проверяются исходные данные. После проработки этих важных моментов, заключается договор'
										}
									/>
									<hr className=' w-full h-[1px] bg-white_20 my-[20px]' />
									<Works
										text={'Организация'}
										title={
											'В этот период происходит постановка задач инженерных изысканий, горячее обсуждение и утверждение необходимого технического задания, подготавливается договорная документация и проверяются исходные данные. После проработки этих важных моментов, заключается договор'
										}
									/>
									<hr className=' w-full h-[1px] bg-white_20 my-[20px]' />
									<Works
										text={'Проведение изысканий'}
										title={
											'В этот период происходит постановка задач инженерных изысканий, горячее обсуждение и утверждение необходимого технического задания, подготавливается договорная документация и проверяются исходные данные. После проработки этих важных моментов, заключается договор'
										}
									/>
									<hr className=' w-full h-[1px] bg-white_20 my-[20px]' />
									<Works
										text={'Экспертиза'}
										title={
											'В этот период происходит постановка задач инженерных изысканий, горячее обсуждение и утверждение необходимого технического задания, подготавливается договорная документация и проверяются исходные данные. После проработки этих важных моментов, заключается договор'
										}
									/>
									<hr className=' w-full h-[1px] bg-white_20 my-[20px]' />
								</div>
							</div>
						</div>
						<div className='flex flex-col items-start gap-[60px] mb-[160px]'>
							<div className='flex items-start gap-[60px]'>
								<h4 className='text-yellow font-bold font-CN text-lg leading-6 w-[255px]'>
									Чем мы отличаемся?
								</h4>
								<h4 className='w-[432] text-grayLight text-4xl font-Mont font-bold uppercase leading-[43px]'>
									Наши преимущества
								</h4>
							</div>
							<div className='flex flex-col items-start '>
								<hr className=' w-full h-[1px] bg-white_20 mb-[60px]' />
								<Work
									height={'194px'}
									height2={'194px'}
									el={'Опыт'}
									h4={'Как это делаем мы'}
									title={
										'Мы работаем уже 30 лет и накопили уникальный опыт. Любые трудности для нас это пустяк'
									}
									h41={'Как это делают другие'}
									title1={
										'Для компаний с маленьким опытом работы любая сложность может стать причиной технических ошибок, срыва сроков и непредвиденных расходов'
									}
								/>
								<hr className=' w-full h-[1px] bg-white_20 my-[60px]' />
								<Work
									height2={'219px'}
									height={'219px'}
									el={'Качество'}
									h4={'Как это делаем мы'}
									title={
										'Мы проводим весь необходимый комплекс работ для каждого объекта. Это гарантирует 100% прохождение экспертизы'
									}
									h41={'Как это делают другие'}
									title1={
										'Наши конкуренты, гонясь за низкой ценой и высокой прибылью, зачастую недобросовестно подходят к работе. Они забывают, что ИИ – одно из самых ответственных стадий проектирования'
									}
								/>
								<hr className=' w-full h-[1px] bg-white_20 my-[60px]' />
								<Work
									height={'169px'}
									height2={'169px'}
									el={'Оперативность'}
									h4={'Как это делаем мы'}
									title={
										'Мы даем быстрый ответ на ваше обращение. Обычно в течение часа'
									}
									h41={'Как это делают другие'}
									title1={'Заявка обрабатывается два-три дня'}
								/>
								<hr className=' w-full h-[1px] bg-white_20 my-[60px]' />
								<Work
									height2={'244px'}
									height={'244px'}
									el={'Кадры'}
									h4={'Как это делаем мы'}
									title={
										'В нашей профессиональной команде 13 высококвалифицированных специалистов. Из них 3 кандидата, 1 доктор наук, 2 эксперта'
									}
									h41={'Как это делают другие'}
									title1={
										'Другие компании экономят на качественных кадрах. Неточные данные изысканий могут привести к некорректным проектным решениям'
									}
								/>
								<hr className=' w-full h-[1px] bg-white_20 my-[60px]' />
								<Work
									height2={'294px'}
									height={'294px'}
									el={'Сроки'}
									h4={'Как это делаем мы'}
									title={
										'Мы обладаем огромным опытом и собственной уникальной базой пройденных скважин. Это позволяет нам предвидеть проблемы и работать значительно быстрее конкурентов, и никогда не нарушать условия договора'
									}
									h41={'Как это делают другие'}
									title1={'Большинство других компаний не укладываются в сроки'}
								/>
								<hr className=' w-full h-[1px] bg-white_20 my-[60px]' />
							</div>
						</div>
						<div className='flex flex-col items-start gap-[60px] mb-[160px]'>
							<div className='flex items-start gap-[60px]'>
								<h4 className='text-yellow font-bold font-CN text-lg leading-6 w-[255px]'>
									Мы сертифицированная компания
								</h4>
								<h4 className='w-[432] text-grayLight text-4xl font-Mont font-bold uppercase leading-[43px]'>
									Наши Сертификаты
								</h4>
							</div>
							<div className='flex items-start'>
								<Sertificate img={sertificate} title={'Реестр АИИС'} />
								<Sertificate
									img={sertificate}
									title={'Национальный реестр специалистов (1)'}
								/>
								<Sertificate
									img={sertificate}
									title={'Национальный реестр специалистов (2)'}
								/>
							</div>

							<div className=' flex justify-center items-center w-full'>
								<button className=' text-blackSecond text-sm font-CN font-bold uppercase leading-normal py-[15px] px-[30px] bg-yellow flex items-center justify-center gap-5'>
									наши Услуги и цены
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='14'
										height='14'
										viewBox='0 0 14 14'
										fill='none'
									>
										<path
											d='M1 13L13 1M13 1H6.14286M13 1V7'
											stroke='black'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export const Sertificate = ({ img, title }) => {
	return (
		<>
			<div className='sert flex flex-col items-start px-[40px] gap-5 py-[40px] border border-solid border-white_20'>
				<img src={img} alt='img' />
				<h4 className=' h-[68px] w-[320px] text-2xl font-Mont font-medium leading-8 text-grayMain'>
					{title}
				</h4>
				<button className='more text-yellow text-sm font-CN font-bold mores uppercase underline'>
					Посмотреть в реестре
				</button>
			</div>
		</>
	)
}

export const Work = ({
	el,
	h4,
	title,
	h41,
	title1,
	height,
	height2,
	width,
	width2
}) => {
	return (
		<>
			<div className='flex istart justify-between gap-[60px]'>
				<h4 className='w-[254px] text-gray text-[30px] font-Mont font-bold'>
					{el}
				</h4>
				<div className='flex items-start'>
					<div
						style={{
							height: height,
							width: width
						}}
						className='flex flex-col w-[362px] gap-5 py-5 px-5 border border-solid border-blackSecond mr-[5px]'
					>
						<h4 className=' text-gray font-Mont font-medium text-2xl'>{h4}</h4>
						<p className=' text-lg text-gray font-normal leading-6 font-CN'>
							{title}
						</p>
					</div>
					<div
						style={{
							height: height2,
							width: width2
						}}
						className='flex flex-col w-[514px]  gap-5 py-5 px-5 border border-solid border-blackSecond ml-[5px]'
					>
						<h4 className=' text-gray font-Mont font-medium text-2xl'>{h41}</h4>
						<p className=' text-lg text-gray font-normal leading-6 font-CN'>
							{title1}
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export const Works = ({ text, title }) => {
	const [list, setList] = useState(false)
	function openLists() {
		setList(!list)
	}
	return (
		<>
			<div
				className={` ${
					list ? 'cols' : 'cols active'
				}flex flex-col overflow-hidden`}
			>
				<div className='flex items-center gap-[20px]'>
					<button onClick={openLists} className='relative w-4 h-4'>
						<div
							style={{
								transform: list ? 'rotate(0deg)' : 'rotate(90deg)',
								transition: 'all 0.55s var(--tr2)'
							}}
							className=' absolute bg-white w-[16px] h-[1px]'
						></div>
						<div className=' absolute bg-white w-[16px] h-[1px]'></div>
					</button>
					<h4 className=' text-gray font-Mont font-medium text-2xl'>{text}</h4>
				</div>
				<div className='flex items-center pl-[36px] my-[20px]'>
					<p className=' w-[703px] border-l border-yellow py-[20px] px-[20px] text-lg font-CN font-normal text-gray leading-6'>
						{title}
					</p>
				</div>
			</div>
		</>
	)
}

export const Boxes = ({ span, title, pl, w }) => {
	return (
		<>
			<div
				className='flex flex-col items-start gap-1 w-[255px] h-[116px]'
				style={{
					paddingLeft: pl,
					width: w
				}}
			>
				<span className=' text-5xl text-gray font-Mont font-bold leading-[57px] uppercase'>
					{span}
				</span>
				<p className=' text-gray font-normal font-CN leading-7 text-lg'>
					{title}
				</p>
			</div>
		</>
	)
}

export default AboutUs
