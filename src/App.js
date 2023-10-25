import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Header, Footer, ServicePage } from './components/index'
import './App.css'

import {
	NotFound,
	AboutUs,
	Articles,
	Contact,
	Home,
	Price,
	Service,
	Vacancies,
	Project,
	ProjectPage
} from './pages'

function App() {
	const location = useLocation()
	const [showFooter, setShowFooter] = useState(false)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [location.pathname])

	useEffect(() => {
		setTimeout(() => {
			setShowFooter(true)
		}, 2000)
	}, [])

	return (
		<div className='App'>
			<Header />
			<div className={`main mt-[134px]`}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/Project' element={<Project />} />
					<Route path='/AboutUs' element={<AboutUs />} />
					<Route path='/Service' element={<Service />} />
					<Route path='/Price' element={<Price />} />
					<Route path='/Articles' element={<Articles />} />
					<Route path='/Vacancies' element={<Vacancies />} />
					<Route path='/Contact' element={<Contact />} />
					<Route path='*' element={<NotFound />} />
					<Route path='/ProjectPage' element={<ProjectPage />} />
					<Route path='/ServicePage' element={<ServicePage />} />
				</Routes>
			</div>
			{showFooter && <Footer />}
		</div>
	)
}

export default App
