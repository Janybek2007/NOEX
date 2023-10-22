import React from 'react'

const HigLevel = () => {
	return (
		<>
			<div className='high'>
				<div className='container'>
					<h1 className='w-[508px] text-grayLight text-4xl font-Mont font-bold uppercase leading-[43px]'>
						Высокий уровень и профессиональая команда
					</h1>
					<div className='flex mt-[60px] items-start w-full justify-between'>
						<h4 className='w-[239px] text-yellow text-sm font-CN font-bold'>
							Подтверждение наших компетенций в специализации
						</h4>
						<div className='flex items-start flex-col w-[780px]'>
							<HTitles />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

const HTitles = () => {
	const highTitle = [
		{
			id: 1,
			h4: '30 лет работы',
			p: 'Мы работаем уже 30 лет и накопили уникальный опыт. Любые трудности для нас это пустяк'
		},
		{
			id: 2,
			h4: 'Выполняем комплекс работ',
			p: 'Мы проводим весь необходимый комплекс работ для каждого объекта. Это гарантирует 100% прохождение экспертизы'
		},
		{
			id: 3,
			h4: 'Команда профессионалов',
			p: 'В нашей профессиональной команде 13 высококвалифицированных специалистов'
		},
		{
			id: 4,
			h4: 'Отвечаем быстро',
			p: 'Мы даем быстрый ответ на ваше обращение. Обычно в течение часа'
		},
		{
			id: 5,
			h4: 'Огромный опыт',
			p: 'Мы обладаем огромным опытом и собственной уникальной базой пройденных скважин. Это позволяет нам предвидеть проблемы'
		}
	]

	return (
		<>
			{highTitle.map((el, idx) => (
				<>
					<div className='level flex flex-col items-start gap-[20px]' key={idx}>
						<h4 className='text-2xl text-gray font-Mont font-medium'>
							{el.h4}
						</h4>
						<p className='text-gray text-[16px] font-CN font-normal leading-6'>
							{el.p}
						</p>
					</div>
					<hr className=' w-full h-[1px] bg-white_20 my-[30px]' />
				</>
			))}
		</>
	)
}

export default HigLevel
