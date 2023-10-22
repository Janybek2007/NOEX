import React from 'react'

const About = () => {
	return (
		<>
			<div className='about h-[657px] my-40'>
				<div className='container flex flex-col items-start gap-[90px]'>
					<p className=' w-full text-grayLight text-4xl font-Mont font-bold uppercase leading-[43px]'>
						Инженерные изыскания – это неотъемлемая часть проектной
						деятельности, обеспечивающая всестороннее изучение природных и
						техногенных условий местности планируемого строительства.
					</p>
					<div className='flex items-start w-full justify-between gap-2'>
						<h4 className='text-yellow text-sm font-CN font-bold w-[200px]'>
							Зачем нужны инженерные изыскания?
						</h4>
						<div className='flex flex-col items-start w-[785px] gap-[30px]'>
							<p className='text-gray font-CN font-bold leading-7 text-lg'>
								Проведение инженерных работ позволяет получить объем необходимых
								данных для аргументирования технической возможности и
								экономической целесообразности проектирования и застройки на
								конкретной территории. Информировать о возможных рисках и
								изменениях геологической ситуации и окружающей среды, связанных
								со строительством и эксплуатацией объекта, разработать
								мероприятия по охране и защите природы и населения от влияния
								техногенных факторов.
							</p>
							<p className='text-gray font-CN font-bold leading-7 text-lg'>
								Проведение инженерных исследований – первый этап грамотного
								проектирования и строительства. Без изыскательских работ
								невозможно получить разрешение на строительство, разработать
								безупречный проект, пройти экспертизу.
							</p>
							<button className='text-yellow text-sm font-CN font-bold mores relative'>
								Подробнее
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default About
