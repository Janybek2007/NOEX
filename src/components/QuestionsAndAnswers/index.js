import React, { useState } from 'react'

const QuestionsAndAnswers = () => {
	return (
		<>
			<div className='answer my-[160px]'>
				<div className='container flex flex-col items-start gap-[60px]'>
					<h4 className='text-grayLight text-4xl font-Mont font-bold uppercase leading-[43px]'>
						Вопросы и ответы
					</h4>
					<div className='flex flex-col items-start'>
						<Qusetions />
					</div>
				</div>
			</div>
		</>
	)
}

const Qusetions = () => {
	const qusetions = [
		{
			id: 1,
			question: 'Сколько вы работаете в этой области?',
			answer:
				'Мы работаем уже 30 лет и накопили уникальный опыт. Любые трудности для нас это пустяк'
		},
		{
			id: 2,
			question: 'Вы работаете по всей России?',
			answer:
				'Мы работаем уже 30 лет и накопили уникальный опыт. Любые трудности для нас это пустяк'
		},
		{
			id: 3,
			question: 'Какие услуги в плане инженерных изысканий Вы оказываете?',
			answer:
				'Мы работаем уже 30 лет и накопили уникальный опыт. Любые трудности для нас это пустяк'
		},
		{
			id: 4,
			question: 'Есть ли у Вас прайс-лист?',
			answer:
				'Мы работаем уже 30 лет и накопили уникальный опыт. Любые трудности для нас это пустяк'
		},
		{
			id: 5,
			question: 'Как оценивается время работ?',
			answer:
				'Мы работаем уже 30 лет и накопили уникальный опыт. Любые трудности для нас это пустяк'
		},
		{
			id: 6,
			question: 'Есть ли у Вас вакансии?',
			answer:
				'Мы работаем уже 30 лет и накопили уникальный опыт. Любые трудности для нас это пустяк'
		},
		{
			id: 7,
			question: 'Где расположен Ваш офис?',
			answer:
				'Мы работаем уже 30 лет и накопили уникальный опыт. Любые трудности для нас это пустяк'
		}
	]

	const [openQuestion, setOpenQuestion] = useState(null)

	const toggleList = questionId => {
		if (questionId === openQuestion) {
			setOpenQuestion(null)
		} else {
			setOpenQuestion(questionId)
		}
	}

	return (
		<>
			{qusetions.map((el, idx) => (
				<div className=' w-full' key={idx}>
					<div className='flex items-center gap-[40px]' key={el.id}>
						<button
							className={`relative openList w-[40px] h-[40px] ${
								el.id === openQuestion ? 'open' : ''
							}`}
							onClick={() => toggleList(el.id)}
						>
							<span
								className={`w-[25px] h-[1.5px] bg-white absolute ${
									el.id === openQuestion ? ' invisible' : ' visible'
								}`}
							></span>
							<span
								className={`w-[25px] h-[1.5px] bg-white absolute ${
									el.id === openQuestion ? 'rotate-0' : 'rotate-90'
								}`}
							></span>
						</button>
						<h4 className='text-2xl text-gray font-Mont font-medium'>
							{el.question}
						</h4>
					</div>
					{el.id === openQuestion && (
						<div className='flex items-center justify-start gap-[20px] pl-[35px] mt-[20px]'>
							<hr className='h-[65px] w-[1px] bg-yellow' />
							<p className='w-[1127px] text-lg font-CN font-normal text-gray'>
								{el.answer}
							</p>
						</div>
					)}
					<hr className='w-full h-[1px] bg-white_20 my-[20px]' />
				</div>
			))}
		</>
	)
}

export default QuestionsAndAnswers
