import React, { useEffect } from 'react'
import {
	About,
	BLock,
	HowWeWork,
	Box,
	MainTypes,
	Hero,
	HigLevel,
	QuestionsAndAnswers,
	Needs,
	ContactUs
} from '../../components'

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			<Hero />
			<About />
			<MainTypes />
			<BLock />
			<HowWeWork />
			<Box />
			<HigLevel />
			<QuestionsAndAnswers />
			<Needs />
			<ContactUs />
		</>
	)
}

export default Home
