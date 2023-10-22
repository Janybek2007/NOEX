import React from 'react'
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
